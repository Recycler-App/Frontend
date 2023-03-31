import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormControl,
  FormLabel,
  Image,
  IconButton,
  Progress,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { ref as StorageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Map from "../components/Map";
import SuccessAlert from '../components/Alert'
import {
  getDatabase,
  ref,
  get,
  push,
  equalTo,
  orderByChild,
  query,
} from "firebase/database";
import { useUser } from "../context/UserContext";
import { snapshotToArray } from "../utils/helper";
import { BiImageAdd } from "react-icons/bi";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Success from "../svg/Success";
import { useNavigate } from "react-router";

function Bin() {
  const navigate = useNavigate()
  const [mapState, setMapState] = useState({
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    geoCoder: null,
    places: [],
    center: [],
    zoom: 9,
    address: "",
    draggable: true,
    lat: null,
    lng: null,
  });
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchInput, setSearchInput] = useState<HTMLInputElement>();
  const [addressRef, setAddressRef] = useState<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
  const [biz, setBiz] = useState([]);
  const [percent, setPercent] = useState(0);
  const { profile, user }: any = useUser();
  const db: any = getDatabase();
  const { storage } = useContext(AuthenticationContext)
  const [values, setValues] = useState<any>({
    requestedBy: user.uid,
    status:"pending",
    seller: (profile?.firstName && profile?.lastName) ? (profile?.firstName + " "+profile?.lastName) : profile?.name,
    buyer: "",
    quantity: "",
    price: "",
    delivery: "",
    pictures: null,
    buyerId:"",
    location:null
  });

  useEffect(()=> {
    setValues((prev:any) => ({
      ...prev, 
      requestedBy: user.uid,
      status:"pending",
      seller: (profile?.firstName && profile?.lastName) ? (profile?.firstName + " "+profile?.lastName) : profile?.name
    }))
  },[user, profile])

  const filterPlace = (obj:any, key:string) => {
    let arr = obj.address_components.filter((x:any) => x.types.includes(key))
    if(arr.length !==0){
      return arr[0].long_name;
    } else {
      return ""
    }
    
  }
  const filterBusinessByCity = useCallback((city: string) => {
    const res = biz.filter((x: any) => x?.city === city);
    setBiz(res);
  },[biz]);

  const _generateAddress = useCallback(
    (lat?: any, lng?: any) => {
      const { mapApi }: any = mapState;
      const geocoder = new mapApi.Geocoder();
      geocoder.geocode(
        { location: { lat: lat || mapState.lat, lng: lng || mapState.lng } },
        (results: any, status: any) => {
          if (status === "OK") {
            if (results[0]) {
              setMapState((prev): any => {
                return {
                  ...prev,
                  zoom: 12,
                  address: results[0].formatted_address,
                };
              });
                filterBusinessByCity(
                filterPlace(results[0], "administrative_area_level_2")
                );
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        }
      );
    },
    [mapState, filterBusinessByCity]
  );

  useEffect(() => {
    const { mapApi, mapInstance }: any = mapState;
    if (mapApi && mapInstance && searchInput) {
      const options = {
        // restrict your search to a specific type of result
        types: ["address"],
        // restrict your search to a specific country, or an array of countries
        componentRestrictions: { country: ["ng"] },
      };
    //   const autoCompleteRef:any = useRef();
      const addPlace = (place: any) => {
        setMapState((prev): any => {
          return {
            ...prev,
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
        });
        _generateAddress(
          place.geometry.location.lat(),
          place.geometry.location.lng()
        );
      };

      const autoComplete = new mapApi.places.Autocomplete(searchInput, options);
      const autoCompletePickup = new mapApi.places.Autocomplete(addressRef, options);
      const onPlaceChanged = ({ mapInstance }: any = mapState) => {
        const place = autoComplete.getPlace();

        if (!place.geometry) return;
        if (place.geometry.viewport) {
          mapInstance.fitBounds(place.geometry.viewport);
        } else {
          mapInstance.setCenter(place.geometry.location);
          mapInstance.setZoom(17);
        }

        addPlace(place);
        searchInput?.blur();
      };
      autoComplete.addListener("place_changed", onPlaceChanged);
      autoComplete.bindTo("bounds", mapInstance);
      autoCompletePickup.addListener("place_changed", async function () {
        const place = await autoCompletePickup.getPlace();
        setValues((prev:any) => ({
        ...prev, 
        location: {
          address_components: place.address_components,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          place_id: place.place_id,
          name:place.name
        }
        }))
      });
    }
  }, [mapState, searchInput, _generateAddress, addressRef]);

  const clearSearchBox = () => {
    if (searchInput) {
      searchInput.value = "";
    }
  };

//   FETCH USER'S CURRENT LOCATION
  const setCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setMapState((prev): any => {
          return {
            ...prev,
            center: [position.coords.latitude, position.coords.longitude],
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        });
      });
    }
  };

  useEffect(() => {
    setCurrentLocation();
  }, []);

  const onMarkerInteraction = (mouse: any) => {
    setMapState((prev): any => {
      return {
        ...prev,
        draggable: false,
        lat: mouse.lat,
        lng: mouse.lng,
      };
    });
  };

  const onMarkerInteractionMouseUp = (): any => {
    setMapState((prev): any => {
      return {
        ...prev,
        draggable: true,
      };
    });
    _generateAddress();
  };

  const _onChange = ({ center, zoom }: any) => {
    setMapState((prev): any => {
      return {
        ...prev,
        center: center,
        zoom: zoom,
      };
    });
  };

  const _onClick = async (value: any) => {
    await setMapState((prev): any => {
      return {
        ...prev,
        center: { lat: value.lat, lng: value.lng },
        lat: value.lat,
        lng: value.lng,
      };
    });
    _generateAddress(value.lat, value.lng);
    console.log(mapState);
  };

  const apiHasLoaded = (map: any, maps: any) => {
    setMapState((prev): any => {
      return {
        ...prev,
        mapApiLoaded: true,
        mapInstance: map,
        mapApi: maps,
      };
    });

    _generateAddress();
  };

  const fetchRecyclersInState = () => {
    const usersRef = query(
      ref(db, "users"),
      orderByChild("userType"),
      equalTo("business")
    );
    get(usersRef).then((snapshot: any) => {
      if (profile.state) {
        setBiz(
          snapshotToArray(snapshot)?.filter(
            (x: any) => x?.state === profile.state
          )
        );
      } else {
        setBiz(snapshotToArray(snapshot));
      }
    });
  };

  const handleInputChange = (name: string, e: any) => {
    setValues((prev: any) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true)
    const req = ref(db, `recycle_requests`);
    push(req , values).then(() => {
        onOpen()
        setLoading(false)
        setValues({
            requestedBy: user.uid,
            status:"pending",
            seller: (profile?.firstName && profile?.lastName) ? (profile?.firstName + " "+profile?.lastName) : profile?.name,
            buyer: "",
            quantity: "",
            price: "",
            delivery: "",
            pictures: null,
            buyerId:"",
            location:null
        })
      })
      .catch(err => {
        toast({
          title: 'OOPS!',
          description: "An error occured trying to process this request",
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
        setLoading(false)
    })
  }

    // HANDLING OF IMAGE UPLOAD TO FIREBASE STORAGE
    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        if (!file) {
        alert("Please upload an image first!");
        }
        
        const storageRef = StorageRef(storage, `/files/${file.name}`);
        
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            
            // update progress
            setPercent(percent);
            },
            (err) => console.log(err),
            () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                if(values.pictures){
                    setValues((prev:any) => ({...prev, pictures: [...values.pictures, url]}))
                } else{
                    setValues((prev:any) => ({...prev, pictures: [url]}))
                }
            });
        });
      };

  return (
    <Box
      w={{ base: "100%", md: "66.66666667%" }}
      mt={4}
      ml={{ base: 0, md: 4 }}
      boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
    >
      <Box borderBottom="0.5px solid rgba(0, 0, 0, 0.1)" py={2} px={10}>
        <Text fontSize="18px" fontWeight={500} color="primary">
          {" "}
          Smart Bin
        </Text>
      </Box>
      <Box px={5} py={10}>
        <Flex
          justify="space-between"
          mb={10}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box w={{ base: "100%", md: "48%" }}>
            <Text mb={2}>
              Locate a buyer nearby
              <Text mb={2} color="primary" fontSize="sm">
                Or select from the map and see list of buyers in that location
              </Text>
            </Text>
            {biz.length === 0 ? (
              <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                mb={5}
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Oops!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  <Text mb={2}>
                    No buyers in this location. Please select a new location
                  </Text>
                  {profile?.state && (
                    <Button borderRadius={0} onClick={fetchRecyclersInState}>
                      View others in your state
                    </Button>
                  )}
                </AlertDescription>
              </Alert>
            ) : (
              <Select
                placeholder="Select option"
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
                mb={5}
                id="option_select"
                onChange={(e) => {
                    handleInputChange("buyerId", e)
                    let sel:any = document.getElementById("option_select")
                    setValues((prev: any) => ({ ...prev, buyer: sel?.options[sel.selectedIndex].text }))

                }}
              >
                {biz.map((x: any) => (
                  <option
                    value={x.key}
                    key={x.key}
                  >
                    {x.businessName || x.name}
                  </option>
                ))}
              </Select>
            )}

            <Box mb={5}>
              <Text mb={2}>How much waste do you want to recycle (in kg)?</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
                onChange={(e) => handleInputChange("quantity", e)}
                value={values.quantity}
              />
            </Box>
            <Box mb={5}>
              <Text mb={2}>How much do you want to sell it?</Text>
              <Text mb={2} color="primary" fontSize="sm">
                Estimated price(&#8358;80 - &#8358;100 per kg)
              </Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
                onChange={(e) => handleInputChange("price", e)}
                value={values.price}
              />
            </Box>
            <Box mb={5}>
              <Text mb={2}>Select delivery option</Text>
              <Select
                placeholder="Select option"
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
                onChange={(e) => handleInputChange("delivery", e)}
                value={values.delivery}
              >
                <option value="self">Self delivery</option>
                <option value="agent">Agent pickup</option>
              </Select>
            </Box>
            {values.delivery === "agent" && <Box mb={5}>
              <Text mb={2}>Select pickup location</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                ref={(ref) => {
                    if (ref) {
                      setAddressRef(ref);
                    }
                  }}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
                onChange={(e) => handleInputChange("location", e)}
                value={values.location ? values.location.name :  ""}
              />
            </Box>}
            <Box mb={5}>
              <Text mb={2}>Upload pictures of your recyclables (max 2)</Text>
              <FormControl
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                height="auto"
                maxH="250px"
                width="80%"
                overflow="hidden"
                position="relative"
                bg={"#fff"} 
                pos="relative"
                >
                <FormLabel
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    m="0"
                    p={!values.img ? "24px" : "0px"}
                    height="115px"
                >       
                    <Icon as={BiImageAdd} color="primary" fontSize="30px"/>
                    
                </FormLabel>
                <Input
                    type="file"
                    onChange={handleFileChange}
                    title=" "
                    p="0"
                    borderRadius="none"
                    cursor="pointer"
                    border="none"
                    focusBorderColor="none"
                    height="115px"
                    position="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    opacity="0"
                    isDisabled={values.pictures && values.pictures.length === 2}
                />
                {percent !==0 && <Flex my={3} alignItems="center">
                <Progress colorScheme='green' hasStripe size='sm' value={percent} width="115px" mr={3}/>
                <Text>{percent}%</Text>
                </Flex>}
                </FormControl>

                <Flex my={5}>
                    {values.pictures && values.pictures.map((pic:string, i:any) => (
                        <Box p={2} pos="relative" key={i}>
                            <Image
                                src={pic}
                                alt=""
                                height="115px"
                                width="115px"
                            />
                            <IconButton
                                aria-label="delete"
                                icon={<AiOutlineDelete/>}
                                bg="light"
                                color="primary"
                                fontSize="18px"
                                boxSize={"24px"}
                                _hover={{
                                    bg: "light"
                                }}
                                onClick={() => setValues((prev:any) => ({...prev, pictures: values.pictures.filter((x:any) => x !== pic)}))}
                                pos="absolute"
                                top="10px"
                                right="10px"
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "48%" }}>
            {mapState.mapApiLoaded && (
              <InputGroup mb={5}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={AiOutlineSearch} color="primary" />}
                />
                <Input
                  border="1px solid rgba(15, 169, 88, 0.2)"
                  borderRadius={0}
                  h="40px"
                  _focus={{
                    boxShadow: "none",
                    borderColor: "primary",
                  }}
                  placeholder="Search"
                  ref={(ref) => {
                    if (ref) {
                      setSearchInput(ref);
                    }
                  }}
                  type="text"
                  onFocus={() => clearSearchBox}
                />
              </InputGroup>
            )}
            <Map
              mapState={mapState}
              _onChange={_onChange}
              _onClick={_onClick}
              onMarkerInteraction={onMarkerInteraction}
              onMarkerInteractionMouseUp={onMarkerInteractionMouseUp}
              apiHasLoaded={apiHasLoaded}
            />
          </Box>
        </Flex>
        <Button bg="primary" color="light" w="150px" borderRadius={0} mb={5} onClick={handleSubmit} isLoading={loading}>
          SUBMIT
        </Button>
      </Box>
      <SuccessAlert
        title={"SUCCESS"}
        body={<Box display="flex" flexDirection="column" alignItems="center">
          <Success/>
          <Text mt={10}>The company will contact you as soon as they approve your request</Text>
        </Box>}
        isOpen={isOpen}
        onClose={onClose}
        actionText={"Go to dashboard"}
        action={() => navigate("/dashboard")}
        bg="primary"
      />
    </Box>
  );
}

export default Bin;
