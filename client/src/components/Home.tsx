import React from "react";
import { Link } from "react-router-dom";
import './CSS/Home.css';


function Home() {
    
    return (
        <div className = "homepage-container">
        <h1 id = "main-title">Welcome to QuizTime</h1>
        <div className = "small-box">
            <Link className="buttons login" to={'/login'}>Login</Link> 
            <p className="message">OR</p>      
            <Link className="buttons signup" to={'/signup'}>SignUp</Link>
           
        </div>
        <img className = "gif"src ='https://media3.giphy.com/media/dXiyXSqrIo9Ms/200w.webp?cid=ecf05e47uctuv0pcd47q51jf0z2wzqx6m5lzbgmd9dll28i1&rid=200w.webp' alt = 'gif'></img>

    </div>
    )
       
        
    }
    export default Home;