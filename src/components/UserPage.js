import axios from "axios";
import React, { Component } from "react";
import AddNoteForm from "./UserPageComponents/AddNoteForm";
import GetNote from './UserPageComponents/GetNote';
import UpdateNote from './UserPageComponents/UpdateNote';
import "./Style/userPage.css";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.state = {
      name: "",
      body: "",
      id: "",
      notes: [],
    };
  }

  async addNote(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/notes",
        { id: this.state.id, name: this.state.name, body: this.state.body },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("note Added!");
    } catch (err) {
      console.log(err);
    }
  }

  async deleteNote(e) {
    try {
      await axios.delete(`http://localhost:8080/api/notes/${this.state.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )
      console.log("note deleted.")
    }
    catch (err) {
      console.log(err);
    }
  }

  async getNote(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:8080/api/notes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      this.setState({ ...this.state, notes: data });
      // console.log(data);
      // console.log(this.state.notes);
    } catch (err) {
      console.log(err);
    }
  }

  async updateNote(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/notes/${this.state.id}`,
        { name: this.state.name, body: this.state.body }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log('duppka')
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div className="buttons">
          <AddNoteForm
            className="note-form"
            addNote={this.addNote}
            onNameSubmit={(name) => this.setState({ name: name })}
            onBodySubmit={(body) => this.setState({ body: body })}
          />

          <GetNote className="get-form"
            updateNote={this.updateNote}
            noteDelete={this.deleteNote}
            getNote={this.getNote}
            notes={this.state.notes}
            noteId={(id) => this.setState({ id: id })}
            noteNameUpdate={(name) => this.setState({ name: name })}
            noteBodyUpdate={(body) => this.setState({ body: body })}
          />

        </div>
      </div>
    );
  }
}
export default UserPage;