import axios from 'axios';
import React, { Component } from 'react';
import './Style/userPage.css'


class UserPage extends Component{
    constructor(props){
        super(props)

        this.addNote = this.addNote.bind(this);

        this.state = {
            name: 'krupnik',
            body: 'zupa chuj maczeta'
        }
    }
    async addNote(e) {
        e.preventDefault();
        const id = localStorage.getItem("id");
        try{
        const { data } = await axios.post('http://localhost:8080/api/notes', {name: this.state.name, body: this.state.body, _userId: id});
        console.log("name:", data.name, "body:", data.body);
        } catch(err){
            console.log(err);
        }
        
    }


    render(){
        return(
            <div>
                <h1>siema ziombal co tam</h1>
                <button onClick={this.addNote}>Add Note</button>
            </div>
        )
    }
}
export default UserPage;