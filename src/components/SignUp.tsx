import React from 'react';


function SignUp(){
    return (
        
             <div className="signup">
                  <form>
                        <p> Welcome to</p>
                        <h1>Quiz App</h1>
                        <input type="text" placeholder="Username"></input>
                        <br></br>
                        <input type="password" placeholder="Password"></input> <br/>
                        <input type="password" placeholder="Confirm Password"></input> <br />
                        <button type="submit">Sign Up</button>
                  </form>
            </div>
            
    )

}


export default SignUp