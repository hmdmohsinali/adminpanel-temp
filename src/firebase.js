// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt81DMRmLP9aopGFZxoQIlKmy3FYOKaO0",
  authDomain: "admin-panel-temp.firebaseapp.com",
  projectId: "admin-panel-temp",
  storageBucket: "admin-panel-temp.appspot.com",
  messagingSenderId: "511072484669",
  appId: "1:511072484669:web:c89726b581e24e7c719954",
  measurementId: "G-7RMLRGR5ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);
export const auth = getAuth(app);