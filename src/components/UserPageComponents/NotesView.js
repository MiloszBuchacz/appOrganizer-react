import React, { useEffect, useState } from "react";

import { deleteNote, getNotes } from '../../api/notesService'
import ShowHideWrapper from "./ShowHideWrapper";
import SingleNoteComponent from '../SingleNoteComponent';

import '../Style/getNote.css';

const NotesView = () => {
  const [notes, setNotes] = useState([]);

  useEffect(async () => {
    setNotes(await getNotes());
  }, []);

  const onDelete = async (noteId) => {
    const response = await deleteNote(noteId);
    console.log(response);
    if (response.status === 200) {
      setNotes(notes.filter(note => note._id !== noteId) )
    }
  }

  return (
    <div>
      <ShowHideWrapper className="get-note" title="notes here">
        <div className="body">
          {notes && notes.length > 0 && notes.map(note => {
            return (
              <>
                <SingleNoteComponent key={note._id} name={note.name} body={note.body} onDelete={() => onDelete(note._id)} />
              </>)
          })}
        </div>
      </ShowHideWrapper>
    </div>
  );
}

export default NotesView;
