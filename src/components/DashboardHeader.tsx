import { Badge, Box, Button, Flex, IconButton, Link, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Logo from "../svg/Logo";
import { Link as ReactLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import Alert from "./Alert";
import { useUser } from "../context/UserContext";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { signOut } from 'firebase/auth';

function DashboardHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile,setProfile, storage }:any = useUser();
  const { auth } = useContext(AuthenticationContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isMenuOpen , onToggle } = useDisclosure();

  const handleLogout = () => {
    signOut(auth);
    setProfile(null);
    storage.removeItem("recyclerToken")
    onClose();
    navigate("/");
  }

  return (
    <Flex
      px={{base:5, xl:10}}
      py={{base:5, md:10}}
      color="dark"
      boxShadow="0px 2px 20px rgba(0, 0, 0, 0.25)"
      position="fixed"
      top={0}
      backgroundColor="light"
      zIndex={2}
      w="100%"
      justify="space-between"
      alignItems="center"
      flexWrap={{base:"wrap", md:"nowrap"}}
    >
      <Flex onClick={() => navigate("/")} cursor="pointer">
        <Logo />
        <Text fontWeight={500} fontSize="25px">
          {" "}
          Recycler
        </Text>
      </Flex>
      <Flex w="250px" position="absolute" bottom={0} mx="calc(50vw - 200px)" justify="space-between" display={{base:"none",md:"flex"}}>
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
          to={profile.userType === "individual" ? "/dashboard/profile": "/dashboard/business/profile"}
          fontWeight={500}
          fontSize="20px"
          color={
            location.pathname === "/dashboard/profile" || location.pathname==="/dashboard/business/profile" ? "#a6a6a6" : "dark"
          }
          borderBottom={location.pathname === "/dashboard/profile" || location.pathname=== "/dashboard/business/profile" ? "4px solid #0FA958" : "none"}
          py={3}
          _hover={{
            textDecoration:"none"
          }}
        >
          Profile
        </Link>
      </Flex>

      <Flex>
        <IconButton
            aria-label="scroll"
            icon={isMenuOpen ? <AiOutlineClose/> : <RiMenu5Fill />}
            bg="transparent"
            color="primary"
            fontSize="30px"
            display={{base:"block", lg:"none"}}
            _hover={{
              bg: "transparent",
            }}
            onClick={onToggle}
            mr={3}
        />
        <Box position="relative" mr={3}>
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
          mr={{base:0, md:3}}
        />

        <IconButton
          aria-label="scroll"
          icon={<AiOutlineLogout />}
          bg="transparent"
          color="primary"
          fontSize="30px"
          onClick={onOpen}
          _hover={{
            bg: "transparent",
          }}
          display={{base:"none", md:"block"}}
        />
      </Flex>

      {isMenuOpen && <SlideFade in={isMenuOpen} offsetY='20px' className="mobile-dashboard-menu">
        <Flex direction="column" alignItems="center" mt={7}>
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
          mb={3} 
          onClick={onToggle}
        >
          Dashboard
        </Link>
        <Link
          as={ReactLink}
          to={profile.userType === "individual" ? "/dashboard/profile": "/dashboard/business/profile"}
          fontWeight={500}
          fontSize="20px"
          color={
            location.pathname === "/dashboard/profile" || location.pathname==="/dashboard/business/profile" ? "#a6a6a6" : "dark"
          }
          borderBottom={location.pathname === "/dashboard/profile" || location.pathname=== "/dashboard/business/profile" ? "4px solid #0FA958" : "none"}
          py={3}
          _hover={{
            textDecoration:"none"
          }}
          mb={3} 
          onClick={onToggle}
        >
          Profile
        </Link>
          <Button
            bg='primary'
            color='light'
            w='150px'
            borderRadius={0}
            onClick={onOpen}
            mb={3}
          >
            LOGOUT
          </Button>
        </Flex>
      </SlideFade>}
      <Alert
        title={"Log out"}
        body={"Are you sure you want to log out?"}
        actionText={"Proceed"}
        action={() => handleLogout()}
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="red"
      />
    </Flex>
  );
}

export default DashboardHeader;
