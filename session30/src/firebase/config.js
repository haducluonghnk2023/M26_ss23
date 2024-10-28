import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_API_KEY,
  authDomain: "m26vuejs.firebaseapp.com",
  projectId: "m26vuejs",
  storageBucket: "m26vuejs.appspot.com",
  messagingSenderId: "160094087293",
  appId: "1:160094087293:web:1bda08fd7b3912c0b46914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app)

