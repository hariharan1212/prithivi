import React,{useState} from 'react';
import "../stylesheets/chat.css"

export default function Chat (){

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') return;
  
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // Simulate a response from the other user (you can replace this with real data)
      setTimeout(() => {
        setMessages([...messages, { text: 'Hello, how can I help you?', sender: 'other' }]);
      }, 1000);
    };
  
    return(
        <>
        <div className="chat_container">
            <div className='profile'>
                                    <div className="profile_header" >
                                            <button className='profile_btn1'><img src='./images/cover_pic.jpeg' alt='' className='profile_pic'/></button>
                                            <button className='profile_btn2'><h4>RAJINIKANTH</h4></button>
                                            <button className='profile_btn3'> <img src='./images/Chats_Menu.png' alt='' className='chat_pop'/></button>
                                   </div>
                        <div className="chat-messages">
                                 {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                  {message.text}
                            </div>
                                 ))}
                        </div>
                <div className="input-container">
                        <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button className='profile_btn4' onClick={handleSendMessage}><img src='./images/icons8-send-48.png' alt='' className='chat_send'/></button>
                </div>
         </div>
    </div>
        </>
    )

}