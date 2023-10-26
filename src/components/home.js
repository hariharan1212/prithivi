import React from 'react';
import Profile from './profile';
import { Routes,Route,Link } from 'react-router-dom';
import'../stylesheets/home.css';

export default function Home (){
    //https://api.slingacademy.com/v1/sample-data/photos
    // fetch("https://api.slingacademy.com/v1/sample-data/photos")
    // .then(response=>response.json())
    // .then(data=>console.log(data.photos.url))

    return(
        <>
        <div className='route'>
        <Routes>
        <Route path="/profile" element={<Profile/>} />
        </Routes>
        </div>
        <div className='profilep'>
            <div className='propro'>
        <Link to={"/profile"}><button className='pro'><img src="./images/userprofile.png" alt=''/></button></Link> 
        <input type="text" className='input' placeholder={"What's on your mind?"}/>
        <button className='pics'><img src="./images/photos-icon.png" alt=''/><p>Gallery</p></button>
        </div>
        <div className='pppp'>
            <button className='wrap'><img src="./images/createstory icon.png" alt=''/><p>New</p></button>
            <button className='wrap1'><img src="./images/Live video icon.png" alt=''/><p>Live</p></button>
            <button className='wrap2'><img src="./images/promote icon.png" alt=''/><p>Promote</p></button>
            <button className='wrap3'><img src="./images/link icon.png" alt=''/><p>Link</p></button>
        </div>
        </div>
        
        <p className='pp'>gg</p>
        <div className='pro2'>
        <div className='propro2'>
        <Link to={"/profile"}><button className='pro'><img src="./images/userprofile.png" alt=''/></button></Link> 
        <button className='pics1'><img src="./images/johncena.jpg" alt=''/><p></p></button>
        <button className='pics2'><img src="./images/Lionel-Messi.jpg" alt=''/><p></p></button>
        <button className='pics3'><img src="./images/rolex.jpg" alt=''/><p></p></button>
        <button className='pics4'><img src="./images/samantha.jpg" alt=''/><p></p></button>
        <button className='pics5'><img src="./images/tamannaah.jpg" alt=''/><p></p></button>
        <button className='pics6'><img src="./images/trisha.jpg" alt=''/><p></p></button>
        </div>
        </div>
        <p className='pp'>gg</p>
        <div class="profile2">
        <div class="pro1">
    <div class="pro2">
    <img src="./images/userprofile.png" alt=""/></div>
    <div class="pro4"><p><b>johncena</b><br/>actor,wrestler,</p></div>
    <div class="pro3"><img src="./images/followers icon.png" alt=""/></div><p>21k</p>
    <div class="pro2"><img src="./images/Dot menu icon.png" alt=""/></div>
    <div class="loc"><img src="./images/Shooting_location_spot.png" alt=""/>
    <p>U.S.A</p></div>
    <div class="post"><img src="./images/johncena.jpg" alt=""/><div className='loc'><p>Never, Give up</p><br/></div>
    <div class="like"><img src="./images/Like icon.png" alt=""/><p>Like</p></div>
    <div class="like"><img src="./images/comment icon.png" alt=""/><p>comment</p></div>
    <div class="like"><img src="./images/Share icon.png" alt=""/><p>Share</p></div>
    </div>
    </div>
    <hr/>
    <div class="pro1">
        <div class="pro2">
            <img src="./images/userprofile.png" alt=""/></div>
            <div class="pro4"><p><b>samantha</b><br/>actress,model</p></div>
            <div class="pro3"><img src="./images/followers icon.png" alt=""/></div>
            <p>201k</p>
            <div class="pro2"><img src="./images/Dot menu icon.png" alt=""/></div>
            <div class="loc"><img src="./images/Shooting_location_spot.png" alt=""/>
    <p>Chennai</p></div>
            <div class="post"><img src="./images/samantha.jpg" alt=""/>
                <div class="loc"><p>Chennai</p></div><div class="like"><img src="./images/Like icon.png" alt=""/><p>Like</p></div>
                <div class="like"><img src="./images/comment icon.png" alt=""/>
                <p>comment</p></div>
                <div class="like"><img src="./images/Share icon.png" alt=""/>
                <p>Share</p>
                </div>
                </div>
                </div>
                <hr/>
                <div class="pro1">
                    <div class="pro2">
                        <img src="./images/userprofile.png" alt=""/></div>
                        <div class="pro4"><p><b>Tamannaah</b><br/>actress,model</p></div><div class="pro3"><img src="./images/followers icon.png" alt=""/></div><p>251k</p>
                        <div class="pro2"><img src="./images/Dot menu icon.png" alt=""/></div>
                        <div class="loc"><img src="./images/Shooting_location_spot.png" alt=""/>
    <p>Bangalore</p></div>
                        <div class="post"><img src="./images/tamannaah.jpg" alt=""/>
                        <div class="loc"><p>bangalore</p></div>
                        <div class="like"><img src="./images/Like icon.png" alt=""/><p>Like</p></div>
                        <div class="like"><img src="./images/comment icon.png" alt=""/><p>comment</p></div>
                        <div class="like"><img src="./images/Share icon.png" alt=""/><p>Share</p></div></div>
                        </div>
                        <hr/>
                        <div class="pro1">
                            <div class="pro2">
                                <img src="./images/userprofile.png" alt=""/></div>
                                <div class="pro4"><p><b>Tamannaah</b><br/>actress,model</p></div>
                                <div class="pro3"><img src="./images/followers icon.png" alt=""/></div><p>251k</p>
                                <div class="pro2"><img src="./images/Dot menu icon.png" alt=""/></div>
                                <div class="loc"><img src="./images/Shooting_location_spot.png" alt=""/><p>Bangalore</p></div>
                                <div class="post"><img src="./images/rolex.jpg" alt=""/>
                                <div class="loc"><p>bangalore</p></div>
                                <div class="like"><img src="./images/Like icon.png" alt=""/><p>Like</p></div>
                                <div class="like"><img src="./images/comment icon.png" alt=""/><p>comment</p></div>
                                <div class="like"><img src="./images/Share icon.png" alt=""/><p>Share</p></div></div>
                                </div>
                                </div>
                            </>
    )
    }