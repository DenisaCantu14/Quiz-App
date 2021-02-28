import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './CSS/Profile.css';

function Profile ()
{
    const [logOut, setLogOut] = useState(false)
    function LogOut () {
        localStorage.removeItem("username");
        window.location.reload();
        setLogOut (true);
        
    }
    {if (logOut == true) return <Redirect to={"/"} /> }
    return (
        
        <div className = 'profile-container'>
             <Link to={'/'} id="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </Link>
            <br></br>
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <p>My score : </p>
           <button className="logout" onClick={LogOut} >Logout</button>  
        </div>
    )
}

export default Profile