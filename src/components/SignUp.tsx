import React, { Component} from 'react';

import Axios from 'axios'
export default class SignUp extends Component {
   
    
     handleSubmit = (e : any) => {
         e.preventDefault();
         const info = {
             username: this.Username,
             email: this.Email,
             password: this.Password,
             confirmPassword: this.ConfirmPassword   
         };
        Axios.post('http://localhost:3000/signup', info).then(res => {console.log(res)}).catch(err=> {console.log(err);})
    }
    Username!: string;
    Email!: string;
    Password!: string;
    ConfirmPassword!: string;
    
   
    render(){ return(
        
             <div className="signup">
                  <form onSubmit={this.handleSubmit}>
                        <p> Welcome to</p>
                        <h1>Quiz App</h1>
                        <input type="text" placeholder="Username" onChange={e => this.Username = e.target.value}></input><br/>
                        <input type="email" placeholder="email" onChange={e => this.Email = e.target.value}></input><br/>
                        <input type="password" placeholder="Password" onChange={e => this.Password = e.target.value}></input> <br/>
                        <input type="password" placeholder="Confirm Password" onChange={e => this.ConfirmPassword = e.target.value}></input> <br />
                        <button type="submit">Sign Up</button>
                  </form>
            </div>
            
    )
    }

}


