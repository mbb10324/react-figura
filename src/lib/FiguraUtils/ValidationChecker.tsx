//the function that actually checks if we have errors and displays corresponding message.
export function validationChecker(type: string, value: string, formState: any) {
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
        case "buttongroup":
            return validateButtonGroup(value);
        default:
            break
    };
    return { hasError, error };
};

//validates a name
export function validateText(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "This field cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Field. Avoid Special characters" };
    }
    return { hasError: false, error: "" };
};

//validates a email
export function validateEmail(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Email cannot be empty" };
    } else if (!/^[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
        return { hasError: true, error: "Invalid Email" };
    }
    return { hasError: false, error: "" };
};

//validates a password
export function validatePassword(value: string) {
    let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" }
    } else if (!value.match(strongPassword)) {
        return { hasError: true, error: "Password must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character" }
    }
    return { hasError: false, error: "" };
};

//validates password confirmation
export function validateConfirmPassword(value: string, formState: any) {
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
export function validatePhone(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" }
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" }
    }
    return { hasError: false, error: "" };
};

//validates a checkbox
export function validateCheck(value: string) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must check this box." }
    }
    return { hasError: false, error: "" };
};

//validates a radio button
export function validateRadio(value: string) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must click this button." }
    }
    return { hasError: false, error: "" };
};

//validates a range
export function validateRange(value: string) {
    const toNumber = parseInt(value)
    if (value.trim() === "") {
        return { hasError: true, error: "You must choose a range." }
    } else if (toNumber > 100 || toNumber < 0) {
        throw new Error("The range must be between 0 and 100")
    }
    return { hasError: false, error: "" };
};

//validates a select field
export function validateSelect(value: string) {
    if (!value) {
        return { hasError: true, error: "Please choose an option" }
    }
    return { hasError: false, error: "" };
};

//validates time
export function validateTime(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format" }
    }
    return { hasError: false, error: "" };
};

//validates military time format
export function validateTimeMilitary(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" }
    }
    return { hasError: false, error: "" };
};

//validates a text area
export function validateTextArea(value: string) {
    if (value.length > 250) {
        return { hasError: true, error: "This text field cannot be longer than 250 characters" }
    }
    return { hasError: false, error: "" };
};

//validates a number
export function validateNumber(value: string) {
    const toNumber = parseInt(value)
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a number" }
    }
    if (toNumber > 1000000 || toNumber < -1000000) {
        return { hasError: true, error: "The number must be between -1 million and 1 million" }
    }
    return { hasError: false, error: "" };
};

//validates a date
export function validateDate(value: string) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date" }
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" }
    }
    return { hasError: false, error: "" };
};

//validates a local date time
export function validateDateLocal(value: string) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date and time" }
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" }
    }
    return { hasError: false, error: "" };
};

//validates a hidden field
export function validateHidden(value: string) {
    if (value.trim() !== "") {
        throw new Error("WARNING! A hidden field was filled. A bot may be attempting to interject this form.")
    }
    return { hasError: false, error: "" };
};

//validate color
export function validateColor(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a color" }
    }
    return { hasError: false, error: "" };
};

//validate week
export function validateWeek(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a week" }
    }
    return { hasError: false, error: "" };
};

//validate month
export function validateMonth(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a month" }
    }
    return { hasError: false, error: "" };
};

//validate files
export function validateFile(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a file" }
    }
    return { hasError: false, error: "" };
};

//validate urls
export function validateUrl(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a url" }
    } else if (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(value)) {
        return { hasError: true, error: "Provide a valid url" }
    }
    return { hasError: false, error: "" };
};

//validate button group
export function validateButtonGroup(value: string) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose an option" }
    }
    return { hasError: false, error: "" };
}
