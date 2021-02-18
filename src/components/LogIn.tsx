import React from 'react';
import './LogIn.css';

function LogIn(){
    return (
        
             <div className="login">
                  <form>
                        <p> Welcome to</p>
                        <h1>Quiz App</h1>
                        <input type="text" placeholder="Username"></input>
                        <br></br>
                        <input type="password" placeholder="Password"></input>
                        <button type="submit">LogIn</button>
                        <p>You dont have an account pleasa <span><button type="button" >Sign Up</button></span></p>
                  </form>
            </div>
            
    )

}


export default LogIn