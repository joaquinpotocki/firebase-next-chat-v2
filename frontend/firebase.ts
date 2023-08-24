import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAM-Az1p8S7UaJSA4Lkk37AQHLwK9i2Cp8",
    authDomain: "fir-next-chat-v2.firebaseapp.com",
    projectId: "firebase-next-chat-v2",
    storageBucket: "firebase-next-chat-v2.appspot.com",
    messagingSenderId: "962445180308",
    appId: "1:962445180308:web:14cde20f4b78fa21baa381"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);