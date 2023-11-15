import { getDatabase, set, push, ref, onValue } from "firebase/database";
import { useState } from "react";

function Register() {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const writeToDatabase = () => {
    const database = getDatabase();
    const regRef = ref(database, "regData");

    push(regRef, regData);

    setRegData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
                  value={regData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={regData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={regData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={regData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex-login ">
                <button type="button" onClick={writeToDatabase}>
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
