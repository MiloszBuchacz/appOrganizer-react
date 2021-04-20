import React from 'react';
import Axios from 'axios';

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
    //           localStorage.setItem("id", JSON.stringify(response.data));
    //       })
    //       console.log('Returned data:', response);

    //     } catch (e) {
    //       console.log(`Axios request failed: ${e}`);
    //     }
    //   }

    formSubmit = () => {
        const data = Axios.post('http://localhost:8080/api/auth/signin', {username: this.state.username, password: this.state.password})
        .then(console.log(data));
    }


    render(){
        return(
            <div className="register">
                <h1>Hello {this.state.username}, please log in </h1>
                <form onSubmit={this.formSubmit}>
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