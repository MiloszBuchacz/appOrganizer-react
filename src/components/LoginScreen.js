import React from 'react';
// import './LoginStyle.css';
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
    const response = await Axios.post('http://localhost:8080/api/auth/signup', {username: this.state.username, password: this.state.password });
    console.log('Returned data:', response);
  } catch (e) {
    console.log(`Axios request failed: ${e}`);
  }
}





  render(){
      return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={this.onFormSubmit}>
        <label>
          <p>Username {this.state.username}</p>
          <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
        </label>
        <label>
          <p>Password {this.state.password}</p>
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
