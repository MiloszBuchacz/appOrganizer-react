import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import { validate } from 'email-validator';

import addUser from '../api/userService';
import "./Style/loginScreen.css";
import "../index.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);

  const history = useHistory();

  const checkEmailValidation = () => {
    if (validate(email)) {
      setEmailCorrect(true);
    } else {
      setEmailCorrect(false);
    }
  }

  const onAddUser = async (e) => {
    e.preventDefault();
    checkEmailValidation();
    if (password === confirmPassword && password != "" && emailCorrect === true) {
      await addUser(userName, email, password);
      console.log(userName, password);
      history.push("/login");
    } else {
      setPasswordCorrect(false);
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
      <form>
        <p>Username</p>
        <input
          className="nameInput"
          type="text"
          value={userName}
          placeholder="Enter your name"
          onInput={(e) => setUserName(e.target.value)}
        />
        <p>Email</p>
        <input
          className={`emailInput ${emailCorrect === false ? "passwordInputIncorrect" : ""}`}
          type="text"
          value={email}
          placeholder="provide email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          className={`passwordInput ${passwordCorrect === false ? "passwordInputIncorrect" : ""}`}
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Confirm password</p>
        <input
          className={`passwordInput ${passwordCorrect === false ? "passwordInputIncorrect" : ""}`}
          type="password"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>
        <button className="submitButton" type="submit" onClick={onAddUser}>
          <span>
            Submit
              </span>
        </button>
        <div>

        </div>
      </form>
    </div>
  );
}

export default Register;
