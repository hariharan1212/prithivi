import React, { useState } from 'react'
import  {Row,Col,Button,Modal,Form,Card,Dropdown,SplitButton,InputGroup}  from 'react-bootstrap'
import Profession from './profile_Headder/profession';
import GeneralDetails from './profile_Headder/generalDetails';

export default function ProfileHeader() { 
    // const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    const [show4,setShow4]=useState(false);
    
   
  return (
    <>
    <div >
        <Row>
        <div className='cover_pic'>
            <img src='./images/cover_pic.jpeg' alt=''/>
        </div>
        </Row>
        {/* ....................... */}
        <Row>
        <Col xs={5}>
        <Row>
        <div className='profile_pic'>
            <img src='./images/thalaivar_profile.jpeg' alt=''/>
        </div>
        </Row>
        <Row style={{margin:"5px 0 0 10px", boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
            <Profession/>
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
        
        {/* ---------------------------------------------------------------- */}
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
           <p style={{fontSize:"13px"}}>Body Measurements<Button variant="outline-info" onClick={()=>setShow2(true)}>+</Button></p>
            <Modal show={show2} onHide={()=>setShow2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    Body Measurements
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>Height</Form.Label>
                        <Form.Select as='textarea'>
                             <option>Enter Height</option>
                             <option value="1">1-2 feet</option>
                             <option value="2">2-3 feet</option>
                            <option value="3">3-4 feet</option>
                            <option value="4">4-5 feet</option>
                            <option value="5">5-6 feet</option>
                            <option value="6">6-7 feet</option>
                            <option value="7">7-8 feet</option>
                            <option value="8">8-9 feet</option>
                            <option value="9">9-10 feet</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                        type='Number'
                        placeholder='Weight'
                        min={"1"}
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Skin Tone</Form.Label>
                        <Form.Select as='textarea' >
                             <option>Enter SkinTone</option>
                             <option value="1">---</option>
                             <option value="2">---</option>
                            <option value="3">---</option>
                            <option value="4">---</option>
                            <option value="5">---</option>
                            <option value="6">---</option>
                            <option value="7">---</option>
                            <option value="8">---</option>
                            <option value="9">---</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Eye Color</Form.Label>
                        <Form.Select as='textarea' >
                             <option>Enter EyeColor</option>
                             <option value="1">Amber</option>
                             <option value="2">Blue</option>
                            <option value="3">Brown</option>
                            <option value="4">Gray</option>
                            <option value="5">Green</option>
                            <option value="6">Hazel</option>
                            <option value="7">Red</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Chest</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Chest'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Waist</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Waist'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Biceps</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Biceps'
                        ></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                   <Button variant="secondary" onClick={()=>setShow2(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow2(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer> 
            </Modal>
        </Row>
        
        {/* ------------------------------------------------------------------------------------ */}
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
           <p style={{fontSize:"13px"}}>Personal Information<Button variant="outline-info" onClick={()=>setShow3(true)}>+</Button></p>
            <Modal show={show3} onHide={()=>setShow3(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    Personal Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>Religion</Form.Label>
                        <Form.Select as='textarea' type='text' >
                             <option>Marital Status</option>
                             <option value="1">Hindu</option>
                             <option value="2">Muslim</option>
                            <option value="3">Christian</option>
                            <option value="4">Buddhist</option>
                            <option value="5">Sikh</option>
                            <option value="6">Others</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Caste</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Caste'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Select as='textarea' type='text' >
                             <option>Marital Status</option>
                             <option value="1">Single</option>
                             <option value="2">Married</option>
                            <option value="3">Widowed</option>
                            <option value="4">Divorced</option>
                            <option value="5">Seperated</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Affairs</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Affairs'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Marrriage Date</Form.Label>
                        <Form.Control
                        type='date'
                        placeholder='Marriage Date'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Spouse</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Spouse'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>children</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Children'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Father</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Father'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Mother</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Mother'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Siblings</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Siblings'
                        ></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                   <Button variant="secondary" onClick={()=>setShow3(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow3(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
      
        {/* -------------------------------------------------------------------------- */}
        <Row style={{margin:"5px 0 15px 5px",boxShadow: '1px 1px 5px gray',borderRadius:"10px"}}>
           <p style={{fontSize:"13px"}}>Educational Information<Button variant="outline-info" onClick={()=>setShow4(true)}>+</Button></p>
            <Modal show={show4} onHide={()=>setShow4(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    Educational Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Label>School</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='School'
                        ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Highest Qualification</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Highest Qualifiction'
                        ></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                   <Button variant="secondary" onClick={()=>setShow4(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow4(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
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
