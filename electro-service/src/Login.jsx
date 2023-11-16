import styles from "./Login.Module.css";

function Login() {
  return (
    <section className="login_section layout_padding">
      <div className="container ">
        <div className="heading_container">
          <h2>Log In </h2>
          <img src="images/plug.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <form action="">
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Password" />
              </div>
              <div className="d-flex-login ">
                <button>Logi In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
