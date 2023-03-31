import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    ButtonGroup,
    Badge,
    Icon,
    useDisclosure
  } from "@chakra-ui/react";
  import {
    getDatabase,
    ref,
    onValue,
    set,
    remove
  } from "firebase/database";
import { useEffect, useState } from "react";
import { CgDanger } from "react-icons/cg";
import { useNavigate, useParams } from "react-router";
import Alert from "../components/Alert";
  import { useUser } from "../context/UserContext";
import Success from "../svg/Success";
import ReactIntense from 'react-intense'
  
  function ViewRequest() {
    const params = useParams();
    const navigate = useNavigate()
    const { profile }: any = useUser();
    const [ show, setShow] = useState(false)
    const [details, setDetails] = useState<any>(null)
    const [ completing, setCompleting ] = useState(false)
    const db: any = getDatabase();
    const [deleting, setDeleting] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isConfirmDeleteOpen, onOpen:onConfirmDeleteOpen, onClose:onConfirmDeleteClose } = useDisclosure();
    const { isOpen:isCompleteOpen, onOpen:onCompleteOpen, onClose:onCompleteClose } = useDisclosure();
    const { isOpen:isConfirmCompleteOpen, onOpen:onConfirmCompleteOpen, onClose:onConfirmCompleteClose } = useDisclosure();
   
   useEffect(() => {
    const req = ref(db, `recycle_requests/${params.id}`);
    onValue(req, (snapshot: any) => {
        if (snapshot.exists()) {
            setDetails(snapshot.val())
        } else{
            setDetails(null)
        }
    })
   },[params, db])

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

   const deleteRequest = () => {
    setDeleting(true)
    const req = ref(db, `recycle_requests/${params.id}`);
    remove(req).then(() => {
        setDeleting(false)
        onOpen();
        navigate("/dashboard/orders")
      });

   }


   const markAsCompleted = () => {
    setCompleting(true)
    const req = ref(db, `recycle_requests/${params.id}`);
    if(details.buyerCompleted === true){
        set(req, {
            ...details,
            status:"completed"
        })
        setCompleting(false)
        onCompleteOpen()
    } else{
        set(req, {
            ...details,
            sellerCompleted:true,
        })
        setCompleting(false)
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
            Recycle request <Badge colorScheme={getBadgecolor(details?.status)}>{details?.status}</Badge>
          </Text>
        </Box>
        <Box px={5} py={10}>
          <Flex
            justify="space-between"
            mb={10}
            flexDirection={{ base: "column", md: "row" }}
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
                        {(details && details?.delivery === "self") ? profile?.address : details?.location.name}
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
                                <ReactIntense src={pic} className="image-viewer" loader='uil-spin-css'/>
                            </Box>
                        ))}
                    </Flex>}
                </Box>
            </Box>
          </Flex>
          {details?.status === "pending" && <ButtonGroup display="flex" justifyContent="space-between" w="100%">
          <Button bg="primary" color="light" w="150px" borderRadius={0} mb={5} onClick={() => navigate(`/dashboard/orders/edit/${params.id}`)}>
            EDIT REQUEST
          </Button>
          <Button bg="error" color="light" w="150px" borderRadius={0} mb={5} onClick={onConfirmDeleteOpen} isLoading={deleting}>
            DELETE REQUEST
          </Button>
          </ButtonGroup>}
          {(details?.status === "approved" && !details?.sellerCompleted) &&
          <Box w={{ base: "100%", md: "48%" }}>
            <Text color="primary" fontSize="sm" mb={3}>Mark as completed only when you have received payment from the company or agent.</Text>
            <Button bg="primary" color="light" w="200px" borderRadius={0} mb={5} onClick={onConfirmCompleteOpen} isLoading={completing}>
                Mark as completed
            </Button>
          </Box>}
          
        </Box>
        <Alert
            title={"CONFIRM COMPLETED"}
            body={<Box display="flex" flexDirection="column" alignItems="center">
            <Icon as={CgDanger} color="darkorange" boxSize="120px"/>
            <Text mt={10}>Are you sure you want to mark this as completed?</Text>
            </Box>}
            isOpen={isConfirmCompleteOpen}
            onClose={onConfirmCompleteClose}
            actionText={"Proceed"}
            action={() => {
                onConfirmCompleteClose()
                markAsCompleted()
            }}
            bg="primary"
        />

        <Alert
            title={"SUCCESS"}
            body={<Box display="flex" flexDirection="column" alignItems="center">
            <Success/>
            <Text mt={10}>{`You have successfully marked this transaction as completed`}</Text>
            </Box>}
            isOpen={isCompleteOpen}
            onClose={onCompleteClose}
            bg="primary"
        />

        <Alert
            title={"CONFIRM DELETE"}
            body={<Box display="flex" flexDirection="column" alignItems="center">
            <Icon as={CgDanger} color="darkorange" boxSize="120px"/>
            <Text mt={10}>Are you sure you want to delete this request?</Text>
            </Box>}
            isOpen={isConfirmDeleteOpen}
            onClose={onConfirmDeleteClose}
            actionText={"Proceed"}
            action={() => {
                onConfirmDeleteClose()
                deleteRequest()
            }}
            bg="primary"
        />
        <Alert
            title={"SUCCESS"}
            body={<Box display="flex" flexDirection="column" alignItems="center">
            <Success/>
            <Text mt={10}>You have successfully deleted this recycle request</Text>
            </Box>}
            isOpen={isOpen}
            onClose={onClose}
            bg="primary"
        />
      </Box>
    );
  }
  
  export default ViewRequest;
  