import React, {useState} from "react";
import axios from "axios"

function SignUp()
{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null);
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
        setData(res.data);
        console.log(res.data);
      });
    }
  
    return (
      <div className="signup">
       
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
    );
  
}

export default SignUp;
