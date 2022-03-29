import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYS_hGIgr82LIjAdaLbMVSTclkUEqqm24",
  authDomain: "react-crud-fc52d.firebaseapp.com",
  projectId: "react-crud-fc52d",
  storageBucket: "react-crud-fc52d.appspot.com",
  messagingSenderId: "836828687650",
  appId: "1:836828687650:web:48bae5809a62d40f38097b",
  measurementId: "G-0CLX42DXEZ"
};

// Initialize Firebase
//firestore config
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
