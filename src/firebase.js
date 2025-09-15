// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2nnXBKNrr2ajJj2we7J9w8dPrXqDdTY4",
    authDomain: "nutrient58e4b.firebaseapp.com",
    projectId: "nutrient58e4b",
    storageBucket: "nutrient58e4b.firebasestorage.app",
    messagingSenderId: "354530403880",
    appId: "1:354530403880:web:0764add8fcb065e8b0f71d"
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// Firestore インスタンス
const db = getFirestore(app);

export { db };
