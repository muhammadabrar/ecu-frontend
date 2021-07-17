import { MDBIcon, MDBContainer, MDBCheckbox, MDBInputGroup, MDBInputGroupElement, MDBBtn, } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TfNext(props) {
  const [tuningfiles, settuningfiles] = useState(props.selecteditem);
  const [price, setprice] = useState(props.price);
  //err states
  const [Limiteduploaderr, setLimiteduploaderr] = useState(false);
  const [datacreationSuccess, setdatacreationSuccess] = useState(false);
  const [progresssbar, setprogresssbar] = useState(0);
  const [Isprogresssbar, setIsprogresssbar] = useState(false);

  //search states
  const [Ismake, setIsmake] = useState(true);
  const [Isfileuploaded, setIsfileuploaded] = useState(false);


  //inputs states
  const [input_model, setinput_model] = useState();
  const [input_make, setinput_make] = useState();
  const [input_engine, setinput_engine] = useState();
  //datalist



  useEffect(() => {


  }, []);

  const onChangeHandler = async (event) => {
    if (!event.target.files[0]) {
      event.target.files = null
    } else {
      setinput_file(event.target.files[0])
      setinput_fileName(event.target.files[0].name)

      const size = event.target.files[0].size / 1024
      if (size >= 1024) {
        setinput_size(size / 1024 + "MB")
        event.target.files = null

      } else {
        setinput_size(size + "KB")
      }
    }

  }

  return (<>




    <section className="faq">
      <div className="section-title">
        <h2>Fill This Form</h2>
      </div>
      <MDBContainer >

        {Isprogresssbar && <progress value={progresssbar} max="100"> {progresssbar}% </progress>}


        <form className="form">
          <h2>Add File</h2>
          <div className="row">

            <div className="col-md-12 form-group Inputfile" >

              <div className="file_text" >
                {Isfileuploaded ? 
                <>
                <div class="alert bg-info">
                <span class="closebtn" onClick={() => setIsmake(false)}>&times;</span>
                This is an alert box.
              </div>
                <div class="alert bg-info">
                  <span class="closebtn" onClick={() => setIsmake(false)}>&times;</span>
                  This is an alert box.
                </div> </>:
                <h4>drag and drop your file here</h4>}
                </div>
              <input class="form-control form-control"
                onChange={onChangeHandler} type="file" multiple style={{ height: "300px" }} filename={''} required />
              <small>                no backup! no encrypted files! ** ORIGINAL BIN FILES ONLY ** if mod, upload ori too
              </small>
            </div>
            {Limiteduploaderr && <div class="alert">
              please upload only 2 files
            </div>}
            <div className="col-md-12 form-group mt-3 ">
              <label>car brand, ecu models and your notes </label>

              <textarea type="text"
                value={input_make}
                onChange={(e) => setinput_make(e.target.value)}
                className="form-control" placeholder="Enter Make" required />
            </div>

            <div className="col-md-12 form-group mt-3 ">
              <label>your E-mail address </label>

              <input type="email"
                value={input_model}
                onChange={(e) => setinput_model(e.target.value)}
                className="form-control" list="model" placeholder="Enter Model" required />
            </div>

            <div className="col-md-12 form-group mt-3 ">
              <label>Your Name or Company name </label>

              <input type="text"
                value={input_engine}
                onChange={(e) => setinput_engine(e.target.value)}
                className="form-control" list="engine" placeholder="Enter engine" required />
            </div>


          </div>



          <div className="text-center mt-3"><button type="submit" >Send Message</button></div>
        </form>



      </MDBContainer>

    </section>



  </>)
}





