import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK5i98NiiofTrjd7tyqQCeTcksl8vtDW4",
  authDomain: "pizza-lovers-ce0d1.firebaseapp.com",
  projectId: "pizza-lovers-ce0d1",
  storageBucket: "pizza-lovers-ce0d1.appspot.com",
  messagingSenderId: "204973536141",
  appId: "1:204973536141:web:8ce951d45a22fab14f03c4",
  measurementId: "G-VL3G24GDN5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();