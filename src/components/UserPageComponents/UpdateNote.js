import React, { useState } from 'react';

export default function UpdateNote({ noteUpdate, onSubmitBody, onSubmitName, onIdSubmit }) {
  const [noteId, setNoteId] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    onSubmitName(name);
    onSubmitBody(body);
    onIdSubmit(noteId);
    console.log(onIdSubmit)
  }

  return (
    <div className="body">
      <form onChange={submitForm}>
        copy note ID here:
      <input
          type="text"
          placeholder="provide ID"
          value={noteId}
          onChange={(event) => setNoteId(event.target.value)}
        />
        what is new note name?
      <input
          type="text"
          placeholder="provide new name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        what is new note context?
      <input
          type="text"
          placeholder="provide new context"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button type="submit" onClick={noteUpdate}>
          save
      </button>
      </form>
    </div>
  );
}
