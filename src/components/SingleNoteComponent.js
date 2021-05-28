import React from 'react';

import ShowHideWrapper from './UserPageComponents/ShowHideWrapper';

const SingleNoteComponent = ({_id, body}) => {


    return (
        <ShowHideWrapper className="buttons-body" title="body buttons">
            <p>{_id}</p>
            <p>{body}</p>
        </ShowHideWrapper>
    )
}

export default SingleNoteComponent;
