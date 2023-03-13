import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <>
      <Box px={10}>
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

        <Button bg="primary" color="light" px={10} borderRadius={0} mt={5}>
            More about us
        </Button>
      </Box>
    </>
  );
}

export default Home;
