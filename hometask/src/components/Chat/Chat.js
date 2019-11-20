import React, {useState} from 'react';
import './Chat.css';

function Chat(props) {
  const [message, setMessage] = useState("")

  const handleInputChange = e => {
    setMessage(e.target.value)
  }


  return (
    <div className="Chat">
        {

            props.messages.map((message, i) => {
                const isCurrentUser = message.user_id === 1 
                const lastMessageOfUser = props.messages[i+1] ? props.messages[i+1].user_id !== message.user_id : true;
                return (
                <div key={message.id} className={
                    "Chat-row" + (isCurrentUser ? " Chat-currentUser": "") + (lastMessageOfUser ? " Chat-last" : " ") }>
                    <div className="Chat-details">
                    <span>{message.text}</span>
                    </div>
                </div>
                )
            })
        }
        <div className="input">
            <input type="text" onChange={handleInputChange}/>
            <button onClick={props.sendMessage.bind(this, message)}>Send</button>
        </div>
    </div>
  );
}

export default Chat;
