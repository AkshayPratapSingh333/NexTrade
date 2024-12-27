// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0v2emx-Y6LbEMdRdpJ0p6ENbEFok2X9E",
  authDomain: "nextrade-6db0b.firebaseapp.com",
  projectId: "nextrade-6db0b",
  storageBucket: "nextrade-6db0b.firebasestorage.app",
  messagingSenderId: "955189347825",
  appId: "1:955189347825:web:11c84c47c325a4005c7050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FireDB = getFirestore(app);
const auth = getAuth(app);
export { FireDB, auth };