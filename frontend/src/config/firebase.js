// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-msg-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
