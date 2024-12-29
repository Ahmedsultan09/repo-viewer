// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHUgVTH6GOGcs8RFUTwDunYdcCvCteF5Q",
  authDomain: "leadsmart-task.firebaseapp.com",
  projectId: "leadsmart-task",
  storageBucket: "leadsmart-task.firebasestorage.app",
  messagingSenderId: "153497278636",
  appId: "1:153497278636:web:3b0797f10ebcbdad1da709",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { auth, provider, signInWithPopup, GithubAuthProvider };
