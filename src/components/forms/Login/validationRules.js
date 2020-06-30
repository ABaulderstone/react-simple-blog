export default function validate({username, password}) { 
    let errors = {}
    
    
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