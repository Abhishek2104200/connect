import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATRuVt9Bdae9m1ktngTP5yYwpqDzA-ma0",
    authDomain: "connect-7e7c5.firebaseapp.com",
    projectId: "connect-7e7c5",
    storageBucket: "connect-7e7c5.firebasestorage.app",
    messagingSenderId: "767901398506",
    appId: "1:767901398506:web:bbf90e65c58a4206e26e93",
    measurementId: "G-ZXE1R0SW1C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };