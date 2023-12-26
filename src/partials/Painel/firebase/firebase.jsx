
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB4LRhU6M0qfanUhFzuBrffwfncfWYjzO8",
  authDomain: "abea-project.firebaseapp.com",
  projectId: "abea-project",
  storageBucket: "abea-project.appspot.com",
  messagingSenderId: "1055844294948",
  appId: "1:1055844294948:web:52100eeb79d3bd2fff13b1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export {auth,db};