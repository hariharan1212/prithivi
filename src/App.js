import './App.css';
import {GrAdd} from "react-icons/gr";
import {GrNotification} from "react-icons/gr";
import {Routes,Route,Link} from  "react-router-dom"
import Home from './components/home';
import Chat from './components/chat';
import Searchclint from './components/searchclint';
import Navigation from './components/navigation';
import Profile from './components/profile';



export default function App() {
  return (
    <>
    <div className="appContainer">
      <div className="appPage">
        <div className="appPage_nav">
             <span><img src="./images/flim_hook_logo.png" alt="" /></span>
             <span className="appPage_nav_btn1"><button><GrAdd/></button></span>
             <span className="appPage_nav_btn2"><button><GrNotification/></button></span>
        </div> 
       
        <div className="appPage_route">
              <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/searchclint" element={<Searchclint/>}/>
                    <Route path="/navigation" element={<Navigation/>}/>
                    <Route path="/profile" element={<Profile/>} />
              </Routes>
        </div>
       </div> 

       <div className="appIcons">
          <Link to={"/"} ><img src="./images/home.png" alt='' /></Link> 
          <Link to={"/chat"}><img src="./images/chat.png" alt=''/></Link> 
          <Link to={"/searchclint"}><img src="./images/personSearch.png" alt=''/></Link> 
          <Link to={"/navigation"}><img src="./images/navigation.jpg" alt=''/></Link> 
          <Link to={"/profile"}><img src="./images/userprofile.png" alt=''/></Link> 
      </div>
    </div>
    </>
  );
}
