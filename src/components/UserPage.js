import axios from 'axios';
import React, { Component } from 'react';
//import NoteButton from './UserPageComponents/NoteButton';
import './Style/userPage.css';


class UserPage extends Component{
    constructor(props){
        super(props)

        this.addNote = this.addNote.bind(this);
        this.getNote = this.getNote.bind(this);
       // this.callBack = this.callBack.bind(this);


        this.state = {
            name: '',
            body: '',
        }
    }
    // callBack = (name) => {
    //     this.setState({name: name})
    //     console.log(name);
    // }
    

    async addNote(e) {
        e.preventDefault();
        try{
        await axios.post('http://localhost:8080/api/notes',
        {name: this.state.name, body: this.state.body},
        {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});

        console.log("note Added!");
        } catch(err){
            console.log(err);
        }
        
    }

        async getNote(e) {
            e.preventDefault();
            try{
            const { data } = await axios.get('http://localhost:8080/api/notes',
            {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
            this.setState({name: data.name, body: data.body});
            console.log(data);
                console.log(this.state.name)  
            }catch(err){
                console.log(err);
            }
        }

    render(){
        return(
            <div>
                <form onSubmit={this.addNote}>
                    <h1>Welcome</h1>
                    Make a Note
                    <input type="text" value={this.state.name} placeholder="Enter your name" onChange={(e) => this.setState({name: e.target.value})} />
                    Body:
                    <input className="body" type="text" value={this.state.body} placeholder="Enter your name" onChange={(e) => this.setState({body: e.target.value})} />
                    <button className="button" type="submit">zapisz</button>
                </form>
                <div>
                    <button type="button" style={{marginTop: "160px", marginLeft: "200px"}} onClick={this.getNote}>siemanko</button>
                    <p>{this.state.name, this.state.body}</p>
                </div>

            </div> 
        )}
}
export default UserPage;