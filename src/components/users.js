import React, { Component } from 'react';
import './users.css';

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}, () => console.log('Users fetched.', users)));
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}
export default Users;