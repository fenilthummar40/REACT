// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAphLqpQ_h8Qvg6GDyB_GtroLAf0c6_gDo",
  authDomain: "react-5c1a2.firebaseapp.com",
  projectId: "react-5c1a2",
  storageBucket: "react-5c1a2.appspot.com",
  messagingSenderId: "816336242216",
  appId: "1:816336242216:web:4d04ca5033d24a422f971d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export {auth , db};