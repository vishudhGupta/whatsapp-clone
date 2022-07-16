import React from 'react'
import './Chat.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function chat() {
  return (
    <div className="chat">
    <div className="chat_header">
    <AccountCircleIcon  />
    <div className="chat_headerInfo">
      <h3>Room Name</h3>
      <p>Last Seen....</p>
    </div>
    <div className="chat_headerRight">
    <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
    </div>
    </div>
    <div className="chat_body">
      <p className={`chat_message ${true &&"chat_reciever"}`}>
      <span className="chat_name">Vishudh</span>
        Hey Gyus
        <span className="chat_timeStamp">
        3:52pm
          </span>
          </p>
    </div>
    <div className="chat_footer">
        <InsertEmoticonIcon />
          <form >
            <input placeholder="Type a Message" type="text" />
            <button>Send a Message</button>
          </form>
        <MicIcon />
    </div>
    </div>
  )
}

export default chat
