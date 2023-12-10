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