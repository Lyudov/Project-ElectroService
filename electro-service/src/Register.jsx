import { getDatabase, set, push, ref } from "firebase/database";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Register.Module.css";

function Register() {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [cookies, setCookie] = useCookies(["registrationToken"]);

  // const generateVerificationToken = () => {
  //   return uuidv4();
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    if (regData.password !== regData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const database = getDatabase();
    const usersRef = ref(database, "users");

    const newUserRef = push(usersRef);

    const generatedRegistrationToken = uuidv4();

    // const verificationToken = generateVerificationToken();

    set(newUserRef, {
      username: regData.username,
      email: regData.email,
      password: regData.password,
    });

    setCookie("registrationToken", generatedRegistrationToken, { path: "/" });
    console.log("User registered and data stored successfully");
  };
  return (
    <section className="register_section layout_padding">
      <div className="container ">
        <div className="heading_container">
          <h2>Register </h2>
          <img src="images/plug.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form action="">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex-login ">
                <button type="button" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
