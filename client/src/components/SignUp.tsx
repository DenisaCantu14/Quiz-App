import React, {useState} from "react";
import axios from "axios"
import Home from "./Home"
import './CSS/Form.css';
import Swal from "sweetalert2";

function SignUp()
{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const signUp = () => {
      axios({
        method: "POST",
        data: {
          username,
          email,
          password,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then((res) => { 
        logIn()
       console.log(res.data);
       console.log(res.status);
      });
    }
    const logIn = () => {
      console.log("am fost apelat")
      axios({
        method: "POST",
        data: {
          username,
          password,
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
    return (
      <div>
      {isLoggedIn ? <Home/> :
       <div className="form-container signup">
          <p id ="msg"> Welcome to</p>
          <h1 id="title">Quiz App</h1>
          <div className="input-container">
          <input type="text" placeholder="Username"  className ="Input"onChange = {e => setUsername(e.target.value)}></input>
          <br></br>
          <input type="text" placeholder="Email"  className ="Input"onChange = {e => setEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Password"  className ="Input" onChange = {e => setPassword(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Confirm Password" className ="Input"></input> <br />
          <button id ="btn" onClick={signUp} >
            Sign Up
          </button>
          </div>
      </div>
}
      </div>
    );
  
}

export default SignUp;
