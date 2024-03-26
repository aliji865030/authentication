// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnO7HNLySPJgbM9mbojo9Vb6WH1nv8ErM",
  authDomain: "geekster-d240d.firebaseapp.com",
  projectId: "geekster-d240d",
  storageBucket: "geekster-d240d.appspot.com",
  messagingSenderId: "581376249337",
  appId: "1:581376249337:web:fac5e102afbfccf3cec128",
  measurementId: "G-6N8TF7K8WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


export  {app,provider};