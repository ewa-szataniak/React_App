import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb4AZNfuEHjptleuXBBQIOZAYxgF_2O5M",
  authDomain: "reacttodoapp-41661.firebaseapp.com",
  projectId: "reacttodoapp-41661",
  storageBucket: "reacttodoapp-41661.appspot.com",
  messagingSenderId: "278655548183",
  appId: "1:278655548183:web:835189a4a89c7d0de79552",
  measurementId: "G-SDKD3ZZ6LZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
