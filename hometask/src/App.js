import React, {useState, useEffect} from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Chat from './components/Chat/Chat';

function App() {

  const [contacts, setContacts] = useState([])
  const [messages, setMessages] = useState({})
  const [currentChat, setCurrentChat] = useState(null)
  let currentMessages = []

  useEffect(() => {

    if(contacts.length === 0){
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setContacts(data));
    }

  })

  const sendMessage = function(text, user_id){
    if(!messages[currentChat]){
      messages[currentChat] = []
    }
    const data = Object.assign({}, messages) 
    data[currentChat] = data[currentChat].concat({user_id, text, id: messages[currentChat].length})
    setMessages(data)
  }

  const sendTwoMessages = function(text){
    sendMessage(text, 1)

    setTimeout(() => {
      sendMessage(text, currentChat)
    }, 1000);
  }

  const changeChat = function(id){
    setCurrentChat(id)
  }

  
  currentMessages = messages[currentChat] ? messages[currentChat] : [];

  return (
    <div className="App">
      <header className="App-header">
        {/* Messages */}
        <Contacts
        contacts={contacts}
        changeChat={changeChat}
        messages={messages}/>
        <Chat
        sendMessage={sendTwoMessages}
        messages={currentMessages}
        />
      </header>
    </div>
  );
}

export default App;
