import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CSS/Home.css';
import rightArrow from '../images/arrow.gif'
import leftArrow from '../images/left.webp'

function HomeConnected() {
//    const [login, setLogin] = useState(false);
//    function isLoggedIn () {
//     Axios({
//         method: "GET",
//         withCredentials: true,
//         url: "http://localhost:4000/islogin",})
//         .then((res) => {

//             setLogin(res.data);
//           }); 
         
//     return login;       
//     }
     
    return (
    <> 
        <div className="UserProfile"> 
            <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" id = "user"alt ='user'></img>
            <Link id = "profile" to={'/MyProfile'}>My Profile</Link> 
        </div>
        <div className="home"> 
            <h1 id = "main-title">Welcome to QuizTime</h1>
            <div className="quiz-container">
                <img className ="arrow" src={leftArrow} alt = "arrow"></img>
                <Link id = "quiz" to={'/quiz'}>Start a new quiz </Link> 
                <img className = "arrow" src={rightArrow} alt = "arrow"></img> 
            </div>
        </div>
    </> 
    )
   
    
}
export default HomeConnected;
