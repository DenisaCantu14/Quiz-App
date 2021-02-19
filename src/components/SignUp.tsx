import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup">
        <form>
          <p> Welcome to</p>
          <h1>Quiz App</h1>
          <input type="text" placeholder="Username"></input>
          <br />
          <input type="email" placeholder="email"></input>
          <br />
          <input type="password" placeholder="Password"></input> <br />
          <input type="password" placeholder="Confirm Password"></input> <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
