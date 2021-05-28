import React, { Component } from "react";

import axios from "axios";
import {Link} from 'react-router-dom';

import AddNoteForm from "./UserPageComponents/AddNoteForm";
import NotesView from './UserPageComponents/NotesView';

import "./Style/userPage.css";

const UserPage = () => {
  
    return (
      <div>
        <nav>
          <button className="main-page button">
            <span>
              <Link to="/" style={{ textDecoration: "none" }}>
                Main Page
                </Link>
            </span>
          </button>
        </nav>
        <h1>Welcome</h1>

          <AddNoteForm
            // className="note-form"
            // addNote={this.addNote}
            // onNameSubmit={(name) => this.setState({ name: name })}
            // onBodySubmit={(body) => this.setState({ body: body })}
          />

          <NotesView className="get-form"
            // updateNote={this.updateNote}
            // deleteNote={(id) => this.deleteNotes(id)}
            // getNote={this.getNote}
            // notes={this.state.notes}
            // noteId={(id) => console.log("gufno", id)}
            // noteNameUpdate={(name) => this.setState({ name: name })}
            // noteBodyUpdate={(body) => this.setState({ body: body })}
          />

      </div>
    );
  
}
export default UserPage;
