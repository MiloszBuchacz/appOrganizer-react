import React, { useState } from "react";
import NoteForm from "./NoteForm";
import "../Style/noteForm.css";

export default function NoteButton({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(name);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button className="add-note" onClick={() => setIsOpen(true)}>
        Make a Note
      </button>
      <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={onSubmit}>
          Name the Note:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
      </NoteForm>
    </div>
  );
}
