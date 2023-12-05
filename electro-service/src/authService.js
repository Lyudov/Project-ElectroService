export const isAuthenticated = () => {
    const authToken = document.cookie.includes("authToken");
    return authToken;
};