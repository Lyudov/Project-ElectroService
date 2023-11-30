import React from "react";
import { useCookies } from "react-cookie";

function Logout() {
  const [, , removeCookie] = useCookies(["authToken"]);

  const handleLogout = () => {
    removeCookie("authToken", { path: "/" });

    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
