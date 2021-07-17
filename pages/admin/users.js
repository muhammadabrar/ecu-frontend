
import React, { useState, useEffect } from 'react';




import User from '../../comp/admin/users/users'
import Sidebar from '../../comp/admin/sidebar'
import Breadcrumb from '../../comp/admin/breadcrumb';




export default function Users() {
  

  return (
      
<>
<div className="admin">
       
       <Sidebar />
       <Breadcrumb />
            
       <User />
         </div>


</>
);
}