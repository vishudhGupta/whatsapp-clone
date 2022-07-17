import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import './Sidebar.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from './firebase';
function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect( () => {
    db.collection('rooms').onSnapshot(snapshot => {
      setRooms(snapshot.docs.map(doc =>
        ({
          id: doc.id,
          data: doc.data()
        })
        ))
    })
  }, [])



  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <AccountCircleIcon />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or Start New Chat" type="text" />
        </div>

      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name= {room.data.name} />
        ))}
      </div>

    </div>
  )
}

export default Sidebar
