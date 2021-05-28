import axios from 'axios';

export const addNote = async (name, body) => {
    try {
        return await axios.post(
            "http://localhost:8080/api/notes",
            { name, body },
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
        );
    } catch (err) {
        console.log(err);
    }
}

export const deleteNote = async (noteId) => {
    try {
        const response = await axios.delete(
            `http://localhost:8080/api/notes/${noteId}`,
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            }
        )
        console.log(response);
        return response;
    }
    catch (err) {
        console.log(err);
    }
}

export const getNotes = async () => {
    try {
        const { data } = await axios.get("http://localhost:8080/api/notes", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}

// export const updateNote = async () => {
//     try {
//         await axios.put(
//             `http://localhost:8080/api/notes/${this.state.id}`,
//             {
//                 name: this.state.name, body: this.state.body
//             }, {
//             headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         console.log('duppka')
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
