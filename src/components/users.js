import React, { Component } from 'react';
import Axios from 'axios';
import './style/users.css';

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
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