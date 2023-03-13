import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo";

function Header() {
  return (
    <Flex
      justify="space-between"
      p={10}
      color="dark"
      boxShadow="0px 2px 20px rgba(0, 0, 0, 0.25)"
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
        <Link to="/">HOME</Link>
        <Link to="/AboutUs">ABOUT US</Link>
        <Link to="/">GALLERY</Link>
        <Link to="/">CONTACT US</Link>
        <Link to="/">OUR BLOG</Link>
        <Button bg="primary" color="light" w="150px" borderRadius={0}>
          LOGIN
        </Button>
        <Button bg="primary" color="light" w="150px" borderRadius={0}>
          <Link to="/Register">REGISTER</Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
