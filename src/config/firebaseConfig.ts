import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF7aTc4N4wlyJxKdf2fnjFJjCWlRynXOM",
  authDomain: "medilog-f77ea.firebaseapp.com",
  projectId: "medilog-f77ea",
  storageBucket: "medilog-f77ea.appspot.com",
  messagingSenderId: "425574707859",
  appId: "1:425574707859:web:4b18cb25e573e143261366",
  measurementId: "G-535XSB7M90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
