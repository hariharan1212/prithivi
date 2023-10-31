import React from 'react'
import "../stylesheets/chatprofile.css"
import { Col, InputGroup, Row,Form, FormGroup, FormControl } from 'react-bootstrap'
import ChatInbox from './chat_Inbox.js'
import { Routes,Route,Link} from 'react-router-dom'
// import './firebase'
// import {db} from "../firebase"

export default function Chat_profile() {
  return (
    <>
    <div className='chatprofile_container'>
                     <Routes>
                   <Route path="/chatinbox" element={<ChatInbox/>} />
                    </Routes>
          <div className='top_navbar'>
                  <Row>
                    <Col xs={7}>
                    <h4>Chats</h4>
                    </Col>
                    <Col xs={1}><div><img src='./images/write_icon.png' alt=''/></div></Col>
                    <Col xs={1}><div><img src='./images/gallery_icon.png' alt=''/></div></Col>
                    <Col xs={1}><div><img src='./images/userprofile.png' alt=''/></div></Col>
                  </Row>
          </div>
          <div className='search_bar'>
                    <form>
                    <input  type='text' placeholder='search'/>  
                    <div className='search_bar_icon'>
                      <img src='./images/search_icon.png' alt=''/>
                    </div>
                    </form>  
          </div>
          

          <div className='chatpersons'>
               <div className='chatpersons_profilepic'>
                    <img src='./images/userprofile.png' alt=''/>
               </div>
               <div className='chatpersons_rating'>
                   <p>8.4</p>
                   <img src='./images/star.png'/>
               </div>
               <div className='chatpersons_name'>
                       <h5>Rohit Shetty</h5>
               </div>
          </div>
               <Link to={"/chatinbox"}>
               </Link>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
          <div className='chatpersons'>
               
          </div>
    </div>
    </>
  )
}
