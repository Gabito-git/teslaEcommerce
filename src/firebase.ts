// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_86bSh0smzxU758K9O7pWWKhAv65BKlI",
  authDomain: "tesla-clone-24589.firebaseapp.com",
  projectId: "tesla-clone-24589",
  storageBucket: "tesla-clone-24589.appspot.com",
  messagingSenderId: "650168035978",
  appId: "1:650168035978:web:20d317aa2f3392682c1b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;