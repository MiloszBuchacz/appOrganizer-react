import React, { useEffect, useState } from "react";

import { getNotes } from '../../api/notesService'
import ShowHideWrapper from "./ShowHideWrapper";

import '../Style/getNote.css';

const NotesView = () => {
  const [notes, setNotes] = useState([]);
  
  const nameArr = [];

  useEffect( async () => {
    setNotes(await getNotes());
  }, []);


  notes.forEach(element => {
    nameArr.push(
      <div>
        <button className="button" key={element.id}>{element.name}</button>
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
          {/*<ShowHideWrapper title="update note" >*/}
          {/*  <UpdateNote*/}
          {/*    noteUpdate={updateNote}*/}
          {/*    onSubmitName={noteNameUpdate}*/}
          {/*    onSubmitBody={noteBodyUpdate}*/}
          {/*    onIdSubmit={noteId}*/}
          {/*  />*/}
          {/*</ShowHideWrapper>*/}
          {/*<ShowHideWrapper title="delete note" >*/}
          {/*  <DeleteNote*/}
          {/*    noteDelete={deleteNote}*/}
          {/*    onIdSubmit={noteId}*/}
          {/*  />*/}
          {/*</ShowHideWrapper>*/}
          <ShowHideWrapper className="notes" title="my notes" >
            {nameArr}
          </ShowHideWrapper>
        </div>
      </ShowHideWrapper>
    </div>
  );
}

export default NotesView;
