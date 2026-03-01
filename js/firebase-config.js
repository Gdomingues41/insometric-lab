import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv2Wj1ZDFRqxwOZRFCiMCazpFVpoUz6A8",
  authDomain: "insometric-lab.firebaseapp.com",
  projectId: "insometric-lab",
  storageBucket: "insometric-lab.firebasestorage.app",
  messagingSenderId: "20544027751",
  appId: "1:20544027751:web:084dcc9c6f4d4540d528c2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
