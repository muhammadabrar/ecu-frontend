
import React, { useState, useEffect } from 'react';

import Select from 'react-select';
import Nav from '../../comp/admin/navtop'
import Sidebar from '../../comp/admin/sidebar'

import States from '../../comp/admin/states';
import Breadcrumb from '../../comp/admin/breadcrumb';
import Orders from '../../comp/admin/orders';
import Earnings from '../../comp/admin/earnings';
import Contacts from '../../comp/admin/contacts';
import Visiter from '../../comp/admin/visiters';
import Files from '../../comp/admin/files';
import useAuth from "../../hooks/useAuth";
import { SemipolarLoading  } from 'react-loadingg';







export default function Index() {
  const [loading, setLoading] = useState(true)
useAuth()
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
      <div className="admin pb-5 mb-5">
       
<Sidebar />
      <Breadcrumb />
     
      <States />
      <div className="container mt-5 pt-5">
      <div className="row">
        
          <div className="col-md-8"><Orders /></div>
          <div className="col-md-4"><Earnings /></div>
          <div className="col-md-8 mt-5 pt-3"><Contacts /></div>
          <div className="col-md-4 mt-5 pt-3"><Visiter /></div>
          {/* <div className="col-md-12 mt-5 pt-3"><Files /></div> */}



          </div>
      </div>
     
  
  
  </div>
)}
}