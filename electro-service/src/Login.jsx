import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase/auth";
import styles from "./Login.Module.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      console.log("User logged in");
    } catch (error) {
      console.log("Error durin login:", error.message);
    }
  };

  return (
    <section className="login_section layout_padding">
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
