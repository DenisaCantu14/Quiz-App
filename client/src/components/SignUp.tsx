import React, {useState} from "react";
import axios from "axios"
import Home from "./Home"
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
      <>
      {isLoggedIn ? <Home/> : <div className="signup">

          <p> Welcome to</p>
          <h1>Quiz App</h1>
          <input type="text" name = "username" placeholder="Username" onChange = {e => setUsername(e.target.value)}></input>
          <br />
          <input type="email" name = "email" placeholder="email" onChange = {e => setEmail(e.target.value)}></input>
          <br />
          <input type="password" name = "password" placeholder="Password" onChange = {e => setPassword(e.target.value)}></input> <br />
          <input type="password" placeholder="Confirm Password"></input> <br />
          <button onClick={signUp} >
            Sign Up
          </button>
      </div>
}
      </>
    );
  
}

export default SignUp;
