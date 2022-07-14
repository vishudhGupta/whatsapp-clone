import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './SidebarChat.css'
function SidebarChat({addNewChat}) {

const createChat = () => {
    const roomName = prompt("Please enter name For Chat");
    if(roomName) {
      //database comes in action
    }
};



  return !addNewChat ? (
    <div>
      <div className="sidebarChat">
      <AccountCircleIcon  />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
      </div>
    </div>
  ):(
<div onClick={createChat} className="sidebarChat">
  <h3>Add New Chat</h3>

</div>
  )
}

export default SidebarChat
