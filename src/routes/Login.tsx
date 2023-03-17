import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../svg/Logo";
import Img from "../assets/bro.svg";
import Input from "../components/Input";

function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Box w="40%" bg="primary" h="100%" p={10}>
        <Flex>
          <Logo color="#fff" />
          <Text fontWeight={500} fontSize="25px">
            {" "}
            Recycler
          </Text>
        </Flex>
        <Box textAlign="center" w="70%" mx="auto" mt="calc(50vh - 350px)">
          <Image src={Img} mb={5} mx="auto" />
          <Text color="light" fontSize="28px" fontWeight={500} mb={5}>
            Hey, it’s good to have you onboard Let’s get started!
          </Text>
          <Button
            bg="light"
            color="primary"
            w="150px"
            borderRadius={0}
            mt="50px"
          >
            REGISTER
          </Button>
        </Box>
      </Box>
      <Box backgroundImage={"url('../assets/Group 50.png')"}>
        <Box textAlign="center" w="70%" mx="auto" mt="calc(50vh - 350px)">
          <Text fontWeight={500} fontSize="28px" color="dark" mb={10}>
            Hey, welcome back it’s good to have you back onboard!
          </Text>
          <Text
            borderBottom="4px dashed #70D709"
            color="primary"
            fontWeight={600}
            fontSize="40px"
            w="max-content"
            mb={8}
            mx="auto"
          >
            LOGIN
          </Text>

          <Input label="Email address" />
          <Input
            label="Password"
            helperProps={{
              color: "error",
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "400",
            }}
            helperText="Forgot Password?"
          />

          <Button
            bg="primary"
            color="light"
            w="150px"
            borderRadius={0}
            mt="50px"
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
