import React from "react";
import Home from "./Home"
import './CSS/Form.css';
import { Link } from "react-router-dom";
import useForm from "./UseForm";
import validate from './Validations';


const SignUp = (submitForm : any) => {

  const { handleChange, handleSubmit, values, errors, noErrors } = useForm(validate);  
  console.log(noErrors)
  
  return (
    <>
    {!noErrors ? 
      <div className="form-container signup">
         <form onSubmit={handleSubmit}> 
          <p id = "msg"> Welcome to</p>
          <h1 className = "title-form">Quiz App</h1>
          <div className = "input-container">
              <input 
                type = "text" 
                name = "username" 
                placeholder = "Username"  
                className = "Input"
                value={values.username}
                onChange={handleChange}>
              </input>
              {errors.username && <p>{errors.username}</p>}
              <br></br>
              <input 
                type = "text" 
                name = "email" 
                placeholder = "Email" 
                className = "Input"
                value={values.email}
                onChange={handleChange}>
              </input>
              {errors.email && <p>{errors.email}</p>}
              <br></br>
              <input 
                type="password" 
                name = "password" 
                placeholder="Password"  
                className ="Input" 
                value={values.password}
                onChange={handleChange}>
              </input>
              {errors.password && <p>{errors.password}</p>}
              <br></br>
              <input 
                type="password" 
                name ="password2" 
                placeholder="Confirm Password" 
                className ="Input" 
                value={values.password2}
                onChange={handleChange}>
              </input> 
              {errors.password2 && <p>{errors.password2}</p>}
              <br />
              <button type ="submit" id ="btn" >
                Sign Up
              </button>
          </div>
          <br></br>
          <p> Already have an account?</p>
          <Link className="" to={'/login'}>Login</Link>
        </form>
      </div>
      :
      <Home />
}
    </>
    );

}
export default SignUp;
