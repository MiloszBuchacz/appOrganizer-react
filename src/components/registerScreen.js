import React, { useState } from "react";
import Axios from "axios";
import "./Style/loginScreen.css";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "http://localhost:8080/api/auth/signup",
        { userName, email, password }
      );
      console.log(data);
      history.push("/user");
    } catch (err) {
      console.log(`Axios request failed: ${err}`);
    }
  }

  return (
    <div className="body">
      <nav>
        <button className="main-page button">
          <span>
            <Link to="/" style={{ textDecoration: "none" }}>
              Main Page
                </Link>
          </span>
        </button>
      </nav>
      <h1>Welcome {userName}</h1>
      <form onSubmit={onFormSubmit}>
        <p>Username</p>
        <input
          className="nameInput"
          type="text"
          value={userName}
          placeholder="Enter your name"
          onInput={(e) => setUserName(e.target.value)}
        />
        <p>Password</p>
        <input
          className="passwordInput"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="button" type="submit">
            <span>
              Submit
              </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
