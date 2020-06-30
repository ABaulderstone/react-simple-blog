export default function validate({title, content}) { 
    let errors = {}
    if(!title) {
        errors.title = "Title is required";
    }

    
    
    return errors
}