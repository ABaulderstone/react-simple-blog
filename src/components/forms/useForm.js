import {useState, useEffect} from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        setErrors(validate(values));
    },[values]);
    
    const handleSubmit = (event) => {
        event && event.preventDefault();
        setErrors(validate(values));
        if (Object.keys(errors).length === 0) {
            callback();
        }
      
    };
   

    const handleChange = (event) => {
        event.persist(); 
        setValues((values) => ({...values, [event.target.name]: event.target.value}));
    }
    return {
        handleChange,
        handleSubmit,
        values, 
        errors, 
    }
}

export default useForm