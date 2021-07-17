
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

import Sidebar from '../../comp/admin/sidebar'
import Files from '../../comp/admin/files';

import EditFile from '../../comp/admin/editfile';
import Breadcrumb from '../../comp/admin/breadcrumb';
import { SemipolarLoading  } from 'react-loadingg';







export default function ECUFiles() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

useEffect(() => {
    const verify = async()=>{

        const req = await axios.get(`${process.env.NEXT_PUBLIC_API}verifyAuth`)
        .then(res => {
            if(res.data){
              console.log("you are login")

            }else{
                if(res.data){
              router.push(`/admin/login`)
            }
            }
        }).catch(err => {
            // what now?
            router.push(`/admin/login`)
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
        
      <div className="col-md-12 mt-5 pt-3"><Files /></div>

          



          </div>
      </div>
     
  
  
  </div>
)}
}