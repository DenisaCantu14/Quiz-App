import React from "react";
import postData from './methods'


interface UserInfo  {
  username: string;
  email: string;
  password: string;
};
class SignUp extends React.Component <{}, UserInfo> {
  constructor(props : UserInfo)
  {
      super(props);
      this.state = {
        username: props.username,
        email: props.email, 
        password: props.password
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);


  }  
  
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

    e.preventDefault();
    const newUser = this.state;
    //await postData('http://localhost:3000/add-user', newUser)
    
    
  }

  handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    
    this.setState((state) => {
      return {username:e.target.value}
    })
  }

  handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    
    this.setState((state) => {
      return {email: e.target.value}
    })
  }
  handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    
    this.setState((state) => {
      return {password: e.target.value}
    })
  }
  render() {
    return (
      <div className="signup">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p> Welcome to</p>
          <h1>Quiz App</h1>
          <input type="text" name = "username" placeholder="Username" onChange={(event) => this.handleChangeUsername(event)}></input>
          <br />
          <input type="email" name = "email" placeholder="email" onChange={(event) => this.handleChangeEmail(event)}></input>
          <br />
          <input type="password" name = "password" placeholder="Password" onChange={(event) => this.handleChangePassword(event)}></input> <br />
          <input type="password" placeholder="Confirm Password"></input> <br />
          <button type="submit" >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
