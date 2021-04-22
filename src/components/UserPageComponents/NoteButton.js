import React, { useState }from 'react'
import NoteForm from './NoteForm';

export default function NoteButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>siema</button>
                <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
                    dupa
                </NoteForm>
        </div>
    )
}
