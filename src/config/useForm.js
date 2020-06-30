import {useState, useEffect} from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (event) => {
        event && event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
   
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            console.log("Form submit");
            callback();
        }
    }, [errors]); 

    const handleChange = (event) => {
        event.persist(); 
        setValues((values) => ({...values, [event.target.name]: event.target.value}));
    }
    return {
        handleChange,
        handleSubmit,
        values, 
        errors
    }
}

export default useForm