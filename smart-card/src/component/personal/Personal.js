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

        this.linkedin=this.linkedin.bind(this)
        this.name=this.name.bind(this)
        this.facebook=this.facebook.bind(this)
        this.twitter=this.twitter.bind(this)
        this.instagram=this.instagram.bind(this)
        this.phone=this.phone.bind(this)
    }
    linkedin(e){
      this.setState(()=>{
return{linkedin: e.target.value}
      })
   
    } 
    facebook(e){
      this.setState(()=>{
return{facebook: e.target.value}
      })

    } 
    twitter (e){
      this.setState(()=>{
return{twitter: e.target.value}
      })

    } 
    instagram(e){
      this.setState(()=>{
return{instagram: e.target.value}
      })

    } 
    phone (e){
      this.setState(()=>{
return{phone: e.target.value}
      })

    } 
    name (e){
      this.setState(()=>{
return{name: e.target.value}
      })
    } 
    handleSave = () => {
      const info = {
        linkedin: this.state.linkedin,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
        instagram: this.state.instagram,
        phone: this.state.phone,
        name: this.state.name
      };
      console.log(info);
    };
  render() {
    return (
      <>
             <MDBContainer className='personalinput my-5 gradient-form'>
             <MDBRow>

<MDBCol col='6' className="mb-5">
  <div className="d-flex flex-column ms-5">
       <MDBValidation className='row g-3'>
<div className='inputfiled'>
<MDBIcon
                    fas
                    icon="user-alt me-3"
                    size="xlg"
                    style={{ color: "#1F1E57",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          onChange={this.name}
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
                    style={{ color: "#1F1E57",}}
                  />


      <MDBValidationItem className='col-md-4'>
        
        <MDBInput
          onChange={this.linkedin}
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
                    style={{ color: "#1F1E57",}}
                  />

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          name='fname'
          onChange={this.facebook}
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
                    style={{ color: "#1F1E57",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          name='fname'
          onChange={this.twitter}
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
                    style={{ color: "#1F1E57",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          onChange={this.instagram}
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
                    style={{ color: "#1F1E57",}}
                  />
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          onChange={this.phone}
          id='validationCustom01'
          required
          label='Phone'
        />
      </MDBValidationItem></div>
      </MDBValidation>

    <div className="text-center pt-1 mb-5 pb-1">
      <br/>
      <MDBBtn className="mb-4 w-100 gradient-custom-2 btnsave"style={{backgroundColor:'#1F1E57',
    color:'#CBA552'}}onClick={this.handleSave}>Save</MDBBtn>
     
    </div>
  </div>

</MDBCol>



</MDBRow>
      </MDBContainer>
      </>
    )
  }
}
