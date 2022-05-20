import React from "react";
import logo from "../../images/icon.png";

const Main = (props) => {
  console.log("hey", props.doctorDetails);
  return (
    <div >
      <div className="row"  >
        <div className="col-5">
          <div className="card">
            <img 
              src={logo}
              style={{ height: "20%", width: "20%" }}
              className="card-img-top align-self-center mt-5"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">{props && props.doctorDetails.length > 0 && props.doctorDetails[0].name}</h5>
              <p className="card-text" style={{ fontSize:"12px" }}>
                diane.cooper@example.com
              </p>
              <div class="row" style={{marginBottom:"10px"}}>
                <div class="col-4 d-flex justify-content-center" >
                  <div >
                  <div class="row" >
                    <span style={{fontSize:".8rem"}}>
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0].Past}
                    </span>                 
                   </div>
                  <div class="row">
                  <span style={{fontSize:".8rem", cursor: "pointer"}}>Past</span>
                  </div>
                  </div>
                </div>
                <div class="col-4 d-flex justify-content-center">
                  |
                </div>
                <div class="col-4 d-flex justify-content-center">
                  <div>
                <div class="row">
                  <span style={{fontSize:".8rem"}}>
                    {props && props.doctorDetails.length > 0 && props.doctorDetails[0].Upcoming}
                  </span>
                  </div>  
                  <div class="row" >
                    <span style={{fontSize:".8rem" ,cursor: "pointer"}}>Upcoming</span>
                  </div>
                  </div>
                </div>
              </div>
              {/* <br/> */}
              <a href="#/ " className="btn btn-outline-dark" alt="image" style={{width:"90%"}}>
                Send message
              </a>
            </div>
          </div>
        </div>
        <div className="col-7 ml-0">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ padding: "2rem" }}>
                <div class="row" style={{fontSize:".75rem", cursor: "pointer"}}>
                  <div class="col-4">
                    <div class="row">
                    Gender
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0].Gender}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                  Birthday
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0].Birthday}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                    Phone Number
                    </div>
                    <div class="row">
                      {props &&
                props.doctorDetails.length > 0 &&
                props.doctorDetails[0]["Phone Number"]}
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{ padding: "2rem" }}>
              <div class="row" style={{fontSize:".75rem", cursor: "pointer"}}>
                  <div class="col-4">
                    <div class="row">
                    Street Address
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0]["Street Address"]}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                  City
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[1].id}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                    ZIP Code
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0]["ZIP Code"]}
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{ padding: "2rem" }}>
              <div class="row" style={{fontSize:".75rem", cursor: "pointer"}}>
                  <div class="col-4">
                    <div class="row">
                    Member Status
                    </div>
                    <div class="row" >
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0]["Member Status"]}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                  Registered Date
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[0]["Register Date"]}
                    </div>
                  </div>
                  <div class="col-4">
                  <div class="row">
                    </div>
                    <div class="row">
                      {props && props.doctorDetails.length > 0 && props.doctorDetails[1].phone}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
