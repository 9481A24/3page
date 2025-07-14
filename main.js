// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqYQKqnPKSm0GyziIsGNmyamEevpki0YE",
  authDomain: "controlefinanceiro-23fce.firebaseapp.com",
  projectId: "controlefinanceiro-23fce",
  storageBucket: "controlefinanceiro-23fce.appspot.com",
  messagingSenderId: "967993151955",
  appId: "1:967993151955:web:ac2711081550ee34519f26"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

