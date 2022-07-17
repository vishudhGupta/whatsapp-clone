// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBsgpnq-4Q-cwDp5QtiCqYC9GETh1GnM78",
    authDomain: "whatsapp-clone-97d85.firebaseapp.com",
    projectId: "whatsapp-clone-97d85",
    storageBucket: "whatsapp-clone-97d85.appspot.com",
    messagingSenderId: "126372728237",
    appId: "1:126372728237:web:eb3370912905ca47d2e524",
    measurementId: "G-17505Z0NF7"
  };

 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export{ auth, provider };
  export default db;