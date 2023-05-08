// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWqI6mZ-JXmHizKLP6majDSCYBmox1vnM",
  authDomain: "math-ai-99ae9.firebaseapp.com",
  projectId: "math-ai-99ae9",
  storageBucket: "math-ai-99ae9.appspot.com",
  messagingSenderId: "652334699840",
  appId: "1:652334699840:web:4d0b319e8684b5dfced6a5",
  measurementId: "G-VM0YNBNSCN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
