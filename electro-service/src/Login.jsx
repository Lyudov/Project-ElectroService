import { useState } from "react";
import { useCookies } from "react-cookie";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Login.Module.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usersRef = ref(getDatabase(), "users");

      onValue(usersRef, (snapshot) => {
        const usersData = snapshot.val();

        const user = Object.values(usersData).find(
          (userData) =>
            userData.email === loginData.email &&
            userData.password === loginData.password
        );

        if (user) {
          console.log("User logged in:", user);

          const generatedToken = uuidv4();

          console.log("Generated Auth Token:", generatedToken);

          setCookie("authToken", generatedToken, { path: "/" });
          setCookie("userId", user.userId, { path: "/" });
          window.dispatchEvent(new Event("onCookieChange"));
          navigate("/");
        } else {
          console.log("Invalid credentials");
          setError("Invalid email or password");
        }
      });
    } catch (error) {
      console.error("Error during login:", error.message);
      setError("An error occurred during login");
    }
  };

  return (
    <section className="login_section layout_padding">
      <div className="error-message">{error && <p>{error}</p>}</div>
      <div className="border-container">
        <div className="container ">
          <div className="heading_container">
            <h2>Log In </h2>
            <img src="images/plug.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form onSubmit={handleLogin}>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="password"
                    value={loginData.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex-login ">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
