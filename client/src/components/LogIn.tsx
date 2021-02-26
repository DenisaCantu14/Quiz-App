import React from "react";
import Axios from "axios"
import Home from './Home'
import './CSS/Form.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

interface UserProps
{
  username: string, 
  password: string
}
class LogIn extends React.Component<UserProps, any>
{
  constructor(props: UserProps) {
    super(props);

    this.state = {
      username: "",
      password: ""
     };
    this.logIn = this.logIn.bind(this);
    this.ChangeUserName = this.ChangeUserName.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
    this.connected = this.connected.bind(this);

  }
    connected () {return localStorage.getItem("username")!== null;}
    logIn () {
      Axios({
        method: "POST",
        data: {
          username:this.state.username,
          password:this.state.password
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
        
      }).then((res) => { 
        
        if (res.status === 202) 
        {
          localStorage.setItem("username", this.state.username);
          this.forceUpdate();
        } 
          else 
          {Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your data is wrong',
        
        })
      }
      })
    };

    ChangeUserName (u :string) {
      this.setState({username: u })
    }

    
    ChangePassword (p :string) {
      this.setState({password: p })
    }
    render()
    {
    return (
      <>
       
      {this.connected() ? <Home connected={true}/> : 
     
      <div className="form-container">
         
          <p className ="msg"> Welcome to</p>
          <h1 className="title-form">Quiz App</h1>
          <div className="input-container">
          <input type="text" placeholder="Username"  className ="Input"onChange = {e => this.ChangeUserName(e.target.value)}></input>
          <br/><br/>
          <input type="password" placeholder="Password"  className ="Input" onChange = {e => this.ChangePassword(e.target.value)}></input>
          <br></br><br></br>
          <button id ="btn"type="submit"  onClick={this.logIn}>LOGIN</button>
          </div>
          <p className = "msg"> you don t have an account?</p>
          <Link id="another-btn" to={'/signup'}>SignUp</Link>
      </div>}
      </>
    );
  }
}


export default LogIn;
