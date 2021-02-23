import React from "react";
import Start from './Start'
import { Link } from "react-router-dom";



function Home() {
    function LogOut () {
        localStorage.removeItem("username");
        window.location.reload();
        console.log("dd")
    }
    function connected () {return localStorage.getItem("username")!== null;}
    console.log(connected())
    return  connected() ? <> 
    <button onClick={LogOut}>Log Out</button>
     <Start />  
     </> : 
    <div>
        <p>Welcome to QuizTime</p>
        <p>You have to login first</p>
        <Link className="" to={'/login'}>Login</Link>       
         <p> you don t have an account?</p>
         <Link className="" to={'/signup'}>SignUp</Link>
    </div>
  
}
export default Home;
