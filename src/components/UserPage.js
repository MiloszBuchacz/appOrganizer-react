import axios from "axios";
import React, { Component } from "react";
import AddNoteForm from "./UserPageComponents/AddNoteForm";
import GetNote from './UserPageComponents/GetNote';
import "./Style/userPage.css";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.getNote = this.getNote.bind(this);
    //this.onClick = this.onClick.bind(this);

    this.state = {
      name: "",
      body: "",
      notes: [],
    };
  }
  // componentDidMount() {
  //   this.setState({ notes: [{ name: "" }] });
  // }

  // onClick(text) {
  //   this.setState({
  //     notes: [...this.state.notes, { id: "id", name: text }]
  //   }, console.log(text)
  //   );
  // }
  

  async addNote(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/notes",
        { name: this.state.name, body: this.state.body },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("note Added!");
    } catch (err) {
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
      console.log(data);
      console.log(this.state.notes);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div className="buttons">
          <AddNoteForm
            className="note-form"
            addNote={this.addNote}
            onNameSubmit={(name) => this.setState({name: name})}
            onBodySubmit={(body) => this.setState({body: body})}
          /> 
          <GetNote className="get-form"/>
        </div>
        <div>

        </div>

      </div>
    );
  }
}
export default UserPage;

// <div>
// <ul>
//   {this.state.notes &&
//     this.state.notes.map((item) => {
//       return <p key={item.id}>{item.name}</p>;
//     })}
// </ul>
// </div>