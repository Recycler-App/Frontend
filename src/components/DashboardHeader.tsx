import { Badge, Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Logo from "../svg/Logo";
import { Link as ReactLink, useLocation, useNavigate } from "react-router-dom";

function DashboardHeader() {
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <Flex
      p={10}
      color="dark"
      boxShadow="0px 2px 20px rgba(0, 0, 0, 0.25)"
      position="fixed"
      top={0}
      backgroundColor="light"
      zIndex={2}
      w="100%"
      justify="space-between"
      alignItems="center"
    >
      <Flex onClick={() => navigate("/")} cursor="pointer">
        <Logo />
        <Text fontWeight={500} fontSize="25px">
          {" "}
          Recycler
        </Text>
      </Flex>
      <Flex w="250px" position="absolute" bottom={0} mx="calc(50vw - 200px)" justify="space-between">
        <Link
          as={ReactLink}
          to="/dashboard"
          fontWeight={500}
          fontSize="20px"
          color={location.pathname === "/dashboard" ? "#a6a6a6" : "dark"}
          borderBottom={location.pathname === "/dashboard" ? "4px solid #0FA958" : "none"}
          py={3}
          _hover={{
            textDecoration:"none"
          }}
        >
          Dashboard
        </Link>
        <Link
          as={ReactLink}
          to="/dashboard/profile"
          fontWeight={500}
          fontSize="20px"
          color={
            location.pathname === "/dashboard/profile" ? "#a6a6a6" : "dark"
          }
          borderBottom={location.pathname === "/dashboard/profile" ? "4px solid #0FA958" : "none"}
          py={3}
          _hover={{
            textDecoration:"none"
          }}
        >
          Profile
        </Link>
      </Flex>
      <Flex>
        <Box position="relative" mr={5}>
          <IconButton
            aria-label="scroll"
            icon={<BsBell />}
            bg="transparent"
            color="primary"
            fontSize="30px"
            _hover={{
              bg: "transparent",
            }}
          />
          <Badge
            bg="error"
            borderRadius="50%"
            boxSize={2}
            position="absolute"
            top={1}
            right={2}
          ></Badge>
        </Box>
        <IconButton
          aria-label="scroll"
          icon={<FiSettings />}
          bg="transparent"
          color="primary"
          fontSize="30px"
          _hover={{
            bg: "transparent",
          }}
        />
      </Flex>
    </Flex>
  );
}

export default DashboardHeader;
