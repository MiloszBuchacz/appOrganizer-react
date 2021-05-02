import axios from "axios";
import React, { Component } from "react";
import NoteButton from "./UserPageComponents/NoteButton";
import "./Style/userPage.css";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      name: "",
      body: "",
      notes: [],
    };
  }
  componentDidMount() {
    this.setState({ notes: [{ name: "" }] });
  }

  onClick(text) {
    this.setState({
      notes: [...this.state.notes, { id: "id", name: text }]
    }, console.log(text)
    );
  }

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
        <NoteButton onFormSubmit={(name) => this.setState({name: name})} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default UserPage;

{
  {/* <div>
      <button
        type="button"
        style={{ marginTop: "160px", marginLeft: "200px" }}
        onClick={this.getNote}
      >
        siemanko
      </button>
    </div> */}
  /* <form onSubmit={this.addNote}>
          <h1>Welcome</h1>
          Make a Note
          <input
            type="text"
            value={this.state.name}
            placeholder="Enter your name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          Body:
          <input
            className="body"
            type="text"
            value={this.state.body}
            placeholder="Enter your name"
            onChange={(e) => this.setState({ body: e.target.value })}
          />
          <button className="button" type="submit">
            zapisz
          </button>
          <div>
            <button
              type="button"
              style={{ marginTop: "160px", marginLeft: "200px" }}
              onClick={this.getNote}
            >
              siemanko
            </button>
          </div>
        <div>         
            <ul>
              {this.state.notes && this.state.notes.map((item) => {
                return (<p key={item.id}>{item.name}</p>)
              })}
            </ul>
        </div>
        </form> */
}

//exporting props from button

//{
  /* <NoteButton onClick={this.onClick} />
<ul>
  {this.state.notes &&
    this.state.notes.map((item) => {
      return <p key={item.id}>{item.name}</p>;
    })}
</ul> */
// }


// <div>
// <ul>
//   {this.state.notes &&
//     this.state.notes.map((item) => {
//       return <p key={item.id}>{item.name}</p>;
//     })}
// </ul>
// </div>