import React, {useEffect, useState} from "react";

import {getNotes} from '../../api/notesService'
import ShowHideWrapper from "./ShowHideWrapper";
import SingleNoteComponent from '../SingleNoteComponent';

import '../Style/getNote.css';

const NotesView = () => {
    const [notes, setNotes] = useState([]);

    useEffect(async () => {
        setNotes(await getNotes());
    }, []);

    return (
        <div>
            <ShowHideWrapper className="get-note" title="notes here">
                <div className="body">
                    <ShowHideWrapper className="notes" title="my notes">
                        {notes.map(note => {
                            <SingleNoteComponent _id={note._id} body={note.body}/>
                        })}
                    </ShowHideWrapper>
                </div>
            </ShowHideWrapper>
        </div>
    );
}

export default NotesView;
