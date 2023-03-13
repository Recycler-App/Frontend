import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Bg from "../assets/bg.png"
import React from "react";
import Logo from "../svg/Logo";
import { FaChevronDown } from "react-icons/fa"

function Home() {
  return (
    <>
        <Box
            backgroundImage={`url(${Bg})`}
            minHeight="calc(100vh - 120px)"
            backgroundAttachment= "fixed"
            backgroundPosition= "center"
            backgroundRepeat= "no-repeat"
            backgroundSize= "cover"
            color="light"
        >
            <Box w="60%" ml="100px" pt="calc(50vh - 242px)">
                <Flex alignItems="center" mb={5}>
                    <Logo />
                    <Text fontWeight={500} fontSize="32px">
                    {" "}
                    Recycler
                    </Text>
                </Flex>
                <Text fontWeight={500} fontSize="48px" mb={5}>“Become an Environmental Hero with Recycler - Transform Plastic Waste into a Sustainable Future!"</Text>
                <Button bg="primary" color="light" px={10} py={7} borderRadius={0} mt={5}>
                    GET STARTED
                </Button>
            </Box>  
            <IconButton
                aria-label="scroll"
                icon={<FaChevronDown/>}
                bg="transparent"
                color="light"
                fontSize="46px"
                display="block"
                mt={10}
                mx="auto"
                _hover={{
                    bg:"transparent"
                }}
                onClick={() => window.scrollBy(0, 500)}
            />
        </Box>
        
        <Box px={10} my={10}>
            <Text fontSize="32px" fontWeight="500" color="primary">We focus on waste recycling and the health of the ecosystem</Text>
            <Flex alignItems="center" justify="space-between">
            <Text fontSize="24px" fontWeight="400" w="65%">
                Recycler is a mission-driven company that is dedicated to raising
                awareness about the importance of recycling plastics. We believe
                that recycling plastics is essential in order to protect our planet
                and reduce our global footprint. Recycler is an innovative recycling
                platform that helps individuals and businesses across the world
                recycle plastic waste.
            </Text>
            <Image src="./cuate.svg" w="30%"/>
            </Flex>
            <Text fontSize="24px" fontWeight="500" mt={3}>
            Our mission is to reduce plastic waste in the environment and create a
            more sustainable future. We believe that recycling plastics is
            essential in order to protect our planet and reduce our global
            footprint, and effective and efficient way of recycling plastic waste.
            That’s why we created this platform that offers a variety of services
            and technologies to make the process of plastic recycling as easy and
            hassle-free as possible. From our easy-to-use online portal to our
            comprehensive services and technologies, we make sure that our clients
            have access to the best possible recycling options.
            </Text>

            <Button bg="primary" color="light" px={10} py={7} borderRadius={0} mt={5}>
                More about us
            </Button>
        </Box>

        <Box px={10} my={10}>
            <Text fontSize="32px" fontWeight="500" color="primary">Get started with us</Text>
            
        </Box>
    </>
  );
}

export default Home;
