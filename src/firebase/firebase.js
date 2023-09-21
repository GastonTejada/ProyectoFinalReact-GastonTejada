// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwlSIb3oRoE5dQsOAVYCOhAusNG5EoqdQ",
  authDomain: "popcorntime-bc792.firebaseapp.com",
  projectId: "popcorntime-bc792",
  storageBucket: "popcorntime-bc792.appspot.com",
  messagingSenderId: "223081225590",
  appId: "1:223081225590:web:1834c7bcf44a0d39cc2e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);