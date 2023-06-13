import React from "react";

//the function that actually checks if we have errors and displays corresponding message.
export function validationChecker(type: any, value: any) {
    let hasError = false
    let error = ""
    switch (type) {
        case "name":
            return validateName(value);
        case "email":
            return validateEmail(value);
        case "password":
            return validatePassword(value);
        case "phone":
            return validatePhone(value);
        case "check":
            return validateCheck(value);
        case "select":
            return validateSelect(value);
        case "time":
            return validateTime(value);
        case "notes":
            return validateNotes(value);
        default:
            break
    }
    return { hasError, error }
}

//validates a name
export function validateName(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Name cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Name. Avoid Special characters" };
    }
    return { hasError: false, error: "" };
}

//validates a email
export function validateEmail(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Email cannot be empty" };
    } else if (!/^[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
        return { hasError: true, error: "Invalid Email" };
    }
    return { hasError: false, error: "" };
}

//validates a password
export function validatePassword(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" }
    } else if (value.trim().length < 8) {
        return { hasError: true, error: "Password must have at least 8 characters" }
    }
    return { hasError: false, error: "" };
}

//validates a phone number
export function validatePhone(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" }
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" }
    }
    return { hasError: false, error: "" };
}

//validates a checkbox
export function validateCheck(value: any) {
    if (value.trim() === "false") {
        return { hasError: true, error: "You must check this box." }
    }
    return { hasError: false, error: "" };
}

//validates a select field
export function validateSelect(value: any) {
    if (!value) {
        return { hasError: true, error: "Please choose an option" }
    }
    return { hasError: false, error: "" };
}

//validates time format
export function validateTime(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" }
    }
    return { hasError: false, error: "" };
}

//validates a text area
export function validateNotes(value: any) {
    if (value.length > 200) {
        return { hasError: true, error: "Notes cannot be longer than 200 characters" }
    }
    return { hasError: false, error: "" };
}
