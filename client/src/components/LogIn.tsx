import React from "react";
import "./LogIn.css";

class LogIn extends React.Component {
  render() {
    return (
      <div className="login">
        <form>
          <p> Welcome to</p>
          <h1>Quiz App</h1>
          <input type="text" placeholder="Username"></input>
          <br></br>
          <input type="password" placeholder="Password"></input>
          <button type="submit">LogIn</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
