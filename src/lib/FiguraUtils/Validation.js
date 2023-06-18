//validates a name
export function validateText(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "This field cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Field. Avoid Special characters" };
    }
    return { hasError: false, error: "" };
};

//validates a email
export function validateEmail(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Email cannot be empty" };
    } else if (!/^[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
        return { hasError: true, error: "Invalid Email" };
    }
    return { hasError: false, error: "" };
};

//validates a password
export function validatePassword(value) {
    let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" };
    } else if (!value.match(strongPassword)) {
        return { hasError: true, error: "Password must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character" };
    }
    return { hasError: false, error: "" };
};

//validates password confirmation
export function validateConfirmPassword(value, formState) {
    if (value.trim() === "") {
        return { hasError: true, error: "Confirmation cannot be empty" };
    }
    for (const name in formState) {
        const item = formState[name];
        const { type } = item;
        if (type === "password") {
            if (item.value !== value) {
                return { hasError: true, error: "Your password does not match" };
            }
        }
    }
    return { hasError: false, error: "" };
};

//validates a phone number
export function validatePhone(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" };
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" };
    }
    return { hasError: false, error: "" };
};

//validates a checkbox
export function validateCheck(value) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must check this box." };
    }
    return { hasError: false, error: "" };
};

//validates a radio button
export function validateRadio(value) {
    if (value.trim() === "false" || value.trim() === "") {
        return { hasError: true, error: "You must click this button." };
    }
    return { hasError: false, error: "" };
};

//validates a range
export function validateRange(value) {
    const toNumber = parseInt(value);
    if (value.trim() === "") {
        return { hasError: true, error: "You must choose a range." };
    } else if (toNumber > 100 || toNumber < 0) {
        throw new Error("The range must be between 0 and 100");
    }
    return { hasError: false, error: "" };
};

//validates a select field
export function validateSelect(value) {
    if (!value) {
        return { hasError: true, error: "Please choose an option" };
    }
    return { hasError: false, error: "" };
};

//validates time
export function validateTime(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" };
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format" };
    }
    return { hasError: false, error: "" };
};

//validates military time format
export function validateTimeMilitary(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" };
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" };
    }
    return { hasError: false, error: "" };
};

//validates a text area
export function validateTextArea(value) {
    if (value.length > 250) {
        return { hasError: true, error: "This text field cannot be longer than 250 characters" };
    }
    return { hasError: false, error: "" };
};

//validates a number
export function validateNumber(value) {
    const toNumber = parseInt(value);
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a number" };
    }
    if (toNumber > 1000000 || toNumber < -1000000) {
        return { hasError: true, error: "The number must be between -1 million and 1 million" };
    }
    return { hasError: false, error: "" };
};

//validates a date
export function validateDate(value) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])");
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date" };
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" };
    }
    return { hasError: false, error: "" };
};

//validates a local date time
export function validateDateLocal(value) {
    let dateFormat = new RegExp("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])");
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a date and time" };
    } else if (!value.match(dateFormat)) {
        return { hasError: true, error: "Provide a valid date format" };
    }
    return { hasError: false, error: "" };
};

//validates a hidden field
export function validateHidden(value) {
    if (value.trim() !== "") {
        throw new Error("WARNING! A hidden field was filled. A bot may be attempting to interject this form.");
    }
    return { hasError: false, error: "" };
};

//validate color
export function validateColor(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a color" };
    }
    return { hasError: false, error: "" };
};

//validate week
export function validateWeek(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a week" };
    }
    return { hasError: false, error: "" };
};

//validate month
export function validateMonth(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a month" };
    }
    return { hasError: false, error: "" };
};

//validate files
export function validateFile(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose a file" };
    }
    return { hasError: false, error: "" };
};

//validate urls
export function validateUrl(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Provide a url" };
    } else if (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(value)) {
        return { hasError: true, error: "Provide a valid url" };
    }
    return { hasError: false, error: "" };
};

//validate button group
export function validateButtonGroup(value) {
    if (value.trim() === "") {
        return { hasError: true, error: "Choose an option" };
    }
    return { hasError: false, error: "" };
};