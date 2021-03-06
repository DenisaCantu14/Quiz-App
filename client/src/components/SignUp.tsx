import React from "react";
import './CSS/Form.css';
import { Link, Redirect } from "react-router-dom";
import useForm from "./UseForm";
import validate from './Validations';


const SignUp = (submitForm : any) => {

  const { handleChange, handleSubmit, values, errors, noErrors } = useForm(validate);  
  
  return (
    <>
    {!noErrors ? 
      <div className="form-container signup">
         <form onSubmit={handleSubmit}> 
          <p className = "msg"> Welcome to</p>
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
             <p className = "error">{errors.username}</p>
              
              <input 
                type = "text" 
                name = "email" 
                placeholder = "Email" 
                className = "Input"
                value={values.email}
                onChange={handleChange}>
              </input>
              <p className = "error">{errors.email}</p>
              
              <input 
                type="password" 
                name = "password" 
                placeholder="Password"  
                className ="Input" 
                value={values.password}
                onChange={handleChange}>
              </input>
              <p className = "error" >{errors.password}</p>
              
              <input 
                type="password" 
                name ="password2" 
                placeholder="Confirm Password" 
                className ="Input" 
                value={values.password2}
                onChange={handleChange}>
              </input> 
              <p className = "error">{errors.password2}</p>
             
              <button type ="submit" id ="btn" >
                Sign Up
              </button>
          </div>
          <p className="msg"> Already have an account?</p>
          <Link id="another-btn" to={'/login'}>Login</Link>
        </form>
      </div>
      :
      <Redirect to={'/Home'}/>
}
    </>
    );

}
export default SignUp;
