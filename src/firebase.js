// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB36NmTFldoAh8UsdY_9VOFSSH1yHnH3h8",
  authDomain: "csm-connect-99d72.firebaseapp.com",
  projectId: "csm-connect-99d72",
  storageBucket: "csm-connect-99d72.appspot.com",
  messagingSenderId: "719117900338",
  appId: "1:719117900338:web:df9f850718d22f6aa77a2b",
  measurementId: "G-V71WEGFHEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);
export const auth = getAuth(app);