import React from 'react';
import Axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props)

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        };

    }

    async onFormSubmit(){
        try {
          const response = await Axios.post('http://localhost:8080/api/auth/signin', {username: this.state.username, password: this.state.password });
          console.log('Returned data:', response);
          console.log("no i piknie")
        } catch (e) {
          console.log(`Axios request failed: ${e}`);
        }
      }

    render(){
        return(
            <div className="register">
                <h1>Hello {this.state.username}, please log in </h1>
                <form onSubmit={this.onFormSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                </form>
                </div>
        )
    }
}

export default Login;