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
                                    <div><h4>10&nbsp;<span><img src='./images/star.png' alt=''/></span></h4> 
                                    </div>
                                    <h5>Actor</h5>
                                    <h5>Producer</h5>
                                    <div>
                                    <img src='./images/Editpage_icon.png'/>
                                    </div>
                    </div>
           
            </div>
            <div className='profile_name'>
                <h4>Rajnikanth(Thalaivar)</h4> 
                <p>7.9M Follwers&nbsp;100Following</p>
                <p><span><img src='./images/dob_icon.png' alt=''/></span>&nbsp;<input type='date' value={"1965-11-02"}/></p>
                <p><span><img src='./images/birthplace_icon.png' alt=''/></span>&nbsp;<input type='text' value={"NewDelhi,India"} /></p>
                <p><span><img src='./images/Shooting_location_spot.png' alt=''/></span>&nbsp; <input type='text' value={"Mumbai,India"}/></p>
                <p><span><img src='./images/hometown_icon.png' alt=''/></span>&nbsp; <input type='text' value={"India"}/></p>
                <p><span><img src='./images/Cash_icon.png' alt=''/></span>&nbsp;Rs.1.4 Crores/day(optional)</p>
                <p><span><img src='./images/Workexp_icon.png' alt=''/></span>&nbsp;<input type='number' value={"34"}/> <input type='dropdown' value={"Years"}/> </p>
                <p><span><img src='./images/movies_icon.jpg' alt=''/></span>&nbsp;105 Movies Released</p>
                <p><span><img src='./images/movies_icon.jpg' alt=''/></span>&nbsp;25 Septembar</p>
            </div>        
            </div>
            <div>
               
            </div>
       </div>
        </>
    )

}