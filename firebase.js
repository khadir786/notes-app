// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszxk6bB-CWIrnNfgw36imuK3Lh9lhRfY",
  authDomain: "react-notes-6df06.firebaseapp.com",
  projectId: "react-notes-6df06",
  storageBucket: "react-notes-6df06.appspot.com",
  messagingSenderId: "287241238786",
  appId: "1:287241238786:web:6a1335aafcdd20d66b6a1b",
  measurementId: "G-TJ8TMV1V6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
// const analytics = getAnalytics(app);