import React, { useState } from 'react';



export default function DeleteNote({noteData}) {
    const [id, setId] = useState("");
    return(
        <div>
            a weź to wypierdol
            tylko podaj ID:
            <input type="text" placeholder="masz je w Chceck ID cepie" value={id} onChange={(event) => setId(event.target.value)}/>
        </div>
    )
}