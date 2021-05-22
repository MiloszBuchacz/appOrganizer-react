import React, { useState } from "react";
import NoteForm from "./NoteForm";
import UpdateNote from './UpdateNote';
import DeleteNote from './DeleteNote';
import '../Style/getNote.css';

export default function GetNote({ notes, getNote, updateNote, deleteNote, noteNameUpdate, noteBodyUpdate, noteId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOpen, setOpen] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);
  const [upadateOpen, setUpdateOpen] = useState(false);
  const [delNote, setDeleteOpen] = useState(false);

  const nameArr = [];

  const gettingNote = (event) => {
    event.preventDefault();
    getNote(event);
    console.log("pobrałem")
  }

  const twoInOne = (e) => {
    e.preventDefault();
    setCheckOpen(true);
    gettingNote(e);
  }

  notes.forEach(element => {
    nameArr.push(
      <div>
        <button className="button" onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
        <NoteForm className="buttons-body" open={buttonOpen} onClose={() => setOpen(false)}>
          <p>{element._id}</p>
          <p>{element.body}</p>
        </NoteForm>
      </div>
    )
  })

  return (
    <div>
      <button className="button" onClick={() => setIsOpen(true)}>
        <span>
          notes here
        </span>
      </button>
      <NoteForm className="get-note" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="body" >
          <button onClick={() => setUpdateOpen(true)}>
            update Note
          </button>
          <button onClick={() => setDeleteOpen(true)}>
            delete it! NOW!
          </button>
          <button onClick={twoInOne}>
            check note
          </button>
          <NoteForm open={upadateOpen} onClose={() => setUpdateOpen(false)}>
            <UpdateNote
              noteUpdate={updateNote}
              onSubmitName={noteNameUpdate}
              onSubmitBody={noteBodyUpdate}
              onIdSubmit={noteId}
            />
          </NoteForm>
          <NoteForm className="" open={delNote} onClose={() => setDeleteOpen(false)} >
            <DeleteNote
              noteDelete={deleteNote}
              onIdSubmit={noteId}
            />
          </NoteForm>
          <NoteForm open={checkOpen} onClose={() => setCheckOpen(false)}>
            {nameArr}
          </NoteForm>
        </div>
        <NoteForm />
      </NoteForm>
    </div>
  );
}