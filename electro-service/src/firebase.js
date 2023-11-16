
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDca94NjzMOvH1U5gn_RVYTIRUUFJC4QUQ",
    authDomain: "electroserviceproject.firebaseapp.com",
    databaseURL: "https://electroserviceproject-default-rtdb.firebaseio.com",
    projectId: "electroserviceproject",
    storageBucket: "electroserviceproject.appspot.com",
    messagingSenderId: "262792394744",
    appId: "1:262792394744:web:01c781a74207b184c0880d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
