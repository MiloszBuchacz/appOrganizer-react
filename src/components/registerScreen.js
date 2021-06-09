import React, { Component } from "react";
import Axios from "axios";
import "./Style/loginScreen.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  async onFormSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "http://localhost:8080/api/auth/signup",
        { username: this.state.username, password: this.state.password }
      );
      console.log(data);
      this.props.history.push("/user");
    } catch (err) {
      console.log(`Axios request failed: ${err}`);
    }
  }

  render() {
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
        <h1>Welcome {this.state.username}</h1>
        <form onSubmit={this.onFormSubmit}>
          <p>Username</p>
          <input
            className="nameInput"
            type="text"
            value={this.state.username}
            placeholder="Enter your name"
            onInput={(e) => this.setState({ username: e.target.value })}
          />
          <p>Password</p>
          <input
            className="passwordInput"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
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
}

export default Register;
