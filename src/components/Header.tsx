import { Button, Flex, Text, Link, useDisclosure, IconButton, SlideFade } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link as ReactLink, useLocation, useNavigate} from "react-router-dom";
import { useUser } from "../context/UserContext";
import Logo from "../svg/Logo";
import { signOut } from 'firebase/auth';
import { AuthenticationContext } from "../context/AuthenticationContext";
import Alert from "./Alert";
import { RiMenu5Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, setProfile, storage }:any = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth } = useContext(AuthenticationContext);
  const { isOpen:isMenuOpen , onToggle } = useDisclosure()

  const handleClick = () => {
    if(profile){
      onOpen()
    } else{
      navigate('/login')
    }
  }

  const handleLogout = () => {
    signOut(auth);
    setProfile(null);
    storage.removeItem("recyclerToken")
    onClose();
  }

  return (
    <Flex
      justify='space-between'
      px={{base:5, xl:10}}
      py={{base:5, md:10}}
      color='dark'
      boxShadow='0px 2px 20px rgba(0, 0, 0, 0.25)'
      position='fixed'
      top={0}
      backgroundColor='light'
      zIndex={2}
      w='100%'
      flexWrap={{base:"wrap", lg:"nowrap"}}
    >
      <Flex onClick={() => navigate("/")} cursor="pointer">
        <Logo />
        <Text fontWeight={500} fontSize='25px'>
          {' '}
          Recycler
        </Text>
      </Flex>
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
      />

      <SlideFade in={isMenuOpen} offsetY='20px' style={{width:"calc(100vw - 40px)"}}>
        {isMenuOpen && <Flex direction="column" alignItems="center" mt={7}>
          <Link as={ReactLink} to='/' _hover={{ color: 'primary' }} color={location.pathname ==="/"? "primary": "dark"} mb={3} onClick={onToggle}>
            HOME
          </Link>
          <Link mb={3} as={ReactLink} to='AboutUs' _hover={{ color: 'primary' }} color={location.pathname ==="/AboutUs"? "primary": "dark"} onClick={onToggle}>
            ABOUT US
          </Link>
          <Link mb={3} as={ReactLink} to='/Gallery' _hover={{ color: 'primary' }} color={location.pathname ==="/Gallery"? "primary": "dark"} onClick={onToggle}>
            GALLERY
          </Link>
          <Link mb={3} as={ReactLink} to='/ContactUs' _hover={{ color: 'primary' }} color={location.pathname ==="/ContactUs"? "primary": "dark"} onClick={onToggle}>
            CONTACT US
          </Link>
          <Link  mb={3} as={ReactLink} to='/blog' _hover={{ color: 'primary' }} color={location.pathname ==="/blog"? "primary": "dark"} onClick={onToggle}>
            OUR BLOG
          </Link>
          <Button
            bg='primary'
            color='light'
            w='150px'
            borderRadius={0}
            onClick={handleClick}
            mb={3}
          >
            {profile ? "LOGOUT" : "LOGIN"}
          </Button>
          <Button bg='primary' color='light' w='150px' borderRadius={0} onClick={() => navigate('/Register')} mb={3}>
              REGISTER
          </Button>
        </Flex>}
      </SlideFade>

      <Flex
        fontSize='16px'
        fontWeight={600}
        w={{base:"80% ", xl:"65%"}}
        justify='space-evenly'
        alignItems='center'
        display={{base:"none", lg:"flex"}}
      >
        <Link as={ReactLink} to='/' _hover={{ color: 'primary' }} color={location.pathname ==="/"? "primary": "dark"}>
          HOME
        </Link>
        <Link as={ReactLink} to='AboutUs' _hover={{ color: 'primary' }} color={location.pathname ==="/AboutUs"? "primary": "dark"}>
          ABOUT US
        </Link>
        <Link as={ReactLink} to='/Gallery' _hover={{ color: 'primary' }} color={location.pathname ==="/Gallery"? "primary": "dark"}>
          GALLERY
        </Link>
        <Link as={ReactLink} to='/ContactUs' _hover={{ color: 'primary' }} color={location.pathname ==="/ContactUs"? "primary": "dark"}>
          CONTACT US
        </Link>
        <Link as={ReactLink} to='/blog' _hover={{ color: 'primary' }} color={location.pathname ==="/blog"? "primary": "dark"}>
          OUR BLOG
        </Link>
        <Button
          bg='primary'
          color='light'
          w='150px'
          borderRadius={0}
          onClick={handleClick}
        >
          {profile ? "LOGOUT" : "LOGIN"}
        </Button>
        <Button bg='primary' color='light' w='150px' borderRadius={0} onClick={() => navigate('/Register')}>
            REGISTER
        </Button>
      </Flex>
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
  )
}

export default Header;
