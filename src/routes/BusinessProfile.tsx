import React, { useState, useEffect, useRef } from 'react'
import '../style/Profile.css'
import { FormControl, FormLabel, Image, Icon, Input, Button, useToast, Text } from '@chakra-ui/react'
import { BiImageAdd } from "react-icons/bi"
import { useUser } from '../context/UserContext'
import { getDatabase, ref, get, set} from "firebase/database";
import _ from "lodash";

const BusinessProfile = () => {
  const db:any = getDatabase();
  const toast = useToast();
  const { profile, user, setProfile }:any = useUser();
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<any>({
    img:null,
    businessName:"",
    cac:null,
    name:"",
    email:"",
    phone:"",
    address:"",
    postalCode:"",
    city:"",
    state:"",
    country:"",
    lat:null,
    long:null
  })

  const filterPlace = (obj:any, key:string) => {
    let arr = obj.address_components.filter((x:any) => x.types.includes(key))
    return arr[0].long_name;
  }

  const autoCompleteRef:any = useRef();
  const inputRef:any = useRef();
  useEffect(() => {
    const options = {
      componentRestrictions: { country: "ng" },
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["address"]
    };

    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current,
    options
    );

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      setValues((prev:any) => ({
        ...prev, 
        address:place.name,
        postalCode:filterPlace(place, "postal_code"),
        city:filterPlace(place, "administrative_area_level_2"),
        state:filterPlace(place,"administrative_area_level_1"),
        country: filterPlace(place,"country"),
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng()
      }))
    });
  }, []);

  const handleFileChange = (e:any) => {
    const reader: FileReader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setValues((prev:any) => ({...prev, img: reader.result}))
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (name:string, e:any) => {
    setValues((prev:any) => ({...prev, [name]: e.target.value}))
  }

  const submitProfile = () => {
    setLoading(true)
    const userRef = ref(db, `users/${user.uid}`);
    get(userRef).then((snapshot:any) => {
      if (snapshot.exists()) {
        set(ref(db, `users/${user.uid}`), values);
        toast({
          title: 'Success!',
          description: "Profile updated successfully",
          status: 'success',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
        setProfile(values)
      } else{
        toast({
          title: 'OOPS!',
          description: "This user doesn't exist",
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
      }
      setLoading(false)
    })
  }

  useEffect(() => {
    setValues((prev:any) => 
      ({
        ...prev, 
        ...profile
      }))
  },[profile])

  return (
      <main className='sec-profile sec-profile2 mt-3 p-3 col-md-8 p-md-4 gx-md-3'>
        <h5 className='useracc mt-3'>Users’ Account</h5>
        <FormControl
          borderRadius="195px"
          height="115px"
          width="115px"
          overflow="hidden"
          position="relative"
          border="1px solid"
          borderColor="primary"
          bg={"#fff"} 
          mt={10}
          mr={5}
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
            {!values.img ? (          
              <Icon as={BiImageAdd} color="primary" fontSize="30px"/>
            ) : (
              <Image
                src={values.img}
                alt=""
                height="115px"
                width="100%"
              />
            )}
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
          />
        </FormControl>
        <Text fontSize={"sm"} mt={2}>Click the image to change it</Text>
        <article className='art-griid mt-md-3'>
          <div className='mb-3 mt-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Business Name(Approved by CAC)
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("businessName", e)}
              value={values.businessName}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3 mt-md-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              CAC Number
            </label>
            <input
              type='number'
              onChange={(e) => handleInputChange("cac", e)}
              value={values.cac}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article className='art-griid'>
        <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Display Name
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("name", e)}
              value={values.name}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Business Email Address
            </label>
            <input
              type='email'
              onChange={(e) => handleInputChange("email", e)}
              value={values.email}
              required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article className='art-griid'>
        <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Phone Number
            </label>
            <input
              type='number'
              onChange={(e) => handleInputChange("phone", e)}
              value={values.phone}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Company Office Address
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("address", e)}
              value={values.address}
              ref={inputRef}
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article className='art-griid'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Postal Code
            </label>
            <input
              type='number'
              onChange={(e) => handleInputChange("postalCode", e)}
              value={values.postalCode}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              City
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("city", e)}
              value={values.city}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <article className='art-griid'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              State
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("state", e)}
              value={values.state}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Country
            </label>
            <input
              type='text'
              onChange={(e) => handleInputChange("country", e)}
              value={values.country}
              // required
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
        </article>
        <Button
          bg='primary'
          color='light'
          w='150px'
          borderRadius={0}
          my='30px'
          display="block"
          mx="auto"
          onClick={submitProfile}
          isLoading={loading}
          isDisabled={_.isEqual(profile, values) }
        >
          SAVE DETAILS
        </Button>
      </main>
  )
}

export default BusinessProfile
