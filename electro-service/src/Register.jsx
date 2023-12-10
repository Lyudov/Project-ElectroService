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

  const [error, setError] = useState("");

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

  const isStrongPassword = (password) => {
    // Password validation, require a minimum of six characters, at least one digit, and one special character
    const passwordRegex =
      /^(?=.*[A-Za-z\d])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  // const isEmailRegistered = async (email) => {
  //   const usersRef = ref(getDatabase(), "users");
  //   const snapshot = await get(onValue(usersRef));

  //   if (snapshot.exists()) {
  //     const usersData = snapshot.val();
  //     return Object.values(usersData).some(
  //       (userData) => userData.email === email
  //     );
  //   }

  //   return false;
  // };

  const handleRegister = async () => {
    if (regData.password !== regData.confirmPassword) {
      console.error("Passwords do not match");
      setError("Passwords do not match");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regData.email)) {
      console.error("Invalid email format");
      setError("Invalid email format");
      return;
    }

    // if (await isEmailRegistered(regData.email)) {
    //   console.error("Email already registered");
    //   setError(
    //     "This email is already registered. Please use a different email."
    //   );
    //   return;
    // }

    if (!isStrongPassword(regData.password)) {
      console.error("Weak password");
      setError(
        "Password must consist of at least six characters, including one digit and one special character"
      );
      return;
    }

    try {
      const database = getDatabase();
      const usersRef = ref(database, "users");

      const newUserRef = push(usersRef);

      const generatedRegistrationToken = uuidv4();

      // const verificationToken = generateVerificationToken();

      set(newUserRef, {
        username: regData.username,
        email: regData.email,
        password: regData.password,
        registrationToken: generatedRegistrationToken,
      });

      const userId = newUserRef.key;

      set(newUserRef, {
        username: regData.username,
        email: regData.email,
        password: regData.password,
        userId: userId,
      });

      setCookie("registrationToken", generatedRegistrationToken, { path: "/" });
      setCookie("userId", userId, { path: "/" });

      console.log("User registered and data stored successfully");
    } catch (error) {
      console.error("Error during registration:", error.message);

      setError("An error occurred during registration");
    }
  };
  return (
    <section className="register_section layout_padding">
      <div className="error-message">{error && <p>{error}</p>}</div>
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
                {error && error.includes("Passwords do not match") && (
                  <p style={{ color: "red" }}>{error}</p>
                )}
                {error && error.includes("Weak password") && (
                  <p style={{ color: "red" }}>{error}</p>
                )}
              </div>
              <div className="d-flex-register ">
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
