import React,{useState} from 'react'
import  {Button,Modal,Form}  from 'react-bootstrap'
import  Multiselect  from "multiselect-react-dropdown";


export default function Profession() {

    const [show,setShow]=useState(false);


    const options=["Director","Animation Department","Actor","Choreographer","Producer","Accounts Team","Music Director","Recording Assistant","Cinematographer","Music Editor","Casting Director","Editor","Prodection Manager","Digitel Imagine Technition","Makeup Artist","Associate Director","Production Designer","Actor Assistant","Art Director","Script Associate","Digital Creator","Production Assistant","Action Director","Marketing Department","Stunt Performer","Dubbing Artist","Technition","Hair Stylist","PRO's","Lyricist","Music Camposer","Lighting Department","Light Technical Director","Digital Artist","Singer","Assistant Music Director","Still Photographer","Behind Seen Photographer","Hair Stylist","VFX Department","Screen Writer","Charactor Artist","Junior Artist"]
    const orderOptions = options.sort()
    

  return (
   <>
   <div>
   <Button  style={{width:"80px",height:"50px",fontSize:"12px",letterSpacing:"1px",textAlign:"center",padding:"2px"}} onClick={()=>setShow(true)}>Add Profession</Button>
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
                          options={orderOptions}
                        // value={value}
                        // onChange={(e)=>setValue(e.target.value)}
                         />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>        
   </>
  )
}

 