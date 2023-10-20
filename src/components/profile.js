import React, { useState } from 'react';

export default function Profile (){

    const [data,Setdata]=useState("")
      
     const handle_Change=(e)=>{
        Setdata(console.log(e.target.value)) 
     }
     const handle_edit=()=>{
        // const handle_Change=(e)=>{
        //     Setdata(console.log(e.target.value)) 
        //  }
      
     }
    return(
        <>
       <div className='container'>
      
            <div className='cover_pic'>
                <img src='./images/cover_pic.jpeg' alt=''/>
            </div>
          
         <div className='container_profile_part1'>

            <div className='profile_headder'>

                            <div className='profile_pic'>
                                <img src='./images/thalaivar_profile.jpeg' alt=''/>
                            </div>
                    
                    <div className='profile_desigination'>
                                    <div><h4>9.9&nbsp;<span><img src='./images/star.png' alt=''/></span></h4> 
                                    </div>
                                    <h6>Actor</h6>
                                    <h6>Producer</h6>
                                    <div>
                                    <button onClick={handle_edit}><img src='./images/Editpage_icon.png' alt='' width={"30px"} height={"30px"} />
                                    </button>
                                    </div>
                    </div>
            </div>
            <div className='profile_name'>
                <h4>Rajnikanth(Thalaivar)</h4> 
                <p>7.9M Follwers || 100 Following</p>
            <ul>
                <li><span><img src='./images/dob_icon.png' alt=''/></span><input type='text' placeholder='Enter Your Date Of Birth' /></li>
                <li><span><img src='./images/birthplace_icon.png' alt=''/></span><input type='text' placeholder='Enter Your Birth Place' onChange={(e)=>handle_Change(e)}/></li>
                <li><span><img src='./images/Shooting_location_spot.png' alt=''/></span> <input type='text' placeholder='Enter Your Shooting Spot Location'/></li>
                <li><span><img src='./images/flag.png' alt=''/></span> <input type='text' placeholder='Enter Your Nationality'/></li>
                <li><span><img src='./images/Cash_icon.png' alt=''/></span><input type='text' placeholder='Enter Your Salery Details'/></li>
                <li><span><img src='./images/Workexp_icon.png' alt=''/></span><input type='text' placeholder='Enter Your Year Of Experiences'/></li> 
                <li><span><img src='./images/movies_icon.jpg' alt=''/></span><input type='text' placeholder='Enter Your Movie Count'/></li>
                <li><span><img src='./images/reservation_icon.jpg' alt=''/></span><input type='text' placeholder='kindly Attach Your Availability Status'/></li>
            </ul>    
            </div>        
            </div>
         <hr/>
 {/* -------------------------------------------------------------------- */}
         <div className='container_profile_part2'> 
            <div><h4>Body Measurements:</h4></div>
            <div className='container_profile_part2_1'>
                <div>
                    <span><img src='./images/Height_icon.png' alt=''/></span><input type='text' placeholder='May I Know Your Height'/>   
                </div>
                <div>
                    <span><img src='./images/weight icon.png' alt=''/></span><input type='text' placeholder='May I Know Your Weight'/>   
                </div>
                <div>
                    <span><img src='./images/eye_icon.png' alt=''/></span><input type='text' placeholder='May I Know Your '/>   
                </div>
                <div>
                    <span><img src='./images/hair_icon.jpg' alt=''/></span><input type='text' placeholder='May I Know Your Skin Tone ?'/>   
                </div>
            </div>
            <div className='container_profile_part2_2'>
                <span><img src='./images/Bmi icon.png' alt=''/></span>
                <div >
                   <p>chest - 40in</p>
                   <p>Waist - 32in</p>
                   <p>Biceps - 14in</p>
                </div>
            </div>
         </div>
         <hr/>
{/* -------------------------------------------------------------------- */}
      <div className='container_profile_part3'>
        <div>
            <h4>Personal Information</h4>
        </div>
        <div>
            <p>Religion : <span><input type='type' placeholder='May I Know Your Religion'/></span></p>
            <p>Caste : <span><input type='type' placeholder='May I Know Your caste'/></span></p>
            <p>Marital Status : <span><input type='type' placeholder='May I Know Your Marital Status'/></span></p>
            <p>Affairs : <span><input type='type' placeholder='May I Know Your Affairs Name'/></span></p>
            <p>Marrriage Date : <span><input type='type' placeholder='May I Know Your Marrriage Date'/></span></p>
            <p>Spouse : <span><input type='type' placeholder='May I Know Your Spouse Name'/></span></p>
            <p>children : <span><input type='type' placeholder='May I Know Your childrens Name'/></span></p>
            <p>Mother : <span><input type='type' placeholder='May I Know Your Mother Name'/></span></p>
            <p>Father : <span><input type='type' placeholder='May I Know Your Father Name'/></span></p>
            <p>Sister : <span><input type='type' placeholder='May I Know Your Sister Name'/></span></p>
        </div>
      </div>
      <hr/>
      <div className='container_profile_part4'>
         <div>
            <h4>Education</h4>
            <div>
                    <p>School : <span><input type='type' placeholder='Enter Your School Name'/></span></p>
                    <p>Highest : <span><input type='type' placeholder='Enter Your Higher Studies'/></span></p>
                    <p>Qualification : <span><input type='type' placeholder='Enter Your Qualification'/></span></p>
            </div>
        </div>

      </div>
       </div>
        </>
    )

}