import React,{useState} from 'react'
import  {Button,Modal,Form,Dropdown,SplitButton,InputGroup}  from 'react-bootstrap'

export default function GeneralDetails() {
    const [show1,setShow1]=useState(false);
  return (
    <>
     <p style={{fontSize:"13px"}}>General Details <Button variant="outline-info" onClick={()=>setShow1(true)}>+</Button></p>
             <Modal show={show1} onHide={()=>setShow1(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>General Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-2'>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                            type='date'
                            placeholder='00/00/000'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Birth Location</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Birth Location'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Current Location</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Current Location'
                            ></Form.Control>
                        </Form.Group>
                  <Form.Group className='mb-2'>
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Nationality'
                            ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                <Form.Label>Salery</Form.Label> <br/>
                <InputGroup className="mb-3">
                              <SplitButton
                                variant="outline-secondary"
                                title="select"
                                id="segmented-button-dropdown-1"
                                >
                                <Dropdown.Item >Inr</Dropdown.Item>
                                <Dropdown.Item >USD</Dropdown.Item>
                                <Dropdown.Item >Euro</Dropdown.Item>
                                </SplitButton>
                            <Form.Control
                            type='number'
                            placeholder='Salery'
                            ></Form.Control>
                            </InputGroup>
                </Form.Group>
                <Form.Group className='mb-2'>
                            <Form.Label>Years Of Experience</Form.Label>
                            <Form.Control
                            type='number'
                            min={1}
                            placeholder='Years Of Experience'
                            ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                            <Form.Label>Total Number Of Movies</Form.Label>
                            <Form.Control
                            type='number'
                            placeholder='Total Number Of Movies'
                            ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                            <Form.Label>Availability</Form.Label>
                            <Form.Control
                            type='date'
                            placeholder='Availability'
                            ></Form.Control>
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow1(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow1(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
             </Modal>
    </>
  )
}
