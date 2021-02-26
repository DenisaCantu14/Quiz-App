import React from "react";
import Start from './Start'
import { Link } from "react-router-dom";
import image from '../images/home3.jpg'
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
        <button onClick={LogOut}>Log Out</button>
        <Start />  
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
