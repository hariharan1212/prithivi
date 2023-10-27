import React,{useState} from 'react'
import  {Button,Modal,Form}  from 'react-bootstrap'
import  Multiselect  from "multiselect-react-dropdown";


export default function Profession() {

    const [show,setShow]=useState(false);


    const options=["Director","Animation Department","Actor","Choreographer","Producer","Accounts Team","Music Director","Recording Assistant","Cinematographer","Music Editor","Casting Director","Editor","Prodection Manager","Digitel Imagine Technition","Makeup Artist","Associate Director","Production Designer","Actor Assistant","Art Director","Script Associate","Digital Creator","Production Assistant","Action Director","Marketing Department","Stunt Performer","Dubbing Artist","Technition","Hair Stylist","PRO's","Lyricist","Music Camposer","Lighting Department","Light Technical Director","Digital Artist","Singer","Assistant Music Director","Still Photographer","Behind Seen Photographer","Hair Stylist","VFX Department","Screen Writer","Charactor Artist","Junior Artist"]
    const orderOptions = options.sort()

    const [value,setValue]=useState(orderOptions)
 
    const handleChange=(e)=>{
        setShow(false)
        console.log(setValue(e))
    }

  return (
   <>
   <p style={{fontSize:"13px",marginLeft:"20px"}}>Profession <br/><Button variant="outline-info" onClick={()=>setShow(true)}>+</Button></p>
            <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                    <Modal.Title>Profession</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Form>
                         <Multiselect 
                          isObject={false}
                          onKeyPressFn={function noRefCheck(){}}
                          onRemove={function noRefCheck(){}}
                          onSearch={function noRefCheck(){}}
                          onSelect={function noRefCheck(){}}
                          options={value}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e)=>handleChange(e)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
   </>
  )
}

 