import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Bin from "../svg/Bin";
import Earn from "../svg/Earn";
import Order from "../svg/Order";
import Recycle from "../svg/Recycle";
import Sad from "../svg/Sad";

function Dashboard() {
  const actions = [
    {
        icon: <Bin/>,
        text: "Smart Bin"
    },
    {
        icon: <Earn/>,
        text: "Earn Money"
    },
    {
        icon: <Order/>,
        text: "My Orders"
    },
    {
        icon: <Recycle/>,
        text: "Recycling"
    }
  ]

  return (
    <Box minHeight="calc(100vh - 120px)" p={10}>
      <Flex justify="space-between">
        <Flex
          w="48%"
          boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
          bg="#fff"
          color="dark"
          fontSize="20px"
          fontWeight={500}
          justify="space-between"
          px={10}
          py={5}
          h="200px"
          alignItems="center"
        >
          <Box textAlign="center">
            <Image
              src=""
              alt="user-image"
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="50%"
              boxSize="120px"
            />
            <Text textTransform="uppercase" mt={2}>chinonye</Text>
          </Box>
          <Box>
            <Text>Lagos, Nigeria</Text>
            <Text>chinonye@gmail.com</Text>
            <Text>+234 906 888 9087</Text>
          </Box>
        </Flex>
        <Box
            w="48%"
            bg="primary"
            color="light"
            fontSize="20px"
            fontWeight={500}
            px={10}
            py={5}
            h="200px"
        >
            <Text fontWeight={700}>Refer and earn</Text>
            <Text mb={5}>Earn when you invite friends to the website with your referal code</Text>
            <Button
                color="primary"
                textTransform="uppercase"
                bg="light"
                borderRadius={0}
            >
                refer friends
            </Button>

        </Box>
      </Flex>

      <Flex w="100%" justifyContent="space-between" mt="70px">
        {actions.map((action, i) => (
            <Box key={i} textAlign="center">
                <Flex boxSize="200px" mb={3} border="1px solid" borderColor="primary" justifyContent="center" alignItems="center">
                    {action.icon}
                </Flex>
                <Text fontSize="24px" fontWeight={400}>{action.text}</Text>
            </Box>
        ))}
      </Flex>

      <Box w="100%" boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)" p={10} minH="450px" mt="70px">
        <Text fontSize="20px" fontWeight={500} color="primary" mb={10}>Order history</Text>

        <Box textAlign="center" fontSize="24px" fontWeight={400} color="#a6a6a6">
            <Sad style={{margin:"0px auto"}}/>
            <Text mt={10}>Oops! You don’t have any order history yet.</Text>

            <Text>When you start selling your waste you will see your history here.</Text>

        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
