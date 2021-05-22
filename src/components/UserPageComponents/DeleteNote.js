import React, { useState } from 'react';

export default function DeleteNote({ noteDelete, onIdSubmit }) {
    const [noteId, setNoteId] = useState("");

    const onFormSubmit = (e) =>{
        e.preventDefault();
        onIdSubmit(noteId);
        noteDelete(noteId);
        console.log(noteId);
    }

    return (
        <div>
            <form>
                a weź to wypierdol
                tylko podaj ID:
                <input type="text" placeholder="masz je w Chceck ID cepie" value={noteId} onChange={(event) => setNoteId(event.target.value)} />
                <button onClick={(e) => onFormSubmit(e)}>duble click to save</button>
            </form>
        </div>
    )
}