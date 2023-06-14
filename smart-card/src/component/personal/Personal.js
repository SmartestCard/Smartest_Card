import React, { Component } from 'react'
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import './personal.css'
export default class Personal extends Component {
    constructor(){
        super()
        this.state={linkedin :'',facebook:'',twitter:'',instagram:'',phone:'',name:''}
    }
  render() {
    return (
      <>
             <MDBContainer className='personalinput my-5 gradient-form'>
             <MDBRow>

<MDBCol col='6' className="mb-5">
  <div className="d-flex flex-column ms-5">

    <div className="text-center">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        style={{width: '185px'}} alt="logo" />
      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
    </div>

    <p>Please login to your account</p>
       <MDBValidation className='row g-3'>
<div className='inputfiled'>
<MDBIcon
                    fas
                    icon="user-alt me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          // onChange={}
          id='validationCustom01'
          required
          label='Name'
        />
      </MDBValidationItem>
      </div>
<div className='inputfiled'>
<MDBIcon
                    fab
                    icon="linkedin me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />


      <MDBValidationItem className='col-md-4'>
        
        <MDBInput
          // onChange={}
          id='validationCustom01'
          required
          label='linkedin'
        />
        
      </MDBValidationItem>
      </div>
<div className='inputfiled'>
<MDBIcon
                    fab
                    icon="facebook me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          name='fname'
          // onChange={}
          id='validationCustom01'
          required
          label='facebook'
        />
      </MDBValidationItem></div>
<div className='inputfiled'>
<MDBIcon
                    fab
                    icon="twitter me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          name='fname'
          // onChange={}
          id='validationCustom01'
          required
          label='Twitter'
        />
      </MDBValidationItem></div>
<div className='inputfiled'>
<MDBIcon
                    fab
                    icon="instagram me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          // onChange={}
          id='validationCustom01'
          required
          label='Instagram'
        />
      </MDBValidationItem></div>
<div className='inputfiled'>
<MDBIcon
                    fab
                    icon="whatsapp me-3"
                    size="xlg"
                    style={{ color: "#223d66",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          // onChange={}
          id='validationCustom01'
          required
          label='Phone'
        />
      </MDBValidationItem></div>
      </MDBValidation>

    <div className="text-center pt-1 mb-5 pb-1">
      <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
      <a className="text-muted" href="#!">Forgot password?</a>
    </div>

    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
      <p className="mb-0">Don't have an account?</p>
      <MDBBtn outline className='mx-2' color='danger'>
        Danger
      </MDBBtn>
    </div>

  </div>

</MDBCol>

<MDBCol col='6' className="mb-5">
  <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
      <h4 class="mb-4">We are more than just a company</h4>
      <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

  </div>

</MDBCol>

</MDBRow>
      </MDBContainer>
      </>
    )
  }
}
