// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth(); // Initialize Firebase Auth instance

// const fetchUserData = async () => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             unsubscribe();

//             if (user) {
//                 // const userId = user.uid;
//                 resolve({
//                     userId: user.userId,
//                     email: user.email,
//                     // Add more user details as needed
//                 });
//             } else {
//                 resolve(null);
//             }
//         }, reject);
//     });
// };

// export const isAuthenticated = async () => {
//     const authToken = document.cookie.includes("authToken");
//     const user = await fetchUserData();
//     return { isAuth: authToken, user };
// };

export const isAuthenticated = () => {
  const authToken = document.cookie.includes("authToken");
  return authToken;
};

// export const getCurrentUserId = () => {

//     const userId = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('userId'))
//         .split('=')[1];
//     return userId;

// };

// import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, get } from "firebase/database";
// import { db } from "./firebase";

// const isAuthenticated = () => {
//     const [authState, setAuthState] = useState({
//         isAuthenticated: false,
//         user: null,
//     });

//     useEffect(() => {
//         const auth = getAuth();
//         const unsubscribe = onAuthStateChanged(auth, async (user) => {
//             if (user) {

//                 const userRef = ref(db, `users/${user.uid}`);
//                 try {
//                     const snapshot = await get(userRef);
//                     const userData = snapshot.val();

//                     setAuthState({
//                         isAuthenticated: true,
//                         user: {
//                             userId: user.userId,
//                             email: user.email,
//                             username: userData.username,

//                         },
//                     });
//                 } catch (error) {
//                     console.error("Error fetching user data:", error.message);
//                     setAuthState({
//                         isAuthenticated: false,
//                         user: null,
//                     });
//                 }
//             } else {

//                 setAuthState({
//                     isAuthenticated: false,
//                     user: null,
//                 });
//             }
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     return authState;
// };

// export { isAuthenticated };

export const getCookie = (name) => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {});

  return cookies[name];
};
