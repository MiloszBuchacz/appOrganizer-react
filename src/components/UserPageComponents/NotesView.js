import React, { useEffect, useState } from "react";

import { deleteNote, getNotes, updateNote } from '../../api/notesService';
import { Link } from 'react-router-dom';
import SingleNoteComponent from '../SingleNoteComponent';

import '../Style/getNote.css';

const NotesView = () => {
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      setNotes(await getNotes());
    }
    fetchMyAPI()
  }, [])

  const onDelete = async (noteId) => {
    const response = await deleteNote(noteId);
    console.log(response);
    if (response.status === 200) {
      setNotes(notes.filter(note => note._id !== noteId))
    }
  }

  const onUpdate = async (noteId, name, body) => {
    const response = await updateNote(noteId, body, name);
    console.log(response);
  }

  return (
    <div>
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
      <div className="body">
        {notes && notes.length > 0 && notes.map(note => {
          return (
            <>
              <SingleNoteComponent
                name={note.name}
                body={note.body}
                onUpdate={onUpdate}
                id={note._id}
                onDelete={() => onDelete(note._id)} />
            </>)
        })}
      </div>
    </div>
  );
}

export default NotesView;
