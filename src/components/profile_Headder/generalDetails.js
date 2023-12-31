import React,{ useEffect, useMemo, useState} from 'react'
import  {Button,Modal,Form,InputGroup,Dropdown,SplitButton}  from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap/Dropdown'    Dropdown,SplitButton ;
import { Country,State,City} from 'country-state-city';
import Select from 'react-select';

export default function GeneralDetails() {
    const [show1,setShow1]=useState(false);

    const [value,setValue]=useState([])
    // const [value1,setValue1]=useState([])
    // const [value2,setValue2]=useState([])

     
    

    const  country_Api=  Country.getAllCountries();
    const state_Api =  State.getAllStates();
    const city_Api = City.getAllCities();

// const Countries =()=>{
//   useEffect( ()=>{
//       const countries = Country.getAllCountries().map((country) => ({
//         label: country.name,
//         value: country.id,
//         ...country
//       }))
//       console.log(countries);
//     },[])
// } 

 
      const countries =  country_Api.map((country) => ({
        label: country.name,
        value: country.id,
        ...country
      }))

     

        const state = state_Api.map( (state) => ({
          label: state.name,
          value: state.id,
          ...state
        }))
     
  
        
        const city = city_Api.map((city) => ({
          label: city.name,
          value: city.id,
          ...city
        })) 
       
       

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
                            <Form.Label>Country</Form.Label>
                            <Select
                                 id="country"
                                 name="country"
                                 label="country"
                                 options={countries}
                                
                             />    
                      </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Birth Location</Form.Label>
                            <Select
                                 id="state"
                                 name="state"
                                 label="state"
                                 options={state}
                               
                             /> 
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Lives</Form.Label>
                            <Select
                                 id="city"
                                 name="city"
                                 label="city"
                                options={city}
                              
                             /> 
                        </Form.Group>
                <Form.Group className='mb-2'>
                <Form.Label>Salery</Form.Label> <br/>
                <InputGroup className="mb-3">
                            <Form.Control
                            type='number'
                            placeholder='Salery'
                            ></Form.Control>
                            {/* <SplitButton
                                variant="outline-secondary"
                                title="select"
                                id="segmented-button-dropdown-1"
                                >
                                <Dropdown.Item >Inr</Dropdown.Item>
                                <Dropdown.Item >USD</Dropdown.Item>
                                <Dropdown.Item >Euro</Dropdown.Item>
                                </SplitButton>  */}
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
