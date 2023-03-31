import React, { useEffect, useState } from 'react'
import Sad from '../svg/Sad'
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Badge,
} from "@chakra-ui/react";
import { useUser } from '../context/UserContext';
import {
  getDatabase,
  ref,
  onValue,
  equalTo,
  orderByChild,
  query,
} from "firebase/database";
import { snapshotToArray } from "../utils/helper";

const Transaction = () => {
  const { user }: any = useUser();
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

  const getBadgecolor=(status:string) => {
    if(status==="completed"){
        return"green";
    } else if( status === "accepted"){
        return "yellow"
    } else{
        return "red"
    }
   }

  const tx:any = orders.filter((x:any) => x.status!=="pending" &&  x.status!=="declined")

  const OrderTable = ({data}:any) => (
    <TableContainer>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <Th></Th>
            <Th fontSize="16px" color="dark">
              Buyers name
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
          {data.map( (x:any, i:any) => (<Tr bg="#FAFAFA" key={i}>
            <Td color="#A6A6A6" fontSize="16px">#{i + 1}</Td>
            <Td color="#A6A6A6" fontSize="16px">
              {x?.buyer}
            </Td>
            <Td color="#A6A6A6" fontSize="16px">
              {x?.quantity}
            </Td>
            <Td color="#A6A6A6" fontSize="16px">
              {x?.price}
            </Td>
            <Td color="#A6A6A6" fontSize="16px">
              <Badge colorScheme={getBadgecolor(x?.status)}>{(x?.status === "completed") ? "RECEIVED" : "PENDING"}</Badge>
            </Td>
          </Tr>))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  const getTotalCollection= () => {
    let init = 0;
    for(let i=0; i<tx.length; i++){
      let currQuantity = tx[i]?.quantity;
      init = init + Number(currQuantity);
    }
    return init;
  }

  return (
    <section className='sec-profile sec-profile2 mt-3 p-4 col-md-8 p-md-4 gx-md-3'>
      <div>
        <h5 className='useracc'>Transactions</h5>
        <hr className='EarnHr mt-3' />
      </div>
      <article className='mt-5 total-earn p-5 text-center'>
        <h5>Total Collection</h5>
        <h4 className='mt-4 useracc'>{tx.length === 0 ? 0.00 : getTotalCollection()}kg</h4>
      </article>
      <article className='mt-5 art-earnn'>
        <div>
          <h5>Breakdown of Collections</h5>
          <hr className='EarnHr mt-3' />
        </div>
        {tx.length === 0 ? <div className='text-center mt-4'>
          <Sad style={{ margin: '0px auto' }} />
          <p className='mt-3 earn-pp'>Oops! You don’t have any earning history yet. </p>
          <p className='mt-3 mt-md-2 earn-pp'>
            When you start approving recycle requests, you will see your collections
            breakdown here.
          </p>
        </div>: 
        <OrderTable data={tx}/>}
      </article>
    </section>
  )
}

export default Transaction
