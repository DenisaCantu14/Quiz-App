import React from "react";
import axios from "axios"
import Home from "./Home"
import './CSS/Form.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

interface UserProps
{
  username: string,
  email: string, 
  password: string
}
class SignUp extends React.Component<UserProps,any>
{
  constructor(props: UserProps) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
     };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.ChangeUserName = this.ChangeUserName.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
    this.connected = this.connected.bind(this);

  }
  connected () {return localStorage.getItem("username")!== null;}
  signUp () {
      axios({
        method: "POST",
        data: {
          username:this.state.username,
          email:this.state.email,
          password:this.state.password,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then((res) => { 
        if (res.status === 201) 
        {
          this.logIn();
        } 
          else 
          {Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error! This username already exists :(',
        
        })
      }
      });
    }
    logIn() {
      console.log("am fost apelat")
      axios({
        method: "POST",
        data: {
          username:this.state.username,
          password:this.state.password,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) => { 
        
        if (res.status === 202) 
        {
          localStorage.setItem("username", this.state.username)
          this.forceUpdate();
        } 
          else 
          {Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error! Try again',
        
        })
      }
      })
     
    };

    ChangeUserName (u :string) {
      this.setState({username: u })
    }

    
    ChangeEmail (e :string) {
      this.setState({email: e })
    }

    ChangePassword (p :string) {
      this.setState({password: p })
    }

    render() {
    return (
      <div>
      {this.connected() ? <Home/> :

       <div className="form-container signup">
          <p id ="msg"> Welcome to</p>
          <h1 className="title-form">Quiz App</h1>
          <div className="input-container">
          <input type="text" placeholder="Username"  className ="Input"onChange = {e => this.ChangeUserName(e.target.value)}></input>
          <br></br>
          <input type="text" placeholder="Email"  className ="Input"onChange = {e => this.ChangeEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Password"  className ="Input" onChange = {e => this.ChangePassword(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="Confirm Password" className ="Input"></input> <br />
          <button id ="btn" onClick={this.signUp} >
            Sign Up
          </button>
          </div>
          <br></br>
          <p> Already have an account?</p>
          <Link className="" to={'/login'}>Login</Link>
      </div>
     
}
      </div>
    );
  
}
}
export default SignUp;
