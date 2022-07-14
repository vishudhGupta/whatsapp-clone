import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './SidebarChat.css'
function SidebarChat() {
  return (
    <div>
      <div className="sidebarChat">
      <AccountCircleIcon  />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
      </div>
    </div>
  )
}

export default SidebarChat
