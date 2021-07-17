import {MDBIcon,MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';

export default function feedback(props) {
   return( <>
   

    
<section className="feedback">
<div className="section-title">
          <span>What our clients say</span>
          <h2>What our clients say</h2>
        </div>
           <MDBContainer >
               <div className="row justify-content-center">
           <MDBCard className="col-md-5 m-1">
     
            <MDBCardBody>
                <MDBCardTitle className="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></MDBCardTitle>
                <MDBCardText>
                Quick delivery time for files. Even more amazing is the small amount of time the support team takes to help out when in need. Great company to work with!
                </MDBCardText>
                <MDBCardTitle>Matias Arancibia</MDBCardTitle>
                <p>SV Motorsports</p>
            </MDBCardBody>
            </MDBCard>
            <MDBCard className="col-md-5 m-1">
            <MDBCardBody>
            <MDBCardTitle className="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></MDBCardTitle>
                <MDBCardText>
                Extremely helpful engineers, great turn around and excellent files.They tune exactly to what I need.
                </MDBCardText>
                <MDBCardTitle>Matias Arancibia</MDBCardTitle>
                <p>SV Motorsports</p>
            </MDBCardBody>
            </MDBCard><br></br>
            <a className="Button mt-3 col-md-2" style={{width:"300px"}} href="/feedback">view All <i class="fas fa-chevron-right"></i> </a>

            </div>
           </MDBContainer>

           </section>
     
      
   </>)
}