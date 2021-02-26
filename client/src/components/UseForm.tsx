import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const useForm = (validate:any) => {
  const [values, setValues] = useState({
    username:'',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState(
    {
      username: "",
      email:"", 
      password: "", 
      password2: ""
    });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noErrors, setNoErrors] = useState(false);
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  function signUp () {
   
    axios({
      method: "POST",
      data: {
        username:values.username,
        email:values.email,
        password:values.password,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => { 
      if (res.status === 201) 
      {
        setNoErrors(true);
        logIn();
        
      } 
        else 

        {
          setNoErrors(false);
         
          setErrors( {
            ...errors,
            'username': 'This username already exists'
          });
        }
    });
  }
  function logIn() {
    
    axios({
      method: "POST",
      data: {
        username:values.username,
        password:values.password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => { 
      
      if (res.status === 202) 
      {
        localStorage.setItem("username", values.username)
       
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
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(
    () => {
      if (errors.username === "" && errors.email === "" && errors.password === "" && errors.password2 === "" && isSubmitting) {
         
         signUp();
         
      }
    },
    [errors]
  );
 

  return { handleChange, handleSubmit, values, errors, noErrors};
};

export default useForm;