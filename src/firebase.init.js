// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5daX25b9WTRsq_jIuydPxCw7kpVwBb9A",
  authDomain: "simple-firebase-fa776.firebaseapp.com",
  projectId: "simple-firebase-fa776",
  storageBucket: "simple-firebase-fa776.appspot.com",
  messagingSenderId: "645039475135",
  appId: "1:645039475135:web:69ab23fd00c07bb9cdb90a",
  measurementId: "G-LSC7PKKC97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
