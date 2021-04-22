import React from 'react'

export default function NoteForm({open, children, onClose}) {
    if (!open) return null
    return (
        <div>
            <button onClick={onClose}>close</button>
            {children}
        </div>
    )
}
