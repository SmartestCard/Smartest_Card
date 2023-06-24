import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
  import './Home.css';
  import Personal from '../personal/Personal';
  import Organization from '../Organization/Organization';
  import Result from '../result/Result';
const Home = () => {
  const navigate=useNavigate()
  const [kind, setKind] = useState('')
  return (
    <>
    <header className='header'>
      <div className="text-center ">
      {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" 
         style={{width: '185px'}} alt="logo" />*/}
      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
    </div>

    <p>Choose your card</p></header>
  
      <div className='home'>
      <div className='cardhome personal' onClick={()=>{
        setKind('personal');
      }}>
        <h4 className='title'>personal</h4>
        <img src={require("../media/id-pass-profile-icon--icon-search-engine-0.png")}className='imgehome'></img>
      </div>
      <div className='cardhome organization' onClick={()=>{
        setKind('organization');
      }}>
        <h4 className='title'>organization</h4>
        <img src={require("../media/organization.png")}className='imgehome'></img>
      </div>
      
    </div>
    <div>
      {kind  == 'personal'? <Personal/> : <></> }
      {kind  == 'organization'? <Organization/> : <></> }
      
     
    </div>
    </>
  )
}

export default Home