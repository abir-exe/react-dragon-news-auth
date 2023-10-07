// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwoQcDeJoCvZ_eSOrKcHpzYtRq4bXV5fI",
  authDomain: "react-dragon-news-auth-be875.firebaseapp.com",
  projectId: "react-dragon-news-auth-be875",
  storageBucket: "react-dragon-news-auth-be875.appspot.com",
  messagingSenderId: "1025677436851",
  appId: "1:1025677436851:web:468dd0de7622ea4a1fcdc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app