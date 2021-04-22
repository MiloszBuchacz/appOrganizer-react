import axios from 'axios';
import React, { Component } from 'react';
import NoteButton from './UserPageComponents/NoteButton';
import './Style/userPage.css';


class UserPage extends Component{
    constructor(props){
        super(props)

        this.addNote = this.addNote.bind(this);


        this.state = {
            name: '',
            body: ''
        }
    }

    

    async addNote(e) {
        e.preventDefault();
        try{
        await axios.post('http://localhost:8080/api/notes', {name: this.state.name, body: this.state.body}, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
        console.log("note Added!");
        } catch(err){
            console.log(err);
        }
        
    }
    

    render(){
        return(
            <div>
                <NoteButton />
            </div> 
        )}
}
export default UserPage;