import React, { useState } from "react";
import NoteForm from "./NoteForm";
import "../Style/addNoteForm.css";

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
    <div className="add-note">
      <button onClick={() => setIsOpen(true)}>
        Make a Note
      </button>
      <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
        <form onChange={onSubmit}>
          <input
            placeholder="Name the Note"
            className="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <form onChange={onSubmit}>
          <input
            placeholder="enter Note"
            className="body"
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </form>
        <button className="save-button" onClick={addingNote}>save</button>
      </NoteForm>
    </div>
  );
}
