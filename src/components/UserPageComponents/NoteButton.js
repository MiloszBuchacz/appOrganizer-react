// import React, { useState }from 'react'
// import NoteForm from './NoteForm';
// import '../Style/noteForm.css';

// export default function NoteButton(e) {
//     e.preventDefault();
//     const [isOpen, setIsOpen] = useState(false);

//     const onTrigger = (event) => {
//         this.props.parentCallback({event});

//     }
//     return (
//         <div>
//             <h1>Welcome</h1>
//             <button className="add-note" onClick={() => setIsOpen(true)}>Make a Note</button>
//                 <NoteForm open={isOpen} onClose={() => setIsOpen(false)}>
//                     <div>
//                         <form onSubmit={onTrigger}>
//                             Name the note:
//                             <input type="text"  placeholder="Enter your name" onChange={(e) => ({name: e.target.value})}/>
//                         </form>
//                     </div>
//                 </NoteForm>
//         </div>
//     )
// }
