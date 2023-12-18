import firebase from 'firebase/app'
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAk0aE8vz3jm47XQsITKLfMkWxrAL9oGa8",
    authDomain: "josette-1.firebaseapp.com",
    databaseURL: "https://josette-1-default-rtdb.firebaseio.com",
    projectId: "josette-1",
    storageBucket: "josette-1.appspot.com",
    messagingSenderId: "990184324652",
    appId: "1:990184324652:web:5a1b1f668d2e9266cd1b89"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();