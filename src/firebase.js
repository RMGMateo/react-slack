import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljFHqeaonN5aeDCLMtbVENEznUvqEHBc",
  authDomain: "react-slack-4682d.firebaseapp.com",
  projectId: "react-slack-4682d",
  storageBucket: "react-slack-4682d.appspot.com",
  messagingSenderId: "182111173193",
  appId: "1:182111173193:web:a555e6e700dab5a2c85d98"
};


  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }