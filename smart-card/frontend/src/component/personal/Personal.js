import React, { useState, useContext } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
import { UserContext } from "../../App";
import './personal.css'
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();

  const { setInfo } = useContext(UserContext);
  const [linkedin, setLinkedin] = useState();
  const [facebook, setFacebook] = useState();
  const [twitter, setTwitter] = useState();
  const [instagram, setInstagram] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const handleLinkedin = (e) => {
    setLinkedin(e.target.value);
  };
  const handleFacebook = (e) => {
    setFacebook(e.target.value);
  };
  const handleTwitter = (e) => {
    setTwitter(e.target.value);
  };
  const handleInstagram = (e) => {
    setInstagram(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSave = () => {
    const info = {
      linkedin: linkedin,
      facebook: facebook,
      twitter: twitter,
      instagram: instagram,
      phone: phone,
      name: name,
    };
    console.log(info);
    setInfo(info);
  };
  return (
    <>
      <MDBContainer className="personalinput my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <MDBValidation className="row g-3">
                <div className="inputfiled">
                  <MDBIcon
                    fas
                    icon="user-alt me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      onChange={handleName}
                      id="validationCustom01"
                      required
                      label="Name"
                    />
                  </MDBValidationItem>
                </div>
                <div className="inputfiled">
                  <MDBIcon
                    fab
                    icon="linkedin me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />

                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      onChange={handleLinkedin}
                      id="validationCustom01"
                      required
                      label="linkedin"
                    />
                  </MDBValidationItem>
                </div>
                <div className="inputfiled">
                  <MDBIcon
                    fab
                    icon="facebook me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />

                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      name="fname"
                      onChange={handleFacebook}
                      id="validationCustom01"
                      required
                      label="facebook"
                    />
                  </MDBValidationItem>
                </div>
                <div className="inputfiled">
                  <MDBIcon
                    fab
                    icon="twitter me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      name="fname"
                      onChange={handleTwitter}
                      id="validationCustom01"
                      required
                      label="Twitter"
                    />
                  </MDBValidationItem>
                </div>
                <div className="inputfiled">
                  <MDBIcon
                    fab
                    icon="instagram me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      onChange={handleInstagram}
                      id="validationCustom01"
                      required
                      label="Instagram"
                    />
                  </MDBValidationItem>
                </div>
                <div className="inputfiled">
                  <MDBIcon
                    fab
                    icon="whatsapp me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      onChange={handlePhone}
                      id="validationCustom01"
                      required
                      label="Phone"
                    />
                  </MDBValidationItem>
                </div>
                
                
               
              </MDBValidation>

              <div className="text-center pt-1 mb-5 pb-1">
                <br />
                <MDBBtn
                  className="mb-4 w-100 gradient-custom-2 btnsave"
                  style={{ backgroundColor: "#1F1E57", color: "#CBA552" }}
                  onClick={() => {
                    handleSave();
                    navigate("/Result");
                  }}
                >
                  Save
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Personal;
