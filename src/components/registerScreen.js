import React, { Component } from "react";
import Axios from "axios";
import "./Style/registerScreen.css";
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
      <div className="Register">
        <button className="main-page button">
          <Link to="/" style={{ textDecoration: "none" }}>
            Main Page
          </Link>
        </button>
        <h1>Welcome {this.state.username}</h1>
        <form onSubmit={this.onFormSubmit}>
          <p>Username</p>
          <input
            type="text"
            value={this.state.username}
            placeholder="Enter your name"
            onChange={(e) => this.setState({ username: e.target.value })}
            />
          <p>Password</p>
          <input
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
