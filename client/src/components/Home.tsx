import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CSS/Home.css';
import Axios from 'axios';


function Home() {
   const [login, setLogin] = useState(false);
   function isLoggedIn () {
    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/islogin",})
        .then((res) => {

            setLogin(res.data);
          }); 
         
    return login;       
    }
     
    return isLoggedIn() ? 
    <> 
        <div className="UserProfile"> 
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <Link id = "profile" to={'/MyProfile'}>My Profile</Link> 
        </div>
        <div className="home"> 
            <h1 id = "main-title">Welcome to QuizTime</h1>
            <div className="quiz-container">
                <img className ="arrow" src="https://media3.giphy.com/media/WoEcsfj0hMyufo8yyz/200w.webp?cid=ecf05e473tr3vphhsy59k1jxr3t1iek6gglqcy8i94vc314h&rid=200w.webp" alt = "arrow"></img>
                <Link id = "quiz" to={'/quiz'}>Start a new quiz </Link> 
                <img className ="arrow" src="client\src\images\arrow.gif" alt = "arrow"></img> 
            </div>
        </div>
    </> 
    : 
    <div className = "homepage-container">
        <h1 id = "main-title">Welcome to QuizTime</h1>
        <div className = "small-box">
            <p className = "message login">You have to login first</p>
            <Link className="buttons login" to={'/login'}>Login</Link>       
            <p className = "message signup"> you don t have an account?</p>
            <Link className="buttons signup" to={'/signup'}>SignUp</Link>
        </div>
    </div>
}
export default Home;
