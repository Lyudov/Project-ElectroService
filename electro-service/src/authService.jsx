export const isAuthenticated = () => {
  const authToken = document.cookie.includes("authToken");
  return authToken;
};

export const getCookie = (name) => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {});

  return cookies[name];
};
