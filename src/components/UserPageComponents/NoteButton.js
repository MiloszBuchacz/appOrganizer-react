import React, { useState } from "react";
import NoteForm from "./NoteForm";
import "../Style/noteButton.css";

export default function NoteButton({ onNameSubmit, onBodySubmit, addNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const addingNote = (event) => {
    event.preventDefault();
    addNote(event);

  }

  const onSubmit = (event) => {
    event.preventDefault();

    onNameSubmit(name);
    onBodySubmit(body);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button className="add-note" onClick={() => setIsOpen(true)}>
        Make a Note
      </button>
      <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
        <form onChange={onSubmit}>
          <p>Name the Note:</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <form style={{ marginTop: "100px" }} onChange={onSubmit}>
          <p className="bodyP">add note</p>
          <input
            className="body"
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </form>
        <button onClick={addingNote}>save</button>
      </NoteForm>
    </div>
  );
}
