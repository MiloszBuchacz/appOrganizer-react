import React from 'react';
import NavBar from './NavBar';
import '../components/Style/loginScreen.css';

function Home() {
    return (

        <div className="body">

                <NavBar />
                <h1>WELCOME TO AŁER HOŁM PEJDŻ {localStorage.getItem("name")}</h1>
            napisze se tu coś żeby takie wiesz ala
            <br />
                <br />
            hello my name is, this page is for i takie tam
            <br />
                <br />
                <br />
                <br />
            może se nawet zdjęcie wkleje
            <br />
                <br />
                <br />
                <br />
            albo dupe pokaże

        </div>

    )
}
export default Home;