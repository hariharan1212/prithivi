import React,{useState} from 'react'
import  {Button,Modal,Form}  from 'react-bootstrap'

export default function EducationalInfo() {
    const [show4,setShow4]=useState(false);
  return (
    <>
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
    </>
  )
}
