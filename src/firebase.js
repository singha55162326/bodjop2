import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqj_ZCKBJ2kT8qvHmdA2vWv6Pzt_vBViA",
  authDomain: "backendbodjop.firebaseapp.com",
  databaseURL: "https://backendbodjop-default-rtdb.firebaseio.com",
  projectId: "backendbodjop",
  storageBucket: "backendbodjop.appspot.com",
  messagingSenderId: "717971907998",
  appId: "1:717971907998:web:d6f3e0a3886a3beba4a28f",
  measurementId: "G-NKHJ7LRCLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};