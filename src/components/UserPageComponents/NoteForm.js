import React from "react";

export default function NoteForm({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div>
      {children}
      <button onClick={onClose} style={{marginTop: '450px', marginLeft: "50px"}}>close</button>
    </div>
  );
}
