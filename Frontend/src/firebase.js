import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnifVg94ZIrRvodPnjZtqCzTuMk2a-VtM",
    authDomain: "trust-website-c39c6.firebaseapp.com",
    projectId: "trust-website-c39c6",
    storageBucket: "trust-website-c39c6.firebasestorage.app",
    messagingSenderId: "829218422622",
    appId: "1:829218422622:web:1233d353b5429e084899cf",
    measurementId: "G-FM45SQH0GP"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };