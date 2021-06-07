import React, { useState } from "react";

import { addNote } from '../../api/notesService';

import "../../components/Style/loginScreen.css";

const AddNote = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const onAdding = async () => {
    const response = await addNote(name, body);
    if(response && response.status){

    }
    return;
  };

  return (
    <div className="add-note">

      {/* <ShowHideWrapper title="add note"> */}
        <form>
          <p>Name the Note</p>
          <input
            className="inputName"
            placeholder="Name the Note"
            className="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <form>
          <p>note body:</p>
          <input
            className="inputPassword"
            placeholder="enter Note"
            className="body"
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </form>
        <button className="save-button" onClick={onAdding}>save</button>
      {/* </ShowHideWrapper> */}
    </div>
  );
}
export default AddNote