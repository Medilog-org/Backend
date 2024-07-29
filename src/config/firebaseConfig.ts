import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS1UZe5nxEfSVLQwDADOJbqyW7QjJcpu8",
  authDomain: "medilog-ec19b.firebaseapp.com",
  projectId: "medilog-ec19b",
  storageBucket: "medilog-ec19b.appspot.com",
  messagingSenderId: "1073972182214",
  appId: "1:1073972182214:web:e91e9059604506d1e92bc7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
