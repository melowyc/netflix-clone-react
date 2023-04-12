import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPwet51-BAbg6-OeK3DjkvrH7yTb84yHs",
  authDomain: "netflix-user-942e7.firebaseapp.com",
  projectId: "netflix-user-942e7",
  storageBucket: "netflix-user-942e7.appspot.com",
  messagingSenderId: "822783014678",
  appId: "1:822783014678:web:3128475da1d9e223574237",
  measurementId: "G-DSQ4D5S3Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);