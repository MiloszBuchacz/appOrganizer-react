import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

import addUser from '../api/userService';
import "./Style/loginScreen.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("email jest taki");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const onAddUser = async (e) => {
    e.preventDefault();
    await addUser(userName, email, password);
    console.log(userName, password);
    history.push("/login");
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
      <form>
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
          <button className="button" type="submit" onClick={onAddUser}>
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
