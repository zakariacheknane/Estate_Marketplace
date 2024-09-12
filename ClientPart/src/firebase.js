// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-marketplace-aa6b7.firebaseapp.com",
  projectId: "estate-marketplace-aa6b7",
  storageBucket: "estate-marketplace-aa6b7.appspot.com",
  messagingSenderId: "542976225244",
  appId: "1:542976225244:web:db07c399630856615b6919"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

