import React,{useState} from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';

export default function PersonalInfo() {
    const [show3,setShow3]=useState(false);
  return (
    <>
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
    </>
  )
}
