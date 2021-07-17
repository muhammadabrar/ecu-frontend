import {MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Order(props) {
  const [orders, setorders] = useState([]);
  const [status, setstatus] = useState([]);

  useEffect(() => {
    const ordersdata = async()=>{
      const req = await axios.get(`${process.env.NEXT_PUBLIC_API}orders/${status}`)
      .then(res => {
        setorders(res.data.data)
      })
    }
    ordersdata()
  }, [status]);
  
   return( 
   <>
   <div className="table-title">
   <h4 className="text-title">Orders </h4>
   <MDBDropdown>
      <MDBDropdownToggle color='light' className="btn btn-sm ">{status? "Pending": "Done"}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="#!" className={()=> setstatus(false)}>Pending</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#!" className={()=> setstatus(true)}>Done</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
    <div className=" overflow-auto">
<table className="table">
  <h1>{test}</h1>
  <tr className="bg-info">
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Date</th>
    <th>Price</th>
    <th>Details</th>



  </tr>
  {!orders.length>0? <h2>There are no orders</h2>:
  orders.map((order, index)=>
  <tr key={index}>
  <td>{index+1}</td>
  <td>{order.name}</td>
  <td>{order.email}</td>
  <td>{days[order.day]}, {order.date} {months[order.month]} {order.year} {' '}<br></br>{order.time}</td>
  <td>$ {order.price}</td>
  <td><a href={'/admin/order/'+order.id}><button className="btn btn-sm bg-info text-white">Detail</button></a></td>
</tr>
)
    
  }

</table>
</div>
 </>
      )
}