import { createApp } from 'vue'
import './style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app";


// Your web app's Firebase configuration
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

createApp(App).use(router).mount('#app')


