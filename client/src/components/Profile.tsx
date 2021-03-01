import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './CSS/Profile.css';
import Axios from 'axios'

function Profile ()
{
    const [data, setData] = useState({username:""})
    const [out, setOut] = useState(false);

    function LogOut () {
    
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/logout",
          }).then((res) => {
            setData({username:""})
            setOut(true);
          }); 
    }

    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/user",
        }).then((res) => {
          setData(res.data)
        });
      };

    useEffect (() => {if(data.username === "") getUser()})

    return (
        out ? <Redirect to={'/'}/> :
        <div className = 'profile-container'>
             <Link to={'/'} id="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </Link>
            <br></br>
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <p>{data.username}</p>
            <p>My score : </p>
           <button className="logout" onClick={LogOut} >Logout</button>  
        
        
        </div>
    
    )

}

export default Profile