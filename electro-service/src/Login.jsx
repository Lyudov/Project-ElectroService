import { useState } from "react";
import { useCookies } from "react-cookie";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "./Login.Module.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies(["authToken"]);

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
      const usersRef = ref(getDatabase(), "users");

      onValue(usersRef, (snapshot) => {
        const usersData = snapshot.val();

        const user = Object.values(usersData).find(
          (userData) =>
            userData.email === loginData.email &&
            userData.password === loginData.password
        );

        const generatedToken =
          "zdAJvUOo9U6Cw19V4Z3z1I9CW4guMM6zrt8eifxy8tbzEg6QHkeX0Uve6OBOCcvv";

        //       if (user && user.verificationToken === cookies.registrationToken) {
        //         console.log("User logged in:", user);
        //         const generatedAuthToken = "yourGeneratedAuthToken";
        //         setCookie("authToken", generatedAuthToken, { path: "/" });
        //       } else {
        //         console.log("Invalid credentials or not verified");
        //       }
        //     });
        //   } catch (error) {
        //     console.error("Error during login:", error.message);
        //   }
        // };

        //       if (user) {
        //         console.log("User logged in:", user);
        //         setCookie("authToken", generatedToken, { path: "/" });
        //       } else {
        //         console.log("Invalid credentials");
        //       }
        //     });
        //   } catch (error) {
        //     console.error("Error during login:", error.message);
        //   }
        // };

        if (user) {
          console.log("User logged in:", user);
          // Log generated token before setting the cookie
          console.log("Generated Auth Token:", generatedToken);

          setCookie("authToken", generatedToken, { path: "/" });
        } else {
          console.log("Invalid credentials");
        }
      });
    } catch (error) {
      console.error("Error during login:", error.message);
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
