import React from 'react';

import ShowHideWrapper from './UserPageComponents/ShowHideWrapper';

const SingleNoteComponent = ({ _id, body, onDelete }) => {


    return (
        <div>
            <button onClick={onDelete}>
                delete note SKURWYSYNU
            </button>
            <p>{_id}</p>
            <p>{body}</p>
        </div>
    )
}

export default SingleNoteComponent;
