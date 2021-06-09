import React, { useEffect, useState } from 'react';

import './Style/singleNote.css'

const SingleNoteComponent = ({ name, body, onDelete, onUpdate, id }) => {
    const [edit, setEdit] = useState(false);
    const [bodyUpdate, setBodyupdate] = useState("");

    // setBodyupdate(body)

        useEffect(() => {
            setBodyupdate(body);
        }, [])
    const onSubmit = () => {
        onUpdate(id, name, body);
        console.log(bodyUpdate);
        setEdit(false);
    }

    if (edit === true) {
        return (
            <div className="note-content">
                <div className="single-body">
                    <div className="service-buttons">
                        <button className="edit-button" >
                            <span onClick={onSubmit}>
                                save
                            </span>
                        </button>
                        <button onClick={onDelete} className="note-button">
                            <span>
                                Delete
                            </span>
                        </button>
                    </div>
                    <div className="note-header">
                        <div className="note-name-wrapper">
                            <p className="name">{name}</p>
                        </div>
                    </div>
                    <textarea
                        rows="10"
                        cols="50"
                        className="note-body"
                        value={bodyUpdate}
                        onChange={(e) => setBodyupdate(e.target.value)}
                    >
                        {bodyUpdate}
                    </textarea>
                </div>
            </div>
        )
    } else {
        return (
            <div className="note-content">
                <div className="single-body">
                    <div className="service-buttons">
                        <button className="edit-button" onClick={() => setEdit(true)}>
                            <span>
                                edit
                            </span>
                        </button>
                        <button onClick={onDelete} className="note-button">
                            <span>
                                Delete
                            </span>
                        </button>
                    </div>
                    <div className="note-header">
                        <div className="note-name-wrapper">
                            <p className="name">{name}</p>
                        </div>
                    </div>
                    <textarea
                        readOnly
                        rows="10"
                        cols="50"
                        className="note-body">
                        {body}
                    </textarea>
                </div>
            </div>
        )
    }
}

export default SingleNoteComponent;
