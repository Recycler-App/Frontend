import { Box, Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useUser } from '../context/UserContext';
import Sad from '../svg/Sad'
import {
    getDatabase,
    ref,
    get,
    equalTo,
    orderByChild,
    query,
  } from "firebase/database";
import { snapshotToArray } from '../utils/helper';

function RecycleRequests() {
    const { user }: any = useUser();
    const navigate = useNavigate()
    const db: any = getDatabase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const req = query(
        ref(db, "recycle_requests"),
        orderByChild("buyerId"),
        equalTo(user.uid)
        );
        get(req).then((snapshot: any) => {
        setOrders(snapshotToArray(snapshot));
        });
    }, [db, user]);


    const OrderTable = ({data}:any) => (
        <TableContainer>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th fontSize="16px" color="dark">
                    Seller’s Name
                </Th>
                <Th fontSize="16px" color="dark">
                    Seller’s Location
                </Th>
                <Th fontSize="16px" color="dark">
                  Quantity(kg)
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map( (x:any, i:any) => (<Tr bg="#FAFAFA" key={i}>
                <Td color="#A6A6A6" fontSize="16px">
                  {x.seller}
                </Td>
                <Td color="#A6A6A6" fontSize="16px">
                  {x.location || x.delivery}
                </Td>
                <Td color="#A6A6A6" fontSize="16px">
                  {x.quantity}
                </Td>
                <Td color="#A6A6A6">
                  <Button
                    bg="primary"
                    color="light"
                    w="150px"
                    fontSize="14px"
                    borderRadius={0}
                    onClick={() => navigate(`/dashboard/business/recycle-requests/${x.key}`)}
                  >
                    VIEW REQUEST
                  </Button>
                </Td>
              </Tr>))}
            </Tbody>
          </Table>
        </TableContainer>
      );

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
                Recycle requests 
            </Text>
            </Box>
            <Box px={5} py={10}>
                {orders.length === 0 ? <Box textAlign="center" fontSize={{base:"20px", md:"24px"}} fontWeight={400} color="#a6a6a6">
                    <Sad style={{margin:"0px auto"}}/>
                    <Text mt={10}>Oops! You don’t have any recycle  request yet.</Text>
                </Box> : 
                <OrderTable data={orders}/>
            }
            </Box>
        </Box>
        
    )
}

export default RecycleRequests
