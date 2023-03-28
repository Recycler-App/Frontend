import { Alert, AlertIcon, Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn, MdMail } from "react-icons/md";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import Bin from "../svg/Bin";
import Earn from "../svg/Earn";
import Order from "../svg/Order";
import People from "../svg/People";
import Recycle from "../svg/Recycle";
import Sad from "../svg/Sad";

function Dashboard() {
    const { profile }:any = useUser();
    const navigate = useNavigate()
  const individualActions = [
    {
      icon: <Bin />,
      text: 'Smart Bin',
      href:"/dashboard/bin"
    },
    {
      icon: <Earn />,
      text: 'Earn Money',
      href:"/dashboard/earn"
    },
    {
      icon: <Order />,
      text: 'My Orders',
      href:"/dashboard/orders"
    },
    {
      icon: <Recycle />,
      text: 'Recycling',
      href:"/dashboard/recycle"
    },
  ]

  const businessActions = [
    {
      icon: <Bin />,
      text: 'Recycle Requests',
      href:"/dashboard/bin"
    },
    {
      icon: <Earn />,
      text: 'Transaction Review',
      href:"/dashboard/earn"
    },
    {
      icon: <Order />,
      text: 'My Orders',
      href:"/dashboard/orders"
    },
    {
      icon: <People />,
      text: 'Collection Centers',
      href:"/dashboard/recycle"
    },
  ]

  return (
    <Box minHeight='calc(100vh - 120px)'>
      {!profile.address && <Alert status='info' alignItems='center'
  justifyContent='center' >
        <AlertIcon />
        <Text textAlign="center" fontSize={"lg"} fontWeight={600}> Welcome to recycler 🎊 🎊 🎊 🎊 🎊 . Please  complete your profile before you start recycling.</Text>  
      </Alert>}
      <Box px={{ base: 0, xl: 10 }} m={{ base: "20px", md: "50px" }} pt={10}>
        <Flex justify={{base:"center", lg:"space-between"}} direction={{base:"column", lg:"row"}} alignItems="center">
          <Flex
            w={{base:"100%", md:"80%", lg:'48%'}}
            boxShadow='0px 2px 15px 2px rgba(15, 169, 88, 0.15)'
            bg='#fff'
            color='dark'
            fontSize={{base:"18px", md:"20px"}}
            fontWeight={500}
            justify='space-between'
            px={10}
            py={5}
            // h='200px'
            alignItems='center'
            direction={{base:"column", md:"row"}}
            wordBreak="break-word"
          >
            <Box textAlign='center'>
              <Image
                src={profile?.img}
                alt="user-image"
                borderRadius="50%"
                boxSize="120px"
                fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
              <Text textTransform="uppercase" mt={2}>{profile?.name.split(" ")[0]|| "NA"}</Text>
            </Box>
            <Box w={{base:"100%", md:"calc(100% - 150px)"}}>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<MdLocationOn/>}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp;{profile.state && profile.country ? profile?.state +" , "+ profile?.country : "NA"}
              </Text>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<MdMail/>}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp;{profile?.email}
              </Text>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<AiOutlinePhone/>}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp; {profile?.phone || "NA"}
              </Text>
            </Box>
          </Flex>
          <Box
            w={{base:"100%", md:"80%", lg:'48%'}}
            bg='primary'
            color='light'
            fontSize={{base:"18px", md:"20px"}}
            fontWeight={500}
            px={10}
            py={5}
            // h={{ba'200px'
            mt={{base: 5, lg:0}}
          >
            <Text fontWeight={700}>Refer and earn</Text>
            <Text mb={5}>
              Earn when you invite friends to the website with your referal code
            </Text>
            <Button
              color='primary'
              textTransform='uppercase'
              bg='light'
              borderRadius={0}
            >
              refer friends
            </Button>
          </Box>
        </Flex>

        <Flex w='100%' justifyContent={{base:"center", sm:'space-between'}} mt='70px' flexWrap="wrap">
          {profile.userType==="individual" && individualActions.map((action, i) => (
            <Box key={i} textAlign='center' mb={{base:5, lg:0}}>
              <Flex
                boxSize='200px'
                mb={3}
                border='1px solid'
                borderColor='primary'
                justifyContent='center'
                alignItems='center'
                onClick={() => navigate(action.href)}
                cursor="pointer"
              >
                {action.icon}
              </Flex>
              <Text fontSize='24px' fontWeight={400}>
                {action.text}
              </Text>
            </Box>
          ))}
          {profile.userType==="business" && businessActions.map((action, i) => (
            <Box key={i} textAlign='center' mb={{base:5, lg:0}}>
              <Flex
                boxSize='200px'
                mb={3}
                border='1px solid'
                borderColor='primary'
                justifyContent='center'
                alignItems='center'
                onClick={() => navigate(action.href)}
                cursor="pointer"
              >
                {action.icon}
              </Flex>
              <Text fontSize='24px' fontWeight={400}>
                {action.text}
              </Text>
            </Box>
          ))}
        </Flex>

        <Box
          w='100%'
          boxShadow='0px 2px 15px 2px rgba(15, 169, 88, 0.15)'
          p={10}
          minH='450px'
          mt='70px'
        >
          <Text fontSize={{base:"18px", md:"20px"}} fontWeight={500} color='primary' mb={10}>
            Order history
          </Text>

          <Box textAlign="center" fontSize={{base:"20px", md:"24px"}} fontWeight={400} color="#a6a6a6">
              <Sad style={{margin:"0px auto"}}/>
              <Text mt={10}>Oops! You don’t have any order history yet.</Text>

              <Text>When you start selling your waste you will see your history here.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
