import React from "react";

export default function NoteForm({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div>
      {children}
      <button onClick={onClose} style={{marginTop: '350px', marginLeft: "140px"}}>close</button>
    </div>
  );
}
