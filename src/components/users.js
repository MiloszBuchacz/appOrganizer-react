import React, { Component } from 'react';
import Axios from 'axios';
import './users.css';

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:8080/api/users").then((response) => {
            console.log(response);
        });
    };

    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}

export default Users;