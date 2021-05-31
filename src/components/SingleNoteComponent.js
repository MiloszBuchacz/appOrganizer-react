import React from 'react';

import './Style/singleNote.css'

const SingleNoteComponent = ({ name, body, onDelete }) => {


    return (
        <div className="note-content">
            <div className="single-body">
                <button onClick={onDelete} className="note-button">
                    delete
                </button>
                <div className="note-header">
                    <div className="note-name-wrapper">
                        <p className="name">{name}</p>
                    </div>
                </div>
                <textarea
                    rows="10"
                    cols="50"
                    className="note-body">
                    {body}
                </textarea>
            </div>
        </div>

    )
}

export default SingleNoteComponent;
