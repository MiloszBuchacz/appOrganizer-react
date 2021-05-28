import React, { useEffect, useState } from "react";
import ShowHideWrapper from "./ShowHideWrapper";
import UpdateNote from './UpdateNote';
import DeleteNote from './DeleteNote';
import '../Style/getNote.css';

export default function GetNote({ notes, getNote, updateNote, deleteNote, noteNameUpdate, noteBodyUpdate, noteId }) {
  const [buttonOpen, setOpen] = useState(false);

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
  // useEffect(() => {
  //   getNote();
  // });

  //window.onload = getNote();

  // window.onload = App({
  //   useEffect(() => {
      //window.onload = getNote();
  //   })
  // };

  //   return (
  //     notes.forEach(element => {
  //       nameArr.push(
  //         <div className="buttons-body" >
  //           <NoteForm className="single" title={element.name}>
  //             note id:
  //           <p className="not-elem-id" >{element._id}</p>
  //           note body:
  //           <p className="note-elem-body" >{element.body}</p>
  //           </NoteForm>
  //         </div>
  //       )
  //     })
  //   );
  // }



  // function App() {
  //   useEffect(() => {

  //     console.log("pobrałem")
  //   });}
  //App();

  //getNote();


  notes.forEach(element => {
    nameArr.push(
      <div>
        <button className="button" onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
        <ShowHideWrapper className="buttons-body" title="body buttons">
          <p>{element._id}</p>
          <p>{element.body}</p>
        </ShowHideWrapper>
      </div>
    )
  })

  return (
    <div>
      <ShowHideWrapper className="get-note" title="notes here" >
        <div className="body" >
          <ShowHideWrapper title="update note" >
            <UpdateNote
              noteUpdate={updateNote}
              onSubmitName={noteNameUpdate}
              onSubmitBody={noteBodyUpdate}
              onIdSubmit={noteId}
            />
          </ShowHideWrapper>
          <ShowHideWrapper className="" title="delete note" >
            <DeleteNote
              noteDelete={deleteNote}
              onIdSubmit={noteId}
            />
          </ShowHideWrapper>
          <ShowHideWrapper className="notes" title="my notes" >
            {nameArr}
          </ShowHideWrapper>
        </div>
      </ShowHideWrapper>
    </div>
  );
}