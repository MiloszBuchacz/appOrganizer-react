import React, { useState } from "react";
import NoteForm from "./NoteForm";
import '../Style/getNote.css';

export default function GetNote() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <p></p>
      <button className="get-note" onClick={() => setIsOpen(true)}>
        Check your Notes
      </button>
      <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
          huj
      </NoteForm>
    </div>
  );
}
