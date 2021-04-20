import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return(
        <React.Fragment>           
             <div> 
                <button><Link to='/registration'>Registration</Link></button>
            </div>
            <div>
                <button><Link to='/login'>Login</Link></button>
            </div> 
        </React.Fragment>    

        )
}

export default NavBar;