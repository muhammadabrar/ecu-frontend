
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

import Sidebar from '../../../comp/admin/sidebar'

import EditFile from '../../../comp/admin/editfile';
import Breadcrumb from '../../../comp/admin/breadcrumb';
import useAuth from "../../../hooks/useAuth";
import { SemipolarLoading  } from 'react-loadingg';







export default function Index() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query
console.log("id: "+ id)
useEffect(() => {
    const verify = async()=>{

        const req = await axios.get(`${process.env.NEXT_PUBLIC_API}verifyAuth`)
        .then(res => {
            if(res.data){
              console.log("you are login")

            }else{
                if(res.data){
              router.push(`/admin/login`)}
            }
        }).catch(err => {
            // what now?
      
            console.log("verification  error");
            console.log(err);
        })
      }
      verify()

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
      <div className="admin">
       
<Sidebar />
      <Breadcrumb />
     
      <div className="container mt-5 pt-5">
      <div className="row">
        
          <div className="col-md-12"><EditFile id={id}/></div>
          



          </div>
      </div>
     
  
  
  </div>
)}
}