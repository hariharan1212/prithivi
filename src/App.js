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
          <h3>film-hook   
             <span><button><GrAdd/></button></span>
             <span><button><GrNotification/></button></span>
          </h3>
        </div> <hr />
       
        <div className="appPage_route">
              <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/searchclint" element={<Searchclint/>}/>
                    <Route path="/navigation" element={<Navigation/>}/>
                    <Route path="/profile" element={<Profile/>} />
              </Routes>
        </div>
       </div> <hr/>

       <div className="appIcons">
          <span> <Link to={"/"}><img src="./images/home.png" alt=''/> </Link> </span>
          <span> <Link to={"/chat"}><img src="./images/chat.png" alt=''/> </Link> </span>
          <span> <Link to={"/searchclint"}><img src="./images/personSearch.png" alt=''/></Link> </span>
          <span> <Link to={"/navigation"}><img src="./images/navigation.png" alt=''/> </Link> </span>
          <span> <Link to={"/profile"}><img src="./images/userprofile.png" alt=''/> </Link> </span>
       </div>
    </div>
    </>
  );
}
