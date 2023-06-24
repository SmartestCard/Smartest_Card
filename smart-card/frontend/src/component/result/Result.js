import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import {
  MDBIcon
} from 'mdb-react-ui-kit';
const Result = () => {
  const {info}=  useContext(UserContext)
  const navigate=useNavigate()

  return (
    <>
    <div className='result'>
      <div className='resultfiled'>
    <MDBIcon
                    fas
                    icon="user-alt me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.name} </p>
                  </div>
                  <div className='resultfiled'>
<MDBIcon
                    fab
                    icon="linkedin me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.linkedin} </p>
                  </div>
                  <div className='resultfiled'>
 <MDBIcon
                    fab
                    icon="facebook me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.facebook} </p></div>
                  <div className='resultfiled'>
 <MDBIcon
                    fab
                    icon="instagram me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.instagram} </p>
                  </div>
                  <div className='resultfiled'>
<MDBIcon
                    fab
                    icon="whatsapp me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.phone} </p>

                  </div>
                  <div className='resultfiled'>
<MDBIcon
                    fas
                    icon="map-marker-alt me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.location} </p>
                  </div>
                  <div className='resultfiled'>
<MDBIcon
                    fas
                    icon="map-pin me-3"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.position} </p>
                  </div>
                  <div className='resultfiled'>
<MDBIcon
                    fab
                    icon="chrome me-2"
                    size="xlg"
                    style={{ color: "#1F1E57" }}
                  />
                  <p>{info.chrome} </p>
                  
                  </div>
                  </div>
   
    
    
    
    </>
  )
}

export default Result