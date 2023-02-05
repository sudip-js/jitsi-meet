import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0JIAtPqXQbXyHYEBPMF-N6X_ix1N7sIE",
  authDomain: "jitsi-meet-97916.firebaseapp.com",
  projectId: "jitsi-meet-97916",
  storageBucket: "jitsi-meet-97916.appspot.com",
  messagingSenderId: "1050157468195",
  appId: "1:1050157468195:web:e55f183baf6e6f22acff96",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
