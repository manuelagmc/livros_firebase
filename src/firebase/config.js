// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHW_rlFatstnHq-n4Oqv0ik8OdpMYoUAI",
  authDomain: "etec202402-a4c5d.firebaseapp.com",
  projectId: "etec202402-a4c5d",
  storageBucket: "etec202402-a4c5d.appspot.com",
  messagingSenderId: "32904180609",
  appId: "1:32904180609:web:9eb2951537b7332d612e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app)