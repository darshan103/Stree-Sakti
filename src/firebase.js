import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6aK2kdhLy4TfznEYXUPb8Xvh_4NBA6YI",
  authDomain: "clone-df2be.firebaseapp.com",
  projectId: "clone-df2be",
  storageBucket: "clone-df2be.appspot.com",
  messagingSenderId: "1088779216134",
  appId: "1:1088779216134:web:c3d23ab59d57d4f5c0ea87",
  measurementId: "G-YXGQW64111",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
