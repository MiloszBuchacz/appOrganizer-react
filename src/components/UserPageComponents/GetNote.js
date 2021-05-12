import React, { useState } from "react";
import NoteForm from "./NoteForm";
import UpdateNote from './UpdateNote';
import '../Style/getNote.css';

export default function GetNote({ notes, getNote, updateNote, noteNameUpdate, noteBodyUpdate, noteIdUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOpen, setOpen] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);
  const [upadateOpen, setUpdateOpen] = useState(false);

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
        <button className="buttons" onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
        <NoteForm className="buttons-body" open={buttonOpen} onClose={() => setOpen(false)}>
          <p>{element._id}</p>
          <p>{element.body}</p>
        </NoteForm>
      </div>
    )
  })

  return (

    <div>
      <button className="get-note" onClick={() => setIsOpen(true)}>
        notes here
        </button>
      <NoteForm className="get-note" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="body" >
          <button onClick={() => setUpdateOpen(true)}>
            update Note
          </button>
          <NoteForm open={upadateOpen} onClose={() => setUpdateOpen(false)}>
            <UpdateNote 
              noteUpdate={updateNote}
              onSubmitName={noteNameUpdate}
              onSubmitBody={noteBodyUpdate}
              onIdSubmit={noteIdUpdate}
              />
          </NoteForm>
          <button onClick={twoInOne}>
            check note
          </button>
          <NoteForm open={checkOpen} onClose={() => setCheckOpen(false)}>
            {nameArr}
          </NoteForm>
        </div>
      </NoteForm>
    </div>
  );
}