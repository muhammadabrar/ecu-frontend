
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WaveLoading } from 'react-loadingg';
import { useRouter } from 'next/router'



export default function OrderDetail(props) {
  const [order, setorder] = useState([]);
  const router = useRouter()

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  

  //get option for inputs
    useEffect(() => {
      const order = async()=>{
        const req = await axios.get(`${process.env.NEXT_PUBLIC_API}OrderDetail/${props.id}`)
        .then(res => {
            setorder(res.data.data)
        }).catch(err => {
            // what now?
      
            console.log("get OrderDetail error");
            console.log(err);
        })
      }
     
      order()
      
  }, []);








  return (
  
    
     
    <>
  
  <p>{order.name}</p>
  <p>{order.email}</p>
  <p>{days[order.day]}, {order.date} {months[order.month]} {order.year} {' '}<br></br>{order.time}</p>
  <p>$ {order.price}</p>

    
    </>

 

  
  )
}
