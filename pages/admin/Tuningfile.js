
import React, { useState, useEffect } from 'react';


import Sidebar from '../../comp/admin/sidebar'

import Breadcrumb from '../../comp/admin/breadcrumb';
import Orders from '../../comp/admin/orders';
import TuningFiles from '../../comp/admin/tuningfiles';

import useAuth from "../../hooks/useAuth";
import { SemipolarLoading  } from 'react-loadingg';







export default function Index() {
  const [loading, setLoading] = useState(true)
// useAuth()
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 2500);
  return () => clearTimeout(timer);
}, []);



if(loading){
  return(<SemipolarLoading  size="large"  color="#000"/>
  )
}else{
  return (
      <div className="admin pt-5">
       
<Sidebar />
      <Breadcrumb />
     
      <div className="container mt-5 pt-5">
      <div className="row">
      <div className="col-md-12"><TuningFiles /></div>
        
          <div className="col-md-12"><Orders /></div>
   
          {/* <div className="col-md-12 mt-5 pt-3"><Files /></div> */}



          </div>
      </div>
     
  
  
  </div>
)}
}