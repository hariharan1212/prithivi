import './App.css';
import "./stylesheets/addicon.css"
import {GrNotification} from "react-icons/gr";
import {Routes,Route,Link} from  "react-router-dom"
import Home from './components/home';
import Chat from './components/chat';
import Searchclint from './components/searchclint';
import Navigation from './components/navigation';
import Profile from './components/profile';
import AddIcon from './components/addicon';



export default function App() {
  return (
    <>
    <div className="appContainer">
      <div className="appPage">
        <div className="appPage_nav">
             <span><img src="./images/flim_hook_logo.png" alt="" /></span>
             <span><AddIcon/></span>
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
          <Link to={"/"} ><button><img src="./images/home.png" alt='' /></button></Link> 
          <Link to={"/chat"}><button><img src="./images/chat.png" alt=''/></button></Link> 
          <Link to={"/searchclint"}><button><img src="./images/personSearch.png" alt=''/></button></Link> 
          <Link to={"/navigation"}><button><img src="./images/navigation.jpg" alt=''/></button></Link> 
          <Link to={"/profile"}><button><img src="./images/userprofile.png" alt=''/></button></Link> 
      </div>
    </div>
    </>
  );
}
