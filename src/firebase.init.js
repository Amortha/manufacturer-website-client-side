import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

 apiKey: "AIzaSyAKKscBKm81lwJ2A_7maTakH7Nz0fBdVEM",
  authDomain: "keeway-7f9fb.firebaseapp.com",
  projectId: "keeway-7f9fb",
  storageBucket: "keeway-7f9fb.appspot.com",
  messagingSenderId: "406712791641",
  appId: "1:406712791641:web:fef7f80a8c9bc062b23748",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;