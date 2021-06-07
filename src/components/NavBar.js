import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Style/loginScreen.css';

function NavBar() {
    return (
        <>
            <div className="topBox">
                <nav className="registration">
                    <button className="main-page button">
                        <span>
                            <Link to='/registration'>Registration</Link>
                        </span>
                    </button>
                </nav>
            </div>
            <div className="topBox">
                <nav className="login">
                    <button className="main-page button">
                        <span>
                            <Link to='/login'>Login</Link>
                        </span>
                    </button>
                </nav>
            </div>
        </>

    )
}

export default NavBar;