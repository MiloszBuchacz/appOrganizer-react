import React from 'react';

import './Style/singleNote.css'

const SingleNoteComponent = ({ name, body, onDelete }) => {


    return (
        <div className="note-content">
            <div className="note-header">
                <div className="note-name-wrapper">
                    <p className="id">{name}</p>
                </div>
                <button onClick={onDelete} className="note-button">
                delete
            </button>
            </div>
                <p className="body">{body}</p>
            </div>

    )
}

export default SingleNoteComponent;
