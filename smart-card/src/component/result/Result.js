import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const {info}=  useContext(UserContext)
  const navigate=useNavigate()

  return (
    <>
    <h4>info.name</h4>
    
    
    
    </>
  )
}

export default Result