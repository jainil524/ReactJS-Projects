
function useFieldValidator(Fields) {
    
    let FieldFunction = {
        "email": validateEmail,
        "password": passwordValidator
    };
    
    if(Fields.length === 0) return [true, true];

    let VaildationResult = Fields.map((field) => {
        let val = FieldFunction[field.name](field.value)
        return {
            [field.name]: val
        };
    });

    return VaildationResult;

}

function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) return "Email is required";

    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    // If the email format is valid, return null (no error)
    return true;
}

// write code for strong password validation which includes atleast 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum length of 8 characters and make the each validation error return on fail
function passwordValidator(password) {

    if (password.length === 0) return "Password is required";

    // Check for at least 8 characters
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
        return "Password must contain at least one number";
    }

    // Check for at least one special character
    if (!/[^A-Za-z0-9]/.test(password)) {
        return "Password must contain at least one special character";
    }

    // If all conditions pass, return null (no error)
    return true;
}



export default useFieldValidator
