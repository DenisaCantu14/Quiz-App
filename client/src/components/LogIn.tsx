import React, {useState} from "react";
import Axios from "axios"
import Home from './Home'
import './CSS/LogIn.css';
import Swal from "sweetalert2";

function LogIn()
{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const logIn = () => {
      Axios({
        method: "POST",
        data: {
          username,
          password
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) => { 
        
        console.log(res.data);
        console.log(res.status);
        if (res.status === 202) 
        {
          setIsLoggedIn(true);
          console.log(isLoggedIn);
          localStorage.setItem("username", username)} 
          else 
          {Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your data is wrong',
        
        })
      }
      })
     
    };
    console.log(isLoggedIn);
    return (
      <>
       
      {isLoggedIn ? <Home /> : 
     
      <div className="login">
         
          <p id ="msg"> Welcome to</p>
          <h1 id="title">Quiz App</h1>
          <div className="input-container">
          <input type="text" placeholder="Username"  className ="Input"onChange = {e => setUsername(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Password"  className ="Input" onChange = {e => setPassword(e.target.value)}></input>
          <br></br><br></br>
          <button id ="btn"type="submit"  onClick={logIn}>LOGIN</button>
          </div>
      </div>}
      </>
    );
  }


export default LogIn;
