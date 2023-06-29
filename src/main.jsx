import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIfo7jQsW_5UDvDG8YMRqIVO8OC9kjeCw",
  authDomain: "royal-box-8a7bc.firebaseapp.com",
  projectId: "royal-box-8a7bc",
  storageBucket: "royal-box-8a7bc.appspot.com",
  messagingSenderId: "323566688533",
  appId: "1:323566688533:web:5282fd50e945f1f3e3f11c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
