// Import the functions you need from the SDKs you need
//import '@expo/metro-runtime';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ZmPMEt_T0hEM8yU8jztltbM17AGS-pU",
  authDomain: "libreria-f5f80.firebaseapp.com",
  projectId: "libreria-f5f80",
  storageBucket: "libreria-f5f80.firebasestorage.app",
  messagingSenderId: "924514178005",
  appId: "1:924514178005:web:06ee1d4ca0b6b75287a35c",
  measurementId: "G-NJTT2MMD5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);