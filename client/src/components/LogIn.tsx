import React, {useState} from "react";
import Axios from "axios"
import Home from './Home'
import './CSS/Form.css';
import Swal from "sweetalert2";

function LogIn()
{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function connected () {return localStorage.getItem("username")!== null;}
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
    
   
    return (
      <>
       
      {connected() ? <Home /> : 
     
      <div className="form-container">
         
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
