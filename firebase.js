import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4-3C399ei4NmXVnrH1ThJnBTtzueFBRk",
    authDomain: "khanh-huyen-tho-con.firebaseapp.com",
    projectId: "khanh-huyen-tho-con",
    storageBucket: "khanh-huyen-tho-con.firebasestorage.app",
    messagingSenderId: "780045357032",
    appId: "1:780045357032:web:82afd8201512e7ccb3de5d"
};

// init
const app = initializeApp(firebaseConfig);

// 👉 QUAN TRỌNG
const db = getFirestore(app);

// 👉 EXPORT RA NGOÀI
export { db };