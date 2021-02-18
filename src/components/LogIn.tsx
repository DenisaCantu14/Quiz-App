import React from 'react';
import './LogIn.css';

function Authentication(){
    return (<div>
         <div className="auth">
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
            <div className = "signup">
                <form>
                    <input type="text" placeholder="Username"></input>
                    <br></br>
                    <input type="password" placeholder="Password"></input><br/>
                    <input type="password" placeholder="Confirm Password"></input>
                    <br />      
                    <button type="submit">Sign Up</button>
                </form>

            </div>
        
         </div>
    </div>)

}


export default Authentication