import React,{useState} from 'react'
import  {Button,Modal,Form}  from 'react-bootstrap'

export default function BodyMeasurements() {
    const [show2,setShow2]=useState(false);

    // const [value,setValue]=useState("")

    //  const handle_change=(e)=>{
    //    console.log(setValue(e.target.value));
    //  }
  return (
    <>
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
                        <Form.Select as='textarea'  >
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
    </>
  )
}
