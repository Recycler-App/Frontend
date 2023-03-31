import {
    Box,
    Link,
    Tab,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Table,
    Button,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { Link as ReactLink, useNavigate } from "react-router-dom";
  import { useUser } from "../context/UserContext";
  import Sad from "../svg/Sad";
  import {
    getDatabase,
    ref,
    onValue,
    equalTo,
    orderByChild,
    query,
  } from "firebase/database";
  import { snapshotToArray } from "../utils/helper";
  
  const MyBusinessOrders = () => {
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
      onValue(req, (snapshot: any) => {
        setOrders(snapshotToArray(snapshot));
      });
    }, [db, user]);
  
    const OrderTable = ({data}:any) => (
      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th fontSize="16px" color="dark">
                Seller's name
              </Th>
              <Th fontSize="16px" color="dark">
                Delivery Type
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
                {x.delivery}
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
  
    const completed = orders.filter((x:any) => x.status==="completed")
    const inCompleted = orders.filter((x:any) => x.status==="pending" || x.status==="approved")
    const cancelled = orders.filter((x:any) => x.status==="declined")
  
    return (
      <section className="sec-profile sec-profile2 mt-3 p-4 col-md-8 p-md-4 gx-md-3">
        <Tabs colorScheme="green">
          <TabList>
            <Tab>Complete Orders</Tab>
            <Tab>Incomplete Orders</Tab>
            <Tab>Cancelled Orders</Tab>
          </TabList>
  
          <TabPanels>
            <TabPanel>
              {completed.length !== 0 ? <OrderTable data={completed}/>
              :<article className="text-center mt-5">
                <Sad style={{ margin: "0px auto" }} />
                <p className="mt-3 earn-pp mt-md-4">
                  Oops! You don’t have any completed order history yet.{" "}
                </p>
                <Box w={{ base: "100%", md: "80%", lg: "70%" }} mx="auto">
                  <p className="mt-3 mt-md-3 earn-pp">
                    When you start making recycle requests, your orders will
                    appear here. Click{" "}
                    <Link as={ReactLink} to="/bin" color="primary">
                      here
                    </Link>{" "}
                    to place your first recycle request.
                  </p>
                </Box>
              </article>}
            </TabPanel>
            <TabPanel>
            {inCompleted.length !== 0 ? <OrderTable data={inCompleted}/>
              :<article className="text-center mt-5">
                <Sad style={{ margin: "0px auto" }} />
                <p className="mt-3 earn-pp mt-md-4">
                  Oops! You don’t have any incomplete order history yet.{" "}
                </p>
                <Box w={{ base: "100%", md: "80%", lg: "70%" }} mx="auto">
                  <p className="mt-3 mt-md-3 earn-pp">
                    When you start making recycle requests, your orders will
                    appear here. Click{" "}
                    <Link as={ReactLink} to="/bin" color="primary">
                      here
                    </Link>{" "}
                    to place your first recycle request.
                  </p>
                </Box>
              </article>}
            </TabPanel>
            <TabPanel>
            {cancelled.length !== 0 ? <OrderTable data={cancelled}/>
              :<article className="text-center mt-5">
                <Sad style={{ margin: "0px auto" }} />
                <p className="mt-3 earn-pp mt-md-4">
                  Oops! You don’t have any camcelled order history yet.{" "}
                </p>
                <Box w={{ base: "100%", md: "80%", lg: "70%" }} mx="auto">
                  <p className="mt-3 mt-md-3 earn-pp">
                    When you start making recycle requests, your orders will
                    appear here. Click{" "}
                    <Link as={ReactLink} to="/bin" color="primary">
                      here
                    </Link>{" "}
                    to place your first recycle request.
                  </p>
                </Box>
              </article>}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    );
  };
  
  export default MyBusinessOrders;
  