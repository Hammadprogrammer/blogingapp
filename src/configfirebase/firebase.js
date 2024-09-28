// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjMMmm0qiTYvD1uuDbf3smCNLDS2Jkpl4",
    authDomain: "react-todo-app-cd08e.firebaseapp.com",
    projectId: "react-todo-app-cd08e",
    storageBucket: "react-todo-app-cd08e.appspot.com",
    messagingSenderId: "426621445892",
    appId: "1:426621445892:web:888a515d009e34e9429251",
    measurementId: "G-VDXPJ6TGBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
