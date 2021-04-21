import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Style/loginScreen.css';

class Login extends Component{
    constructor(props){
        super(props)

        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        };
    }

    async formSubmit(e) {
        e.preventDefault();
        try {
        const { data } = await axios.post('http://localhost:8080/api/auth/signin', {username: this.state.username, password: this.state.password});
        console.log(data);
        if (data && data.accessToken){
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("id", data.id);  
        }
        if (data.accessToken === localStorage.getItem("token")){
            this.props.history.push('/user');
        }
    } catch (err){
        console.log(err);
    }
}
    
    render(){
        return(
            <div className="Login">
                <button className="main-page button">
                    <Link to='/' style={{ textDecoration: 'none' }}>Main Page</Link>
                </button>
                <h1>Hello {this.state.username} please log in </h1>
                <form onSubmit={this.formSubmit}>            
                    <p>Username</p>
                    <input type="text" value={this.state.username} placeholder="Enter your name" onChange={(e) => this.setState({username: e.target.value})}/>
                    <p>Password</p>
                    <input type="password" value={this.state.password} placeholder="Enter password" onChange={(e) => this.setState({password: e.target.value})}/>
                    <div>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;