import React from 'react';
import NavBar from './NavBar';
import '../components/Style/loginScreen.css';

function Home() {
    return (

        <div className="body">
            <NavBar />
            <h1>Hay {localStorage.getItem("name")}</h1>
            this page is simple note organizer
            <br />
            <br />
            after registration, you would be able to make note
            <br />
            im currently working on sending notes to other users, it can be used for example as a shopping list
        </div>
    )
}
export default Home;