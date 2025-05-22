// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnCXcCA6KM7KLwQ3B4YNGPgL8pfGXAFl4",
  authDomain: "mee206.firebaseapp.com",
  projectId: "mee206",
  storageBucket: "mee206.firebasestorage.app",
  messagingSenderId: "1024214290679",
  appId: "1:1024214290679:web:ebdf733aabd02fff4d83f2",
  measurementId: "G-FEKDW6QY56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firestore
const db = getFirestore(app);

export default db;