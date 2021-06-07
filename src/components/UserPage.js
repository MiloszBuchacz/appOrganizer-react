import React from "react";

import { Link } from 'react-router-dom';

import "./Style/userPage.css";

const UserPage = () => {
  return (
    <div className="main-div">
      <nav>
        <button className="main-page button">
          <span>
            <Link to="/" style={{ textDecoration: "none" }}>
              Main Page
              </Link>
          </span>
        </button>
      </nav>
      <h1>Welcome {localStorage.getItem("name")}</h1>
      <div className="user-buttons">
        <nav>
          <button className="add-page-button">
            <span>
              <Link to='/notes/add'>Add Note</Link>
            </span>
          </button>
          <button className="notes-page-button">
            <span>
              <Link to='/notes'>notes here</Link>
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
export default UserPage;
