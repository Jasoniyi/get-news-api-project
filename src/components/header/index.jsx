import React from "react";
import Logo from "../../resources/images/logo3.png";
import { MDBBtn, MDBIcon } from "mdbreact";

const index = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="img-responsive logo-img" />
      </div>
     
      <div className="account">
        <MDBBtn outline color="success" size="sm">
          Login
        </MDBBtn>
        <MDBBtn size="sm" color="primary">
          Signup
        </MDBBtn>
        <MDBIcon icon="user-circle" size="lg" className="user-icon" />
      </div>
    </div>
  );
};

export default index;
