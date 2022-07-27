// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcL_qNKxAQK2MPxfHrcUHfSmPX5BnUJq4",
    authDomain: "jewelry-store-ba8ed.firebaseapp.com",
    projectId: "jewelry-store-ba8ed",
    storageBucket: "jewelry-store-ba8ed.appspot.com",
    messagingSenderId: "308574872853",
    appId: "1:308574872853:web:9a1e72d8a4e1188802351c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;