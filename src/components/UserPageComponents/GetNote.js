import React, { useState } from "react";
import NoteForm from "./NoteForm";
import '../Style/getNote.css';

export default function GetNote({ notes, getNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOpen, setOpen] = useState(false);
  //const [note, setNotes] = useState("");
  //const [name, setNames] = useState();
  //const [body, setBodys] = useState([]);

  const nameArr = [];
  const bodyArr = [];

  const gettingNote = (event) => {
    event.preventDefault();
    getNote(event);

    //setNotes(notes);

    // notes.forEach(element => {
    //   console.log(element);
    //   name.push([element.name])
      
    // });
    // console.log(name);

    // notes.map(element => {
    //   nameArr.push(element.name);
    // });
    // notes.map(element => {
    //   bodyArr.push(element.body[+1]);
    // })
    
    //setBodys(bodyArr);
    //setNames(nameArr);
    // console.log(name, body);
    // console.log(notes);

    

  }

  notes.forEach(element => {
    nameArr.push(  
    <div>
      <button onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
      <NoteForm open={buttonOpen} onClose={() => setOpen(false)}>
        huj xD  
      </NoteForm> 
    </div>
    )
  })


    return (

      <div>
        <button className="get-note" onClick={gettingNote} onDoubleClick={() => setIsOpen(true)}>
          Check your Notes
        </button>

        <NoteForm className="get-note" open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="body" >
            {nameArr}
          </div>
        </NoteForm>
      </div>
    );
  }

          {/* też chuj
          <ul>
            huj
            {note &&
              note.map((item) => {
                return <p >{setNames(item.name)}, {item.body}, {item._id}</p>;
              })}
          </ul> */}