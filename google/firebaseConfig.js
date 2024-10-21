// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3chslhxNX6fcEImEThiBJ6Oe55mN_558",
  authDomain: "fir-d016a.firebaseapp.com",
  projectId: "fir-d016a",
  storageBucket: "fir-d016a.appspot.com",
  messagingSenderId: "181906307748",
  appId: "1:181906307748:web:95c4ff186943e7ee85c431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider;

export{auth, provider}