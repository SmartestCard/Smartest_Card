import React from 'react'
import { useNavigate } from 'react-router-dom';
  import './Home.css';
const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <header className='header'>Choose your card</header>
  
      <div className='home'>
      <div className='cardhome personal' onClick={()=>{
        navigate('/personal');
      }}>
        <h4 className='title'>personal</h4>
        <img src={require("../media/id-pass-profile-icon--icon-search-engine-0.png")}className='imgehome'></img>
      </div>
      <div className='cardhome organization'>
        <h4 className='title'>organization</h4>
        <img src={require("../media/organization.png")}className='imgehome'></img>
      </div>
      <div className='cardhome Free-lancer'>
        <h4 className='title'>Free-lancer</h4>
        <img src={require("../media/logo_freelancer.png")}className='imgehome'></img>
      </div>
    </div>
    </>
  )
}

export default Home