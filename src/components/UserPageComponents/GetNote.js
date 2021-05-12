import React, { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import '../Style/getNote.css';

export default function GetNote({ notes, getNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOpen, setOpen] = useState(false);
  const [updateOpen, setUOpen] = useState(false);
  //const [note, setNotes] = useState("");
  //const [name, setNames] = useState();
  //const [body, setBodys] = useState([]);

  const nameArr = [];
  const bodyArr = [];



  const gettingNote = (event) => {
    event.preventDefault();
    getNote(event);
    console.log("pobrałem")


  }

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

    

    notes.forEach(element => {
      nameArr.push(  
      <div>
        <button  className="buttons" onClick={() => setOpen(true)} key={element.id}>{element.name}</button>
        <NoteForm className="buttons-body" open={buttonOpen} onClose={() => setOpen(false)}>
          <p>{element._id}</p>
          <p>{element.body}</p>
        </NoteForm> 
      </div>
      )
    })
    const twoInOne = (e) => {
        e.preventDefault();
        setUOpen(true);
        gettingNote(e);
    }


    return (

      <div>
        <button className="get-note" onClick={() => setIsOpen(true)}>
          notes here
        </button>
        <NoteForm className="get-note" open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="body" >
            <button  onClick={twoInOne}>
              check
            </button>
              <NoteForm open={updateOpen} onClose={() => setUOpen(false)} >
                {nameArr}
              </NoteForm>
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


        //   <button onClick={() => setUOpen(true)}>
        //   update note
        // </button>
        // <NoteForm open={updateOpen} onClose={() => setUOpen(false)}>
        //   <div>
        //     siemano
        //   </div>
        // </NoteForm>