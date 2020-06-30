export default function validate(values) { 
    let errors = {}
    console.log(values);
    if (!values.email) {
        errors.email = "Email address is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid" 
    } 
    
    if(!values.username) { 
        errors.username = "Name is required";
    } 

    if(!values.password) { 
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be greater than 6 characters"
    }
    return errors
}