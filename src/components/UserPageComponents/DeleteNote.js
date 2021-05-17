import React, { useState } from 'react';

export default function DeleteNote({ noteDelete, onIdSubmit }) {
    const [noteId, setNoteId] = useState("");

    const onFormSubmit = (e) =>{
        e.preventDefault();
        noteDelete(e);
        onIdSubmit(noteId);
        console.log(noteId);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                a weź to wypierdol
                tylko podaj ID:
                <input type="text" placeholder="masz je w Chceck ID cepie" value={noteId} onChange={(event) => setNoteId(event.target.value)} />
                <button type="submit" onDoubleClick={onFormSubmit}>duble click to save</button>
            </form>
        </div>
    )
}