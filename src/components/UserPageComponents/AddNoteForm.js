import React, { useState } from "react";

import { addNote } from '../../api/notesService';
import { Link } from 'react-router-dom';

import "../Style/addNote.css";

const AddNoteForm = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const onAdding = async () => {
    const response = await addNote(name, body);
    if (response && response.status) {}
    return;
  };

  return (
    <div className="add-note">
      <button className="main-page button">
        <span>
          <Link to='/'>main page</Link>
        </span>
      </button>
      <button className="user-page button">
        <span>
          <Link to='/user'>user panel</Link>
        </span>
      </button>
      <div className="note-content">
        <div className="add-body">
          <div className="note-header">
            <div className="note-name-wrapper">
              <input
                className="inputName"
                placeholder="Title"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <button className="save-button" onClick={onAdding}><span>save</span></button>
            </div>
          </div>
          <textarea
            rows="4"
            cols="50"
            className="inputPassword"
            placeholder="enter Note"
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default AddNoteForm
