import React from "react";
import axios from "axios"
import Home from "./Home"
import './CSS/Form.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useForm from "./UseForm";
import validate from './Validations';

interface UserInfo
{
  username: string,
  email: string, 
  password: string, 
  password2: string
}
const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  return (
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
    );
  
}
export default SignUp;
