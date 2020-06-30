export default function validate({email, username, password}) { 
    let errors = {}
    
    if (!email) {
        errors.email = "Email address is required"
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email address is invalid" 
    } 
    
    if(!username) { 
        errors.username = "Name is required";
    } 

    if(!password) { 
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be greater than 6 characters"
    }
    return errors
}