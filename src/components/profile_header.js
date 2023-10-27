import React from 'react'
import  {Row,Col,Card}  from 'react-bootstrap'
import Profession from './profile_Headder/profession';
import GeneralDetails from './profile_Headder/generalDetails';
import BodyMeasurements from './profile_Headder/bodyMeasurements';
import PersonalInfo from './profile_Headder/personalInfo';
import EducationalInfo from './profile_Headder/educationalInfo';


export default function ProfileHeader() { 
     
  return (
    <>
    <div >
        <Row>
        <div className='cover_pic'>
            <img src='./images/cover_pic.jpeg' alt=''/>
        </div>
        </Row>
        {/* ......................................................................... */}
        <Row>
        <Col xs={5}>
        <Row>
        <div className='profile_pic'>
            <img src='./images/thalaivar_profile.jpeg' alt=''/>
        </div>
        </Row>
        <Row style={{margin:"-20px 0 0 10px", boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
            <Profession/>
        </Row>
        <Row style={{margin:"20px 0 15px 10px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
           <PersonalInfo/>
        </Row>
        </Col>
        {/* ------------------------------------------------------------------------- */}
        <Col xs={6}>
            <Row>
                <h5>R Rajnikanth</h5>
                <p style={{fontSize:"10px"}}>57M Follwers || 45 Followings</p>
            </Row>
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
            <GeneralDetails/>
        </Row>
        
        {/* -------------------------------------------------------------------------- */}
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
           <BodyMeasurements/>
        </Row>
              
        {/* -------------------------------------------------------------------------- */}
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
          <EducationalInfo/>
        </Row>
        </Col>
        </Row>
        <hr/>
        <Row>
            <h5>Projects :</h5>
            <div>
                <Card style={{ width: '50px' ,height:"50px" }}>
                    <Card.Img variant='top' src='./images/thalaivar_profile.jpeg'/>
                    <p>text</p>
                </Card>
            </div>
        </Row>
         
      {/* ....................... */}
    </div>
   
    </>
  )
}
