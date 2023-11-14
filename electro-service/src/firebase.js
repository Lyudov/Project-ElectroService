// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDca94NjzMOvH1U5gn_RVYTIRUUFJC4QUQ",
    authDomain: "electroserviceproject.firebaseapp.com",
    databaseURL: "https://electroserviceproject-default-rtdb.firebaseio.com",
    projectId: "electroserviceproject",
    storageBucket: "electroserviceproject.appspot.com",
    messagingSenderId: "262792394744",
    appId: "1:262792394744:web:01c781a74207b184c0880d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);