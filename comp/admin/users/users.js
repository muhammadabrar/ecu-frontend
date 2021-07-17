import React, { useState } from 'react';
import axios from 'axios';
import {MDBContainer,
        MDBBtn,} from 'mdb-react-ui-kit';
export default function User(props) {
    const [basicModal, setBasicModal] = useState(false);
    const [showPass, setshowPass] = useState(false);
    const [Name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [confirmPassmsg, setConfirmPassmsg] = useState(false);


  const toggleShow = () => setBasicModal(true);
  const toggleClose = () => setBasicModal(false);
  
  const checkpass = (e) =>{
    setConfirmPass(e.target.value)
    if (pass == confirmPass){
        setConfirmPassmsg(false)
        console.log(confirmPass)
    }else{
        setConfirmPassmsg(true)
        console.log(confirmPass)

    }
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: Name,
      email: email,
      pass: pass
    };
    const req = await axios.post(`http://localhost:8000/user`, {data})
      .then(res => {
        console.log(res);
      })
  }
   return( 
   <MDBContainer>
   <div className="table-title mt-5 pt-5">
   <h4 className="text-title">Users </h4>
   <MDBBtn size='sm' onClick={toggleShow} className='text-dark mb-1' color='light'><i className="fas fa-plus"></i> Add</MDBBtn>
  
  

    </div>
    <div className=" overflow-auto">
<table className="table">
  <tr className="bg-info">
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Date</th>
    <th>Subject</th>
    <th>Message</th>



  </tr>
  <tr>
    <td>1</td>
    <td>Maria Anders</td>
    <td>example@gmail.com</td>
    <td>Saturday, 3 July 2021</td>
    <td>My Tuning File Order</td>
    <td><button className="btn btn-sm text-white bg-info"><i className="fas fa-envelope"></i> Detail</button>
</td>

  </tr>
  <tr>   
     <td>1</td>
    <td>Maria Anders</td>
    <td>example@gmail.com</td>
    <td>Saturday, 3 July 2021</td>
    <td>My Tuning File Order</td>
    <td><button className="btn btn-sm text-white bg-info"><i className="fas fa-envelope"></i> Detail</button>
</td>
  </tr>
  
</table>
</div>
{basicModal? <div className="model">
        <div className="model-content">
        
            <div className="model-header ">
            
            <h1>warka dang</h1>
<a onClick={toggleClose} href="#" className="close-icon "><i class="fa fa-close"></i></a>
            </div>
            
            <form onSubmit={handleSubmit}  className="form">
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" name="name" value={Name} onChange={(e)=> setName(e.target.value)} className="form-control" id="name" placeholder="Name" required />
                </div>
                <div className="col-md-12 form-group mt-3 ">
                  <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email" placeholder="Email" required />
                </div>
                <div className="col-md-12 form-group mt-3 ">
                  <input type={showPass? "text":"password"} value={pass} onChange={(e)=> setPass(e.target.value)} className="form-control" name="Password" id="Password" placeholder="Password" required />
                  <input type="checkbox" onClick={()=> setshowPass(!showPass)} />Show Password
                </div>
                <div className="col-md-12 form-group mt-3 ">
                  <input type={showPass? "text":"password"} value={confirmPass} onChange={checkpass} className={confirmPassmsg? "form-control text-danger": "form-control"} name="Password" id="Password" placeholder="Confirm Password" required />
                  
                </div>
              </div>
              
              
              
              <div className="text-center mt-3"><button type="submit" disabled={confirmPassmsg}>Send Message</button></div>
            </form>
            

        </div>
    </div>: null}

 </MDBContainer>
      )
}