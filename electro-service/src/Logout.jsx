import React from "react";
import { useCookies } from "react-cookie";

function Logout() {
  const [cookies, removeCookie] = useCookies(["authToken"]);
  //   const history = useHistory();

  const handleLogout = () => {
    removeCookie("authToken");
    history.push("/");
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
