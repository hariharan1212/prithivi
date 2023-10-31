import React from 'react';
import './App.css';
import "./stylesheets/addicon.css";
import "./stylesheets/profile_headder.css";
import {GrNotification} from "react-icons/gr";
import {Routes,Route,Link} from  "react-router-dom"
import Home from './components/home';
import Chatprofile from './components/chatprofile';
import Searchclint from './components/searchclint';
import Navigation from './components/navigation';
//import Profile from './components/profile';
import AddIcon from './components/addicon';
import ProfileHeader from './components/profile_header';
import './stylesheets/navigation.css';


export default function App() {

      const list = document.querySelectorAll(".list");

     function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      }
    list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <>
    <div className="appContainer">
      <div className="appPage">
        <div className="appPage_nav">
             <span><img src="./images/flim_hook_logo.png" alt="" /></span>
             <span className="appPage_nav_btn1"><AddIcon/></span>
             <span className="appPage_nav_btn2"><button><GrNotification/></button></span>
        </div> 
       
        <div className="appPage_route">
              <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/chat" element={<Chatprofile/>}/>
                    <Route path="/searchclint" element={<Searchclint/>}/>
                    <Route path="/navigation" element={<Navigation/>}/>
                    <Route path="/profile" element={<ProfileHeader />} />
              </Routes>
        </div>
       </div> 


       <div className="navigation">
            <ul>
                <li className="list active">
                        <span className="icon">
                        <Link to={"/"} ><img src="./images/home.png" alt='' /></Link> 
                        </span>
                        {/* <span className="text">Home</span>   */}
                </li>
                <li className="list">
                        <span className="icon">
                        <Link to={"/chat"}><img src="./images/chat.png" alt=''/></Link> 
                        </span>
                        {/* <span className="text">chat</span> */}
                </li>
                <li className="list">
                        <span className="icon">
                        <Link to={"/searchclint"}><img src="./images/personSearch.png" alt=''/></Link> 
                        </span>
                        {/* <span className="text">searchclint</span> */}
                </li>
                <li className="list">
                        <span className="icon">
                        <Link to={"/navigation"}><img src="./images/navigation.png" alt=''/></Link> 
                        </span>
                        {/* <span className="text">navigation</span> */}
                </li>
                <li className="list">
                        <span className="icon">
                        <Link to={"/profile"} ><img src="./images/userprofile.png" alt='' /></Link>
                        </span>
                        {/* <span className="text">profile</span> */}
                </li>
                <div className="indicator"></div>
            </ul>
        </div>

          {/* <Link to={"/"} ><button><img src="./images/home.png" alt='' /></button></Link> 
          <Link to={"/chat"}><button><img src="./images/chat.png" alt=''/></button></Link> 
          <Link to={"/searchclint"}><button><img src="./images/personSearch.png" alt=''/></button></Link> 
          <Link to={"/navigation"}><button><img src="./images/navigation.jpg" alt=''/></button></Link> 
          <Link to={"/profile"} ><button><img src="./images/userprofile.png" alt='' /></button></Link>  */}
          {/* <div className="appIcons">
          </div> */}
     </div>
    </>
  );
}
