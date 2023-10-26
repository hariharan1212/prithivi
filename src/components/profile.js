import React,{useState} from 'react';

export default function Profile (){
    //  const [value,setValue]=useState("")
    //  const [isActive, setActive]=useState(true)
     const [disable,setDisable]=useState(true)
      
    
     const handle_edit=()=>{
        setDisable(!disable) 
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
                <div ><img src='./images/dob_icon.png' alt=''/><input type='text' placeholder='Enter Your Date Of Birth' disabled={disable}/></div>
               <div><img src='./images/birthplace_icon.png' alt=''/><input type='text' placeholder='Enter Your Birth Place' disabled={disable}/></div>
               <div><img src='./images/Shooting_location_spot.png' alt=''/><input type='text' placeholder='Enter Your Current Location' disabled={disable}/></div>
               <div><img src='./images/flag.png' alt=''/><input type='text' placeholder='Enter Your Nationality' disabled={disable}/></div>
               <div><img src='./images/Cash_icon.png' alt=''/><input type='text' placeholder='Enter Your Salery Details' disabled={disable}/></div>
               <div><img src='./images/Workexp_icon.png' alt=''/><input type='text' placeholder='Enter Your Year Of Experiences' disabled={disable}/></div> 
               <div><img src='./images/movies_icon.jpg' alt=''/><input type='number' placeholder='Enter Your Movie Count' disabled={disable}/></div>
               <div><img src='./images/reservation_icon.jpg' alt=''/><input type='date' placeholder='kindly Attach Your Availabidivty' disabled={disable}/></div>
            </div>        
            </div>
         <hr/>
 {/* -------------------------------------------------------------------- */}
         <div className='container_profile_part2'> 
            <div><h4>Body Measurements:</h4></div>
            <div className='container_profile_part2_1'>
                <div>
                    <span><img src='./images/Height_icon.png' alt=''/></span><input type='text' placeholder='May I Know Your Height' disabled={disable}/>   
                </div>
                <div>
                    <span><img src='./images/weight icon.png' alt=''/></span><input type='text' placeholder='May I Know Your Weight' disabled={disable}/>   
                </div>
                <div>
                    <span><img src='./images/eye_icon.png' alt=''/></span><input type='text' placeholder='May I Know Your ' disabled={disable}/>   
                </div>
                <div>
                    <span><img src='./images/hair_icon.jpg' alt=''/></span><input type='text' placeholder='May I Know Your Skin Tone ?' disabled={disable}/>   
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
            <p>Religion : <span><input type='type' placeholder='May I Know Your Religion' disabled={disable}/></span></p>
            <p>Caste : <span><input type='type' placeholder='May I Know Your caste' disabled={disable}/></span></p>
            <p>Marital Status : <span><input type='type' placeholder='May I Know Your Marital Status' disabled={disable}/></span></p>
            <p>Affairs : <span><input type='type' placeholder='May I Know Your Affairs Name' disabled={disable}/></span></p>
            <p>Marrriage Date : <span><input type='type' placeholder='May I Know Your Marrriage Date' disabled={disable}/></span></p>
            <p>Spouse : <span><input type='type' placeholder='May I Know Your Spouse Name' disabled={disable}/></span></p>
            <p>children : <span><input type='type' placeholder='May I Know Your childrens Name' disabled={disable}/></span></p>
            <p>Mother : <span><input type='type' placeholder='May I Know Your Mother Name' disabled={disable}/></span></p>
            <p>Father : <span><input type='type' placeholder='May I Know Your Father Name' disabled={disable}/></span></p>
            <p>Sister : <span><input type='type' placeholder='May I Know Your Sister Name' disabled={disable}/></span></p>
        </div>
      </div>
      <hr/>
      <div className='container_profile_part4'>
         <div>
            <h4>Education</h4>
            <div>
                    <p>School : <span><input type='type' placeholder='Enter Your School Name' disabled={disable} /></span></p>
                    <p>Highest<br/>Qualification: <span><input type='type' placeholder='Enter Your Higher Studies' disabled={disable} /></span></p>
                    {/* <p>Quadivfication : <span><input type='type' placeholder='Enter Your Quadivfication' disabled={disable}/></span></p> */}

                    {/*  className={isActive ? "container_profile_part4_input" : "container_profile_part4_input_add"} */}
            </div>
            
        </div>

      </div>
       </div>
        </>
    )

}