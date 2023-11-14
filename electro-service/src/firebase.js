import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyDca94NjzMOvH1U5gn_RVYTIRUUFJC4QUQ",
    authDomain: "electroserviceproject.firebaseapp.com",
    projectId: "electroserviceproject",
    storageBucket: "electroserviceproject.appspot.com",
    messagingSenderId: "262792394744",
    appId: "1:262792394744:web:01c781a74207b184c0880d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);