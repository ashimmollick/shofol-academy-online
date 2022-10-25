// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAh9FH43Wv6Spx0hgdQA_z3NiWD5UwtpuY",
    authDomain: "shofol-academy-school.firebaseapp.com",
    projectId: "shofol-academy-school",
    storageBucket: "shofol-academy-school.appspot.com",
    messagingSenderId: "221169052889",
    appId: "1:221169052889:web:c09f80d059f403899ae2c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;