import React from "react";

//the function that actually checks if we have errors and displays corresponding message.
export function validationChecker(type: any, value: any, formState: any) {
    let hasError = false
    let error = ""
    switch (type) {
        case "text":
            return validateText(value);
        case "email":
            return validateEmail(value);
        case "password":
            return validatePassword(value);
        case "confirmpassword":
            return validateConfirmPassword(value, formState);
        case "tel":
            return validatePhone(value);
        case "checkbox":
            return validateCheck(value);
        case "radio":
            return validateRadio(value);
        case "range":
            return validateRange(value);
        case "select":
            return validateSelect(value);
        case "time":
            return validateTime(value);
        case "time24":
            return validateTimeMilitary(value);
        case "textarea":
            return validateTextArea(value);
        case "number":
            return validateNumber(value);
        case "date":
            return validateDate(value);
        case "datelocal":
            return validateDateLocal(value);
        case "hidden":
            return validateHidden(value);
        case "color":
            return validateColor(value);
        case "week":
            return validateWeek(value);
        case "month":
            return validateMonth(value);
        case "file":
            return validateFile(value);
        case "url":
            return validateUrl(value);
        default:
            break
    };
    return { hasError, error };
};

//validates a name
function validateText(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "This field cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Field. Avoid Special characters" };
    }
    return { hasError: false, error: "" };
};

//validates a email
function validateEmail(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Email cannot be empty" };
    } else if (!/^[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
        return { hasError: true, error: "Invalid Email" };
    }
    return { hasError: false, error: "" };
};

//validates a password
function validatePassword(value: any) {
    let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" }
    } else if (!value.match(strongPassword)) {
        return { hasError: true, error: "Password must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character" }
    }
    return { hasError: false, error: "" };
};

//validates password confirmation
function validateConfirmPassword(value: any, formState: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Confirmation cannot be empty" }
    }
    for (const name in formState) {
        const item = formState[name]
        const { type } = item
        if (type === "password") {
            if (item.value !== value) {
                return { hasError: true, error: "Your password does not match" };
            }
        }
    }
    return { hasError: false, error: "" };
};

//validates a phone number
function validatePhone(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" }
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" }
    }
    return { hasError: false, error: "" };
};

//validates a checkbox
function validateCheck(value: any) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must check this box." }
    }
    return { hasError: false, error: "" };
};

//validates a radio button
function validateRadio(value: any) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must click this button." }
    }
    return { hasError: false, error: "" };
};

//validates a range
function validateRange(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "You must choose a range." }
    } else if (value > 100 || value < 0) {
        throw new Error("The range must be between 0 and 100")
    }
    return { hasError: false, error: "" };
};

//validates a select field
function validateSelect(value: any) {
    if (!value) {
        return { hasError: true, error: "Please choose an option" }
    }
    return { hasError: false, error: "" };
};

//validates time
function validateTime(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format" }
    }
    return { hasError: false, error: "" };
};

//validates military time format
function validateTimeMilitary(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" }
    }
    return { hasError: false, error: "" };
};

//validates a text area
function validateTextArea(value: any) {
    if (value.length > 250) {
        return { hasError: true, error: "This text field cannot be longer than 250 characters" }
    }
    return { hasError: false, error: "" };
};

//validates a number
function validateNumber(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a number" }
    }
    if (value > 1000000 || value < -1000000) {
        return { hasError: true, error: "The number must be between -1 million and 1 million" }
    }
    return { hasError: false, error: "" };
};

//validates a date
function validateDate(value: any) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date" }
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" }
    }
    return { hasError: false, error: "" };
}

//validates a local date time
function validateDateLocal(value: any) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date and time" }
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" }
    }
    return { hasError: false, error: "" };
}

//validates a hidden field
function validateHidden(value: any) {
    if (value.trim() !== "") {
        throw new Error("WARNING! A hidden field was filled. A bot may be attempting to interject this form.")
    }
    return { hasError: false, error: "" };
}

//validate color
function validateColor(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a color" }
    }
    return { hasError: false, error: "" };
}

//validate week
function validateWeek(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a week" }
    }
    return { hasError: false, error: "" };
}

//validate month
function validateMonth(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a month" }
    }
    return { hasError: false, error: "" };
}

//validate files
function validateFile(value: any) {
    console.log(value)
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a file" }
    }
    return { hasError: false, error: "" };
}

//validate urls
function validateUrl(value: any) {
    console.log(value)
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a url" }
    }
    return { hasError: false, error: "" };
}
