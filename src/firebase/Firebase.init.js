// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjwFkk-ujIG1xumn8y1r6R5ePXIP1aqac",
    authDomain: "fir-auth-e3aba.firebaseapp.com",
    projectId: "fir-auth-e3aba",
    storageBucket: "fir-auth-e3aba.firebasestorage.app",
    messagingSenderId: "158160580159",
    appId: "1:158160580159:web:d76d9b19f77975bc89928a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)