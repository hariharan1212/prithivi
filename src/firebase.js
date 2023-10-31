// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyTAY6me97_MO5unuqhbPLuABv4w_K0ic",
    authDomain: "filmhook-mediaapps.firebaseapp.com",
    projectId: "filmhook-mediaapps",
    storageBucket: "filmhook-mediaapps.appspot.com",
    messagingSenderId: "159646328352",
    appId: "1:159646328352:web:50540cdbcb46b587e6be45",
    measurementId: "G-RJTF4RPEN5"
       };
// Initialize Firebase 
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;