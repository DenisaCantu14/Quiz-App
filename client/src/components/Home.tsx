import React from "react";
import { Link } from "react-router-dom";
import './CSS/Home.css';



function Home(connected : any) {
    function LogOut () {
        localStorage.removeItem("username");
        window.location.reload();
        console.log("dd")
    }
    function isLoggedIn () {
        return localStorage.getItem("username")!== null;
    }
    
    return  connected.connected === true || isLoggedIn() ? 
    <> 
        <div className="UserProfile"> 
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <Link id = "profile" to={'/'}>My Profile</Link> 
        </div>
        <div className="home"> 
            <h1 id = "main-title">Welcome to QuizTime</h1>
            <div className="quiz-container">
                <img className ="arrow" src="https://media3.giphy.com/media/WoEcsfj0hMyufo8yyz/200w.webp?cid=ecf05e473tr3vphhsy59k1jxr3t1iek6gglqcy8i94vc314h&rid=200w.webp" alt = "arrow"></img>
                <Link id = "quiz" to={'/quiz'}>Start a new quiz </Link> 
                <img className ="arrow" src="https://im2.ezgif.com/tmp/ezgif-2-ce8960fe1248.gif" alt = "arrow"></img> 
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
