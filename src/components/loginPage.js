import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './Style/loginScreen.css';

class Login extends React.Component{
    constructor(props){
        super(props)

        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        };

    }

    // async formSubmit(){
    //     try {
    //       const response = await Axios.post('http://localhost:8080/api/auth/signin', {username: this.state.username, password: this.state.password })
    //       .then(response => {
    //           localStorage.setItem("id", JSON.stringify(response.data),
    //           alert("gówno xD"),
    //           console.log(response));
    //       })
    //       console.log('Returned data:', response);

    //     } catch (e) {
    //       console.log(`Axios request failed: ${e}`);
    //     }
    //   }

    async formSubmit(e) {
        e.preventDefault();
        try {
        const { data } = await Axios.post('http://localhost:8080/api/auth/signin', {username: this.state.username, password: this.state.password});
        console.log(data);
        if (data && data.accessToken){
            localStorage.setItem("token", data.accessToken);
        }

    } catch (err){
        console.log(err);
    }
}

    render(){
        return(
            <div className="register">
                <div className="main-menu">
                    <button>
                        <Link to='/'>Main Page</Link>
                    </button>
                </div>
                <h1>Hello {this.state.username}, please log in </h1>
                <form onSubmit={this.formSubmit}>
                    
                        Username
                        <input type="text" value={this.state.username} placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
                        Password
                        <input type="password" value={this.state.password} placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                </form>
                </div>
        )
    }
}

export default Login;