import firebase from "firebase/app";
import "firebase/auth";

// const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } = process.env

const app = firebase.initializeApp({
  apiKey: "AIzaSyA75Et9a6pKNkvz5ZNVW6N2WgLwgkVus9A",
  appId: "1:71838642710:web:604f0a1abef27c60f87b37",
  authDomain: "auth-app-97ab3.firebaseapp.com",
  projectId: "auth-app-97ab3.",
  storageBucket: "auth-app-97ab3.appspot.com",
  messagingSenderId: "71838642710"
})

export const auth = app.auth();
export default app;