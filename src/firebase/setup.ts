
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyA4kzzcVnGwzx-QNnVgLbRohO5YTsgQF_s",
  authDomain: "vikars-734dc.firebaseapp.com",
  projectId: "vikars-734dc",
  storageBucket: "vikars-734dc.firebasestorage.app",
  messagingSenderId: "329621776463",
  appId: "1:329621776463:web:fae1edf519d5b93b86223a",
  measurementId: "G-BGMZM7W26W"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
