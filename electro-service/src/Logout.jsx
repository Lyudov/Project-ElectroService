import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
  // const [, , removeCookie] = useCookies(["authToken"]);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   removeCookie("authToken", { path: "/" });
  //   navigate("/");

  //   window.location.reload();
  // };

  // return <button onClick={handleLogout}>Logout</button>;

  const [, , removeCookie] = useCookies(["authToken", "registrationToken"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    const cookieNames = ["authToken", "registrationToken", "userId"];

    cookieNames.forEach((cookieName) => {
      removeCookie(cookieName, { path: "/" });
    });

    const cookieChangeEvent = new Event("onCookieChange");
    window.dispatchEvent(cookieChangeEvent);

    navigate("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
