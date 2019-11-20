import React from 'react';
import './Contacts.css';

function Contacts(props) {
  return (
    <div className="Contacts">
        {
            props.contacts.map(contact => {
              const messagesCount = props.messages.length;
              const lastMessage = messagesCount ? contact.messages[messagesCount -1] : ""
              return (
              <div key={contact.id} className="Contacts-row" onClick={props.changeChat.bind(this, contact.id)}>
                  <span className="Contacts-photo"></span>
                    <div className="Contacts-details">
                      <span>{contact.name}</span>
                      <span>{lastMessage}</span>
                    </div>
                  </div>
              )
            })
        }
    </div>
  );
}

export default Contacts;
