import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import firebase from 'firebase/compat/app';
import db from './firebase';
import { useStateValue } from './StateProvider';
function Chat() {

  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))

      db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed>>>", input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  }
  return (

    <div className="chat">
      <div className="chat_header">
        <AccountCircleIcon />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>last seen{" "} 
          {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
          </p>
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
        {messages.map(message => (
          <p className={`chat_message ${message.name === user.displayName && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timeStamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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
