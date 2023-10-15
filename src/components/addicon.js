import React, { useState } from 'react';
import {GrAdd} from "react-icons/gr";

export default function AddIcon (){
    const [btnState,setBtnState] = useState(true)
    const handle_add=()=>{
        btnState ? setBtnState(false) : setBtnState(true)
    }
    
    return(
        <>
        <div className="dropdown">
        <button className= "appPage_nav_btn1" onClick={handle_add}><GrAdd/></button>
        <div className={btnState ? "dropdown_menu" : "dropdown_menu_tog"}>
            <ul className='hovers'>
                <li>Current Location</li>
                <li>Cosmetics</li>
                <li>Personal Assistant</li>
                <li>Settings</li>
                <li>Help & Support</li>
                <li>Logout</li>
            </ul>
        </div>
        </div>
       
        </>
    )

}