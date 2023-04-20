
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOmJqRPCG5F38TFWA2DY56JyUww-rswNI",
  authDomain: "react-authentication-3ba18.firebaseapp.com",
  projectId: "react-authentication-3ba18",
  storageBucket: "react-authentication-3ba18.appspot.com",
  messagingSenderId: "640195871916",
  appId: "1:640195871916:web:9a0c8a55d12190b9bb4b09",
  measurementId: "G-4EZW2JEXXE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;




