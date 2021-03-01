import React, { useState } from "react";
import Axios from "axios"
import './CSS/Form.css';
import Swal from "sweetalert2";
import { Link, Redirect } from "react-router-dom";


function LogIn ()
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  
  function logIn () 
  {
    Axios({
      method: "POST",
      data: {
        username,
        password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",})
      .then((res) => { 
        if (res.status !== 202) 
          {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your data is wrong',
            })
          }
        else
            window.location.reload();  
      })
  }
     
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
   
  return (
      <>
       
      {isLoggedIn() ? <Redirect to={'/'}/> : 
     
      <div className="form-container">
         
          <p className ="msg"> Welcome to</p>
          <h1 className="title-form">Quiz App</h1>
          <div className="input-container">
          <input type="text" placeholder="Username"  className ="Input" onChange = {e => setUsername(e.target.value)}></input>
          <br/><br/>
          <input type="password" placeholder="Password"  className ="Input" onChange = {e => setPassword(e.target.value)}></input>
          <br></br><br></br>
          <button id ="btn"type="submit"  onClick={logIn}>LOGIN</button>
          </div>
          <p className = "msg"> you don t have an account?</p>
          <Link id="another-btn" to={'/signup'}>SignUp</Link>
      </div>}
      </>
    );
}


export default LogIn;
