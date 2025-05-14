import "./Login.css";
import logo from "../../../assets/movie-app (2).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwoed, setPasswoed] = useState("");

  return (
    <div className="login">
      <Link to="/movie-clone">
        <img src={logo} alt="" className="login-logo" />
      </Link>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwoed}
            onChange={(e) => setPasswoed(e.target.value)}
          />
          <button onClick={(e) => e.preventDefault()}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New To Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already Have Account?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
