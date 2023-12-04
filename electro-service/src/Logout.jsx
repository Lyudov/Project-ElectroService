import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [, , removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("authToken", { path: "/" });
    navigate("/");

    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
