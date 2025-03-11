import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDojPBD0aN-s8YnvP7b6spC-yPP866G2VI",
  authDomain: "nwritter-reloaded-cc101.firebaseapp.com",
  projectId: "nwritter-reloaded-cc101",
  storageBucket: "nwritter-reloaded-cc101.firebasestorage.app",
  messagingSenderId: "439386356426",
  appId: "1:439386356426:web:b73c08f3d22d965bb5d233",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
