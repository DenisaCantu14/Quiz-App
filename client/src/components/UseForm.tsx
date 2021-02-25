import { useState, useEffect } from 'react';

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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;