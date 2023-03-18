import { Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink, useLocation, useNavigate} from "react-router-dom";
import Logo from "../svg/Logo";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Flex
      justify='space-between'
      p={10}
      color='dark'
      boxShadow='0px 2px 20px rgba(0, 0, 0, 0.25)'
      position='fixed'
      top={0}
      backgroundColor='light'
      zIndex={2}
      w='100%'
    >
      <Flex>
        <Logo />
        <Text fontWeight={500} fontSize='25px'>
          {' '}
          Recycler
        </Text>
      </Flex>
      <Flex
        fontSize='16px'
        fontWeight={600}
        w='65vw'
        justify='space-evenly'
        alignItems='center'
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
          onClick={() => navigate('/login')}
        >
          LOGIN
        </Button>
        <Button bg='primary' color='light' w='150px' borderRadius={0} onClick={() => navigate('/Register')}>
            REGISTER
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header;
