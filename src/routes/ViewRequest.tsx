import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    ButtonGroup,
    Badge,
  } from "@chakra-ui/react";
  import {
    getDatabase,
    ref,
    get
  } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
  import { useUser } from "../context/UserContext";
  
  function ViewRequest() {
    const params = useParams();
    const { profile }: any = useUser();
    const [ show, setShow] = useState(false)
    const [details, setDetails] = useState<any>(null)
    const db: any = getDatabase();
   
   useEffect(() => {
    const req = ref(db, `recycle_requests/${params.id}`);
    get(req).then((snapshot:any) => {
        if (snapshot.exists()) {
            setDetails(snapshot.val())
        } else{
            setDetails(null)
        }
    })
    .catch(err => console.log(err))
   },[params, db])

   const getBadgecolor=(status:string) => {
    if(status==="completed"){
        return"#0FA958";
    } else if( status === "pending"){
        return "yellow"
    } else {
        return "#FF0000"
    }
   }
     
  
    return (
      <Box
        w={{ base: "100%", md: "66.66666667%" }}
        mt={4}
        ml={{ base: 0, md: 4 }}
        boxShadow="0px 2px 15px 2px rgba(15, 169, 88, 0.15)"
      >
        <Box borderBottom="0.5px solid rgba(0, 0, 0, 0.1)" py={2} px={10}>
          <Text fontSize="18px" fontWeight={500} color="primary">
            {" "}
            Recycle request <Badge bg={getBadgecolor(details?.status)}>{details?.status}</Badge>
          </Text>
        </Box>
        <Box px={5} py={10}>
          <Flex
            justify="space-between"
            mb={10}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box w={{ base: "100%", md: "48%" }}>
                <Flex
                    border="1px solid rgba(15, 169, 88, 0.2)"
                    borderRadius={0}
                    h="163px"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    mb={5}
                >
                   <Image
                        width="120px"
                        height="auto"
                        maxH="120px"
                        borderRadius="50%"
                        src={profile.img}
                        fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        objectFit="cover"
                        objectPosition="center"
                    /> 
                </Flex>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Seller Address</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {(details && details?.location) || profile.address}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Quantity of recyclable</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {(details && details?.quantity) || ""}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Delivery method</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {(details && details?.delivery) || ""}
                    </Flex>
                </Box>
                  
            </Box>
            <Box w={{ base: "100%", md: "48%" }}>
                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Seller's Name</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {(profile.firstName && profile.lastName)? profile.firstName+" "+ profile.lastName : profile.name}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Seller's  Email</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {profile.email}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Seller's Contact</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                        {profile.phone || ""}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Selling price</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                    >
                       &#8358;{details && details.price}
                    </Flex>
                </Box>

                <Box mb={5}>
                    <Text mb={2} fontWeight={600}>Pictures</Text>
                    <Flex
                        border="1px solid rgba(15, 169, 88, 0.2)"
                        borderRadius={0}
                        h="40px"
                        px={5}
                        alignItems="center"
                        bg="primary"
                        color="light"
                        as="button"
                        onClick={() => setShow(!show)}
                        w="100%"
                    >
                        View Images
                    </Flex>
                    {show && <Flex my={3}>
                        {details && details.pictures.map((pic:string, i:any) => (
                            <Box p={2} pos="relative" key={i}>
                                <Image
                                    src={pic}
                                    alt=""
                                    height="115px"
                                    width="115px"
                                />
                            </Box>
                        ))}
                    </Flex>}
                </Box>
            </Box>
          </Flex>
          <ButtonGroup display="flex" justifyContent="space-between" w="100%">
          <Button bg="primary" color="light" w="150px" borderRadius={0} mb={5}>
            EDIT REQUEST
          </Button>
          <Button bg="error" color="light" w="150px" borderRadius={0} mb={5}>
            DELETE REQUEST
          </Button>
          </ButtonGroup>
          
        </Box>
      </Box>
    );
  }
  
  export default ViewRequest;
  