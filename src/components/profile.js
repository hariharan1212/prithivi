import React from 'react';

export default function Profile (){
    
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
                                    <img src='./images/Editpage_icon.png' alt='' width={"30px"} height={"30px"} />
                                    </div>
                    </div>
           
            </div>
            <div className='profile_name'>
                <h4>Rajnikanth(Thalaivar)</h4> 
                <p>7.9M Follwers || 100 Following</p>
                <p><span><img src='./images/dob_icon.png' alt=''/></span><input type='date'/></p>
                <p><span><img src='./images/birthplace_icon.png' alt=''/></span><input type='text' value={"NewDelhi,India"} /></p>
                <p><span><img src='./images/Shooting_location_spot.png' alt=''/></span> <input type='text' value={"Mumbai,India"}/></p>
                <p><span><img src='./images/flag.png' alt=''/></span> <input type='text' value={"India"}/></p>
                <p><span><img src='./images/Cash_icon.png' alt=''/></span><input type='text' value={"Rs.1.4 Crores/day"}/></p>
                <p><span><img src='./images/Workexp_icon.png' alt=''/></span><input type='text' value={"34 Years"}/></p> 
                {/* <input type='text' value={"Years"}/>  */}
                <p><span><img src='./images/movies_icon.jpg' alt=''/></span><input type='text' value={"105 Movies Released"}/></p>
                <p><span><img src='./images/reservation_icon.jpg' alt=''/></span><input type='text' value={"25/September/2025"}/></p>
            </div>        
            </div>
         <hr/>
 {/* -------------------------------------------------------------------- */}
         <div className='container_profile_part2'> 
            <div><h4>Body Measurements:</h4></div>
            <div className='container_profile_part2_1'>
                <div>
                    <span><img src='./images/Height_icon.png' alt=''/></span><input type='text' value={"173cm"}/>   
                </div>
                <div>
                    <span><img src='./images/weight icon.png' alt=''/></span><input type='text' value={"75kgs"}/>   
                </div>
                <div>
                    <span><img src='./images/eye_icon.png' alt=''/></span><input type='text' value={"Dark Brown"}/>   
                </div>
                <div>
                    <span><img src='./images/hair_icon.jpg' alt=''/></span><input type='text' value={"Black"}/>   
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
            <p>Religion : <span><input type='type' value={"Islam"}/></span></p>
            <p>Caste : <span><input type='type' value={"sunni"}/></span></p>
            <p>Marital Status : <span><input type='type' value={"Married"}/></span></p>
            <p>Affairs : <span><input type='type' value={"Gauri Chibber"}/></span></p>
            <p>Marrriage Date : <span><input type='date' value={"1991-10-25"}/></span></p>
            <p>Spouse : <span><input type='type' value={"Gauri Khan"}/></span></p>
            <p>children : <span><input type='type' value={"Arya Khan"}/></span></p>
            <p>Mother : <span><input type='type' value={"Latee Fathima"}/></span></p>
            <p>Father : <span><input type='type' value={"Taj Mohammad Khani"}/></span></p>
            <p>Sister : <span><input type='type' value={"Shahnaz Lalarukh"}/></span></p>
        </div>
      </div>
      <hr/>
      <div className='container_profile_part4'>
         <div>
            <h4>Education</h4>
            <div>
                    <p>School : <span><input type='type' value={"St.Columbia's School"}/></span></p>
                    <p>Highest : <span><input type='type' value={"BA"}/></span></p>
                    <p>Qualification : <span><input type='type' value={"Master Degree in Mass Communication"}/></span></p>
            </div>
        </div>

      </div>
       </div>
        </>
    )

}