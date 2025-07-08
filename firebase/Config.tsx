// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Un4qe1SEzIjwPDtAJdLK0WgjBU-An-A",
  authDomain: "app-fire-394da.firebaseapp.com",
  databaseURL: "https://app-fire-394da-default-rtdb.firebaseio.com",
  projectId: "app-fire-394da",
  storageBucket: "app-fire-394da.firebasestorage.app",
  messagingSenderId: "558930400943",
  appId: "1:558930400943:web:f2d0a873edcc1f35b8e65a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
