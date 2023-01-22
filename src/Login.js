import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { StateContext } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isRegister, setIsRegister] = useState(false);

  const { state, dispatch } = useContext(StateContext);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((auth) => {
        console.log(auth)
        dispatch({ type: "SET_USER", payload: { email: userData.email, name: userData.name, password: userData.password } })
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((auth) => {
        dispatch({ type: "SET_USER", payload: { email: userData.email, name: userData.name, password: userData.password } })
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">

      </Link>

      <div className="login_container">
        <h1>{isRegister ? "Create an account" : "Sign-in"}</h1>
        <form>
          {
            isRegister ? (
              <div>
                <h5>Name</h5>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
            ) : ("")
          }
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />

          <button type="submit" onClick={isRegister ? register : signIn} className="login_signInButton">
            {isRegister ? "Create an account" : "Sign In"}
          </button>
        </form>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia.
        </p>
        <p onClick={() => setIsRegister(!isRegister)} className="linkText">{isRegister ? "Already have an account? Sign in" : "New here? Register now"}</p>
      </div>
    </div>
  );
}

export default Login;
