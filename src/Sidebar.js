import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
      <AccountCircleIcon />
      <div className="sidebar_headerRight">
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />
      </div>
      </div>
    <div className="sidebar_search">


    </div>


    </div>
  )
}

export default Sidebar
