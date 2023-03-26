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
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Map from "../components/Map";

function Bin() {
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
  const [searchInput, setSearchInput] = useState<HTMLInputElement>();

  const _generateAddress = useCallback(() => {
    console.log(mapState)

    const { mapApi }: any = mapState;
    const geocoder = new mapApi.Geocoder();

    geocoder.geocode(
      { location: { lat: mapState.lat, lng: mapState.lng } },
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
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  },[mapState])


  useEffect(() => {
    const { mapApi, mapInstance }: any = mapState;
    if( mapApi && mapInstance && searchInput){
        const options = {
          // restrict your search to a specific type of result
          types: ["address"],
          // restrict your search to a specific country, or an array of countries
          componentRestrictions: { country: ["ng"] },
        };
        const addPlace = (place: any) => {
            setMapState((prev): any => {
              return {
                ...prev,
                places: [place],
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              };
            });
            _generateAddress();
          };

        const autoComplete = new mapApi.places.Autocomplete(searchInput, options);
        const onPlaceChanged = ({ mapInstance, addplace }: any = mapState) => {
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
    }
    // return () => mapApi.event.clearInstanceListeners(searchInput);
    
  }, [mapState, searchInput, _generateAddress]);

  const clearSearchBox = () => {
    if (searchInput) {
      searchInput.value = "";
    }
  };
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

  const _onClick = (value: any) => {
    setMapState((prev): any => {
      return {
        ...prev,
        lat: value.lat,
        lng: value.lng,
      };
    });
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

  return (
    <Box
      w={{base:"100%", md:"66.66666667%"}}
      mt={4}
      ml={{base:0, md:4}}
      boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
    >
      <Box borderBottom="0.5px solid rgba(0, 0, 0, 0.1)" py={2} px={10}>
        <Text fontSize="18px" fontWeight={500} color="primary">
          {" "}
          Smart Bin
        </Text>
      </Box>
      <Box px={5} py={10}>
        <Flex justify="space-between" mb={10} flexDirection={{base:"column-reverse", md:"row"}}>
          <Box w={{base:"100%", md:"48%"}}>
            <Text fontSize="20px" fontWeight={500}>
              Locate a seller nearby
            </Text>
            <Text fontSize="16px" fontWeight={500} color="#a6a6a6" mb={4}>
              <Icon as={MdLocationOn} mr={3} color="primary" />
              {searchInput?.value || "Ikeja, Lagos State"}
            </Text>
            <Box mb={4}>
              <Text mb={2}>How much waste do you want to recycle (in kg)?</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
              />
            </Box>
            <Box mb={4}>
              <Text mb={2}>How much do you want to sell it?</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
              />
            </Box>
            <Box mb={4}>
              <Text mb={2}>Select delivery option</Text>
              <Select 
                placeholder='Select option'
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
               >
                <option value='option1'>Self delivery</option>
                <option value='option2'>Agent pickup</option>
              </Select>
            </Box>
            <Box mb={4}>
              <Text mb={2}>Upload pictures of the waste</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
              />
            </Box>
            <Box mb={4}>
              <Text mb={2}>Which company do you want to sell to.</Text>
              <Input
                border="1px solid rgba(15, 169, 88, 0.2)"
                borderRadius={0}
                h="40px"
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
              />
            </Box>
          </Box>
          <Box w={{base:"100%", md:"48%"}}>
            {mapState.mapApiLoaded && <InputGroup mb={4}>
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
            </InputGroup>}
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
        <Button bg="primary" color="light" w="150px" borderRadius={0} mb={4}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}

export default Bin;
