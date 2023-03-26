import React from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Bg from "../assets/bg.png";
import BgTwo from "../assets/bg2.png";
import ItemOne from "../assets/image 12.png";
import ItemTwo from "../assets/image 13.png";
import ItemThree from "../assets/image 14.png";
import ItemFour from "../assets/image 15.png";
import ItemFive from "../assets/image 16.png";
import PartnerOne from "../assets/image 2.png";
import PartnerTwo from "../assets/image 3.png";
import PartnerThree from "../assets/image 4.png";
import PartnerFour from "../assets/image 5.png";
import PartnerFive from "../assets/image 6.png";
import PartnerSix from "../assets/image 7.png";
import PartnerSeven from "../assets/image 8.png";
import PartnerEight from "../assets/image 9.png";
import PartnerNine from "../assets/image 10.png";
import PartnerTen from "../assets/image 11.png";
import Logo from "../svg/Logo";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Houses from "../svg/Houses";
import Corporate from "../svg/Corporate";
import Bottle from "../svg/Bottle";
import School from "../svg/School";
import Delete from "../svg/Delete";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Slider.css";

function Home() {
  const { profile }: any = useUser();
  const navigate = useNavigate();
  const services = [
    {
      icon: <Houses />,
      text: "Household Recycling",
    },
    {
      icon: <Corporate />,
      text: "Cooperate Recycling",
    },
    {
      icon: <Bottle />,
      text: "Plastic Recycling",
    },
    {
      icon: <School />,
      text: "School Recycling",
    },
  ];

  const collectibles = [
    {
      src: ItemOne,
      text: "Cans",
    },
    {
      src: ItemTwo,
      text: "Pure water satchets",
    },
    {
      src: ItemThree,
      text: "Plastic Chairs",
    },
    {
      src: ItemFour,
      text: "Pet bottles",
    },
    {
      src: ItemFive,
      text: "Bottle caps",
    },
  ];

  const partners = [
    {
      src: PartnerOne,
      text: "HINCKLEY EWASTE RECYCLING",
    },
    {
      src: PartnerTwo,
      text: "Wecyclers",
    },
    {
      src: PartnerThree,
      text: "Greenbase Recycling LimiteD",
    },
    {
      src: PartnerFour,
      text: "Greenhill Recycling Limited",
    },
    {
      src: PartnerFive,
      text: "Street Waste Company Limited (SWCL)",
    },
    {
      src: PartnerSix,
      text: "Westman Recycle Limited",
    },
    {
      src: PartnerSeven,
      text: "E-Terra Technologies Limited",
    },
    {
      src: PartnerEight,
      text: "JDSL RECYCLING",
    },
    {
      src: PartnerNine,
      text: "Waste–Point Limited",
    },
    {
      src: PartnerTen,
      text: "Mottainai Limited",
    },
  ];

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <IconButton
        aria-label="scroll"
        icon={<FaChevronLeft />}
        bg="transparent"
        color="primary"
        fontSize="46px"
        mx="auto"
        mr={5}
        _hover={{
          bg: "transparent",
        }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <IconButton
        aria-label="scroll"
        icon={<FaChevronRight />}
        bg="transparent"
        color="primary"
        fontSize="46px"
        mx="auto"
        ml={5}
        _hover={{
          bg: "transparent",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box
        backgroundImage={`url(${Bg})`}
        minHeight={{base:"calc(100vh - 80px)", md:"calc(100vh - 120px)"}}
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        color="light"
        position="relative"
      >
        <Box
          w={{ base: "calc(100% - 40px)", md: "75%" }}
          ml={{ base: "20px", md: "50px" }}
          pt={{ base: "calc(50vh - 250px)", sm:"calc(50vh - 220px)", md: "calc(50vh - 279px)" }}
        >
          <Flex alignItems="center" mb={5}>
            <Logo />
            <Text fontWeight={500} fontSize={{ base: "28px", md: "32px" }}>
              {" "}
              Recycler
            </Text>
          </Flex>
          <Text fontWeight={500} fontSize={{ base: "28px", sm:"38px", md: "48px" }} mb={5}>
            “Become an Environmental Hero with Recycler - Transform Plastic
            Waste into a Sustainable Future!"
          </Text>
          <Button
            bg="primary"
            color="light"
            px={10}
            py={{ base: 3, md: 7 }}
            borderRadius={0}
            mt={5}
            onClick={() => {
              profile ? navigate("/dashboard") : navigate("/login");
            }}
          >
            GET STARTED
          </Button>
        </Box>
        <IconButton
          aria-label="scroll"
          icon={<FaChevronDown />}
          bg="transparent"
          color="light"
          fontSize="46px"
          position="absolute"
          bottom="30px"
          left="calc(50% - 23px)"
          mx="auto"
          _hover={{
            bg: "transparent",
          }}
          onClick={() => window.scrollBy(0, 500)}
        />
      </Box>

      <Box
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
      >
        <Text
          fontSize={{ base: "28px", md: "32px" }}
          fontWeight="500"
          color="primary"
          mb={5}
        >
          We focus on waste recycling and the health of the ecosystem
        </Text>
        <Flex alignItems="center" justify="space-between" color="#000000" flexDirection={{base:"column", sm:"row"}}>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="400"
            w={{base:"100%", sm:"65%"}}
          >
            Recycler is a mission-driven company that is dedicated to raising
            awareness about the importance of recycling plastics. We believe
            that recycling plastics is essential in order to protect our planet
            and reduce our global footprint. Recycler is an innovative recycling
            platform that helps individuals and businesses across the world
            recycle plastic waste.
          </Text>
          <Image src="./cuate.svg" w={{base:"100%", sm:"30%"}} mt={{base:5, sm:0}}/>
        </Flex>
        <Text
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="400"
          mt={3}
          color="#000000"
        >
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="500"
            color="primary"
            as="span"
          >
            Our mission
          </Text>{" "}
          is to reduce plastic waste in the environment and create a more
          sustainable future. We believe that recycling plastics is essential in
          order to protect our planet and reduce our global footprint, and
          effective and efficient way of recycling plastic waste. That’s why we
          created this platform that offers a variety of services and
          technologies to make the process of plastic recycling as easy and
          hassle-free as possible.{" "}
        </Text>
        <Text
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="400"
          mt={3}
          color="#000000"
        >
          From our easy-to-use online portal to our comprehensive services and
          technologies, we make sure that our clients have access to the best
          possible recycling options.
        </Text>

        <Button
          bg="primary"
          color="light"
          px={10}
          py={{ base: 3, md: 7 }}
          borderRadius={0}
          mt={5}
        >
          MORE ABOUT US
        </Button>
      </Box>

      <Box
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
      >
        <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="500" color="primary" mb={10}>
          Get started with us
        </Text>
        <Flex justify={{base:"center", sm:"space-between"}} flexWrap="wrap">
          {services.map((service) => (
            <Box
              boxShadow="0px 2px 10px rgba(15, 169, 88, 0.2)"
              w="22%"
              minW="220px"
              maxW="230px"
              p={10}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              mb={{ base: 5, lg: 0 }}
            >
              <Box mb={3}>{service.icon}</Box>
              <Text fontSize={{ base: "20px", md: "24px" }}fontWeight="400">
                {service.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Flex
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
        alignItems="center"
        justify="space-between"
        flexDirection={{base:"column", md:"row"}}
      >
        <Box w={{base:"100%", md:"60%"}}>
          <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="500" color="primary" mb={10}>
            Our Services
          </Text>
          <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="400" color="accent">
            Our Services include collecting and transporting
            plastic waste, sorting and grading plastic waste, and finally,
            processing the plastic waste into usable products. We also offer a
            variety of technologies, such as state-of-the-art optical sorting
            machines and high-performance shredding machines, to ensure that our
            clients have access to the most efficient and cost-effective
            recycling solutions.
          </Text>
        </Box>
        <Image src="./pana.svg" w={{base:"100%", md:"35%"}} mt={{base:5, md:0}}/>
      </Flex>

      <Flex
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
        h="auto"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Box bg="primary" color="light" p={{base:5, sm:10}} w={{ base: "100%", md: "50%" }}>
          <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="700" mb={10}>
            What Happens?
          </Text>
          <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="500" mb={5}>
            After collection, recyclables are sent to a recovery facility to be
            sorted, cleaned, and processed into materials that can be used in
            manufacturing.
          </Text>
        </Box>
        <Box
          backgroundImage={`url(${BgTwo})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "300px", md: "auto" }}
        >
          <Delete
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "64px",
            }}
          />
        </Box>
      </Flex>

      <Box
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
      >
        <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="500" color="primary" mb={10}>
          Our Partners
        </Text>
        <Slider {...settings}>
          {partners.map((partner, i) => (
            <Box
              w="24%"
              // minW="220px"
              maxW="240px"
              h="200px"
              p={5}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              boxShadow="0px 2px 20px rgba(0, 0, 0, 0.1)"
              border="2px solid"
              borderColor="primary"
              bg={i === 2 ? "primary" : "light"}
              color={i === 2 ? "light" : "dark"}
              mb={10}
            >
              <Image src={partner.src} mb={5} mx="auto" maxH="60px" />
              <Text fontSize="16px" fontWeight="500" textTransform="uppercase">
                {partner.text}
              </Text>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
        px={{ base: 0, sm: 5, md: 10 }}
        my="100px"
        mx={{ base: "20px", md: "50px" }}
      >
        <Text fontSize={{ base: "28px", md: "32px" }} fontWeight="500" color="primary" mb={10}>
          Our Collectibles
        </Text>
        <Flex justify={{base:"center", sm:"space-between"}} flexWrap="wrap">
          {collectibles.map((collectible) => (
            <Box
              w="22%"
              minW="200px"
              maxW="220px"
              p={10}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image src={collectible.src} />
              <Text fontSize="16px" fontWeight="500">
                {collectible.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Home;
