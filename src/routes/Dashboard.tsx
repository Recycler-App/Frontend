import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
  Icon,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn, MdMail } from "react-icons/md";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import Bin from "../svg/Bin";
import Earn from "../svg/Earn";
import Order from "../svg/Order";
import People from "../svg/People";
import Recycle from "../svg/Recycle";
import Sad from "../svg/Sad";
import InfoAlert from "../components/Alert";
import { CgDanger } from "react-icons/cg";
import {
  getDatabase,
  ref,
  onValue,
  equalTo,
  orderByChild,
  query,
  limitToLast
} from "firebase/database";
import { snapshotToArray } from "../utils/helper";

function Dashboard() {
  const { profile, user }: any = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const db: any = getDatabase();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(profile?.userType ==="individual"){
      const req = query(
        ref(db, "recycle_requests"),
        orderByChild("requestedBy"),
        equalTo(user?.uid),
        limitToLast(4)
      );
      onValue(req, (snapshot: any) => {
        setOrders(snapshotToArray(snapshot));
      });
    } else{
      const req = query(
        ref(db, "recycle_requests"),
        orderByChild("buyerId"),
        equalTo(user?.uid)
      );
      onValue(req, (snapshot: any) => {
        setOrders(snapshotToArray(snapshot));
      });
    }
  }, [db, user, profile]);

  const getBadgecolor=(status:string) => {
    if(status==="completed"){
        return"green";
    } else if( status === "pending"){
        return "yellow"
    } else if(status === "approved"){
        return "blue"
    } else{
          return "red"
    }
   }

  const OrderTable = ({ data }: any) => (
    <TableContainer>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th fontSize="16px" color="dark">
              {profile?.userType === "business" ? "Seller's name" : "Buyer's name"}
            </Th>
            <Th fontSize="16px" color="dark">
              Delivery Type
            </Th>
            <Th fontSize="16px" color="dark">
              Quantity(kg)
            </Th>
            <Th fontSize="16px" color="dark">
              Price
            </Th>
            <Th fontSize="16px" color="dark">
              Status
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((x: any, i: any) => (
            <Tr bg="#FAFAFA" key={i}>
              <Td color="#A6A6A6" fontSize="16px">
              {profile?.userType === "business" ? x?.seller : x?.buyer}
              </Td>
              <Td color="#A6A6A6" fontSize="16px">
                {x.delivery}
              </Td>
              <Td color="#A6A6A6" fontSize="16px">
                {x.quantity}
              </Td>
              <Td color="#A6A6A6" fontSize="16px">
                {x.price}
              </Td>
              <Td color="#A6A6A6" fontSize="16px">
                <Badge colorScheme={getBadgecolor(x?.status)}>{x?.status}</Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  const individualActions = [
    {
      icon: <Bin />,
      text: "Smart Bin",
      href: "/dashboard/bin",
    },
    {
      icon: <Earn />,
      text: "Earnings",
      href: "/dashboard/earn",
    },
    {
      icon: <Order />,
      text: "My Orders",
      href: "/dashboard/orders",
    },
    {
      icon: <Recycle />,
      text: "Recycling",
      href: "/dashboard",
    },
  ];

  const businessActions = [
    {
      icon: <Bin />,
      text: "Recycle Requests",
      href: "/dashboard/business/recycle-requests",
    },
    {
      icon: <Earn />,
      text: "Transaction Review",
      href: "/dashboard/business/transactions",
    },
    {
      icon: <Order />,
      text: "My Orders",
      href: "/dashboard/business/orders",
    },
    {
      icon: <People />,
      text: "Collection Centers",
      href: "/dashboard",
    },
  ];

  return (
    <Box minHeight="calc(100vh - 120px)">
      {!profile.address && (
        <Alert status="info" alignItems="center" justifyContent="center">
          <AlertIcon />
          <Text textAlign="center" fontSize={"lg"} fontWeight={600}>
            {" "}
            Welcome to recycler 🎊 🎊 🎊 🎊 🎊 . Please complete your profile
            before you start recycling.
          </Text>
        </Alert>
      )}
      <Box px={{ base: 0, xl: 10 }} m={{ base: "20px", md: "50px" }} pt={10}>
        <Flex
          justify={{ base: "center", lg: "space-between" }}
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
        >
          <Flex
            w={{ base: "100%", md: "80%", lg: "48%" }}
            boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
            bg="#fff"
            color="dark"
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={500}
            justify="space-between"
            px={10}
            py={5}
            // h='200px'
            alignItems="center"
            direction={{ base: "column", md: "row" }}
            wordBreak="break-word"
          >
            <Box textAlign="center">
              <Image
                src={profile?.img}
                alt="user-image"
                borderRadius="50%"
                boxSize="120px"
                fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
              <Text textTransform="uppercase" mt={2}>
                {profile?.name.split(" ")[0] || "NA"}
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "calc(100% - 150px)" }}>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<MdLocationOn />}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp;
                {profile.state && profile.country
                  ? profile?.state + " , " + profile?.country
                  : "NA"}
              </Text>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<MdMail />}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp;{profile?.email}
              </Text>
              <Text display="flex" alignItems="baseline">
                <IconButton
                  aria-label="scroll"
                  icon={<AiOutlinePhone />}
                  bg="transparent"
                  color="primary"
                  fontSize="25px"
                  _hover={{
                    bg: "transparent",
                  }}
                />
                &nbsp; {profile?.phone || "NA"}
              </Text>
            </Box>
          </Flex>
          <Box
            w={{ base: "100%", md: "80%", lg: "48%" }}
            bg="primary"
            color="light"
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={500}
            px={10}
            py={5}
            // h={{ba'200px'
            mt={{ base: 5, lg: 0 }}
          >
            <Text fontWeight={700}>Refer and earn</Text>
            <Text mb={5}>
              Earn when you invite friends to the website with your referal code
            </Text>
            <Button
              color="primary"
              textTransform="uppercase"
              bg="light"
              borderRadius={0}
              onClick={onOpen}
            >
              refer friends
            </Button>
          </Box>
        </Flex>

        <Flex
          w="100%"
          justifyContent={{ base: "center", sm: "space-between" }}
          mt="70px"
          flexWrap="wrap"
        >
          {profile.userType === "individual" &&
            individualActions.map((action, i) => (
              <Box key={i} textAlign="center" mb={{ base: 5, lg: 0 }}>
                <Flex
                  boxSize="200px"
                  mb={3}
                  border="1px solid"
                  borderColor="primary"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => navigate(action.href)}
                  cursor="pointer"
                >
                  {action.icon}
                </Flex>
                <Text fontSize="24px" fontWeight={400}>
                  {action.text}
                </Text>
              </Box>
            ))}
          {profile.userType === "business" &&
            businessActions.map((action, i) => (
              <Box key={i} textAlign="center" mb={{ base: 5, lg: 0 }}>
                <Flex
                  boxSize="200px"
                  mb={3}
                  border="1px solid"
                  borderColor="primary"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => navigate(action.href)}
                  cursor="pointer"
                >
                  {action.icon}
                </Flex>
                <Text fontSize="24px" fontWeight={400}>
                  {action.text}
                </Text>
              </Box>
            ))}
        </Flex>

        <Box
          w="100%"
          boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
          p={{base: 5, md:10}}
          minH="450px"
          mt="70px"
        >
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={500}
            color="primary"
            mb={10}
          >
            Order history
          </Text>

          {orders.length === 0 ? <Box
            textAlign="center"
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={400}
            color="#a6a6a6"
          >
            <Sad style={{ margin: "0px auto" }} />
            <Text mt={10}>Oops! You don’t have any order history yet.</Text>

            <Text>
              When you start selling your waste you will see your history here.
            </Text>
          </Box> : <OrderTable data={orders}/>}
        </Box>
      </Box>
      <InfoAlert
        title={"COMING SOON"}
        body={
          <Box display="flex" flexDirection="column" alignItems="center">
            <Icon as={CgDanger} color="darkorange" boxSize="120px" />
            <Text mt={10}>This feature is currently not available</Text>
          </Box>
        }
        isOpen={isOpen}
        onClose={onClose}
        bg="primary"
      />
    </Box>
  );
}

export default Dashboard;
