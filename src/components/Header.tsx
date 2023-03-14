import { Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink} from "react-router-dom";
import Logo from "../svg/Logo";

function Header() {
  return (
    <Flex
      justify="space-between"
      p={10}
      color="dark"
      boxShadow="0px 2px 20px rgba(0, 0, 0, 0.25)"
      position="fixed"
      top={0}
      backgroundColor="light"
      zIndex={2}
      w="100%"
    >
      <Flex>
        <Logo />
        <Text fontWeight={500} fontSize="25px">
          {" "}
          Recycler
        </Text>
      </Flex>
      <Flex
        fontSize="16px"
        fontWeight={600}
        w="65vw"
        justify="space-evenly"
        alignItems="center"
      >
        <Link as={ReactLink} to="/" _hover={{color:"primary"}}>HOME</Link>
        <Link as={ReactLink} to="AboutUs" _hover={{color:"primary"}}>ABOUT US</Link>
        <Link as={ReactLink} to="/" _hover={{color:"primary"}}>GALLERY</Link>
        <Link as={ReactLink} to="/" _hover={{color:"primary"}}>CONTACT US</Link>
        <Link as={ReactLink} to="/" _hover={{color:"primary"}}>OUR BLOG</Link>
        <Button bg="primary" color="light" w="150px" borderRadius={0}>
          LOGIN
        </Button>
        <Button bg="primary" color="light" w="150px" borderRadius={0}>
          REGISTER
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
