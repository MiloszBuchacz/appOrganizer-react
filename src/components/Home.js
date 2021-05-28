import React from 'react';
import NavBar from './NavBar';
import '../components/Style/loginScreen.css';

function Home() {
    return (

        <div className="body">

                <NavBar />
                <h1>hay {localStorage.getItem("name")}</h1>
            this page is simple note organizer
            <br />
                <br />
            
            <br />
                <br />
                <br />
                <br />
            
            <br />
                <br />
                <br />
                <br />
            

        </div>

    )
}
export default Home;