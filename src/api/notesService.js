import axios from 'axios';

export const addNote = () => {
    e.preventDefault();
    try {
        await axios.post(
            "http://localhost:8080/api/notes",
            { id: this.state.id, name: this.state.name, body: this.state.body },
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
        );
        console.log("note Added!");
    } catch (err) {
        console.log(err);
    }
}

export const deleteNote = () => {
    try {
        await axios.delete(
            `http://localhost:8080/api/notes/${e}`,
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            }
        )
        console.log("hujuhujuhuj")
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

export const updateNote = () => {
    e.preventDefault();
    try {
        await axios.put(
            `http://localhost:8080/api/notes/${this.state.id}`,
            {
                name: this.state.name, body: this.state.body
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
        console.log('duppka')
    }
    catch (error) {
        console.log(error);
    }
}
