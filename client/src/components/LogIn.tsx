import React, {useState} from "react";
import Axios from "axios"
export let isLoggedIn = false;
function LogIn()
{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null);
    const logIn = () => {
      Axios({
        method: "POST",
        data: {
          username,
          password,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) => { 
        setData(res.data);
        isLoggedIn = true;
        console.log(res.data);
      })
    };
    return (
      <div className="login">
          <p> Welcome to</p>
          <h1>Quiz App</h1>
          <input type="text" placeholder="Username"  onChange = {e => setUsername(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Password"  onChange = {e => setPassword(e.target.value)}></input>
          <button type="submit" onClick={logIn}>LogIn</button>
      </div>
    );
  }


export default LogIn;
