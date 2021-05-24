import React, { useEffect, useState } from "react";
import NoteForm from "./ShowHideWrapper";
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

  // const gettingNote = (event) => {
  //   //event.preventDefault();
  //   getNote(event);
  //   console.log("pobrałem")
  // }

  // const twoInOne = (e) => {
  //   e.preventDefault();
  //   setCheckOpen(true);
  //   gettingNote(e);
  // }
useEffect(() => {
  getNote();
});

notes.forEach(element => {
  nameArr.push(
    <div className="buttons-body" >
      <NoteForm className="single" title={element.name}>
        note id:
        <p className="not-elem-id" >{element._id}</p>
        note body:
        <p className="note-elem-body" >{element.body}</p>
      </NoteForm>
    </div>
  )
})

  // notes.forEach(element => {
  //   nameArr.push(
  //     <div>
  //       <button className="button" onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
  //       <NoteForm className="buttons-body" title="body buttons">
  //         <p>{element._id}</p>
  //         <p>{element.body}</p>
  //       </NoteForm>
  //     </div>
  //   )
  // })

  return (
    <div>
      {/* <button className="button" >
        <span>
          szalom
        </span>
      </button> */}
      <NoteForm className="get-note" title="notes here" >
        <div className="body" >

          <NoteForm title="update note" >
            <UpdateNote
              noteUpdate={updateNote}
              onSubmitName={noteNameUpdate}
              onSubmitBody={noteBodyUpdate}
              onIdSubmit={noteId}
            />
          </NoteForm>
          <NoteForm className="" title="delete note" >
            <DeleteNote
              noteDelete={deleteNote}
              onIdSubmit={noteId}
            />
          </NoteForm>
          <NoteForm className="notes" title="my notes">
            {nameArr}
          </NoteForm>
        </div>
      </NoteForm>
    </div>
  );
}