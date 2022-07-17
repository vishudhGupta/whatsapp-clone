import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Chat.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from './firebase';
function Chat() {

  const { roomId} = useParams();
  const [input , setInput]= useState("");
  const [roomName , setRoomName] = useState("");
  useEffect(()=>{
    if (roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(setRoomName(snapshot.data().name)))
    }
  }, [roomId])

  const sendMessage = (e) =>{
    e.preventDefault();
    console.log("you typed>>>",input);
    setInput("");
  }





  return (

    <div className="chat">
    <div className="chat_header">
    <AccountCircleIcon  />
    <div className="chat_headerInfo">
      <h3>{roomName}</h3>
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
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a Message" type="text" />
            <button onClick={sendMessage} type="Submit">Send a Message</button>
          </form>
        <MicIcon />
    </div>
    </div>
  )
}

export default Chat
