import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './CSS/Profile.css';
import Axios from 'axios'

function Profile ()
{
    const [data, setData] = useState({username:""})
    const [out, setOut] = useState(false);
    const [score, setScore] = useState(0);

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

     const getScore = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/score",
        }).then((res) => {
          setScore(res.data)
        });
      };

    useEffect (() => {if(data.username === "") getUser()})
    useEffect (() => {if(score === 0) getScore()})

    return (
        out ? <Redirect to={'/'}/> :
        <div className = 'profile-container'>
             <Link to={'/'} id="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </Link>
            <br></br>
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <p>{data.username}</p>
            <p>My score :{score} </p>
           <Link to={'/rank'} >Rank</Link>
           <button className="logout" onClick={LogOut} >Logout</button>  
        
        
        </div>
    
    )

}

export default Profile