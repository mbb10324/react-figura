import React from "react";

//the function that actually checks if we have errors and displays corresponding message.
export function validationChecker(type: any, value: any) {
    let hasError = false
    let error = ""
    switch (type) {
        case "text":
            return validateText(value);
        case "email":
            return validateEmail(value);
        case "password":
            return validatePassword(value);
        case "tel":
            return validatePhone(value);
        case "checkbox":
            return validateCheck(value);
        case "select":
            return validateSelect(value);
        case "time24":
            return validateTimeMilitary(value);
        case "textarea":
            return validateTextArea(value);
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
    if (value.trim() === "false") {
        return { hasError: true, error: "You must check this box." }
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

//validates time format
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
