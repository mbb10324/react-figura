import { validationChecker } from "./ValidationChecker";
import React from "react";

export const UPDATE_FORM = "UPDATE_FORM";

export function checkForErrors(wasTouched: any, name: any, value: any, type: any, dispatch: any, formState: any, formID: any, validator?: any) {
    let isFormValid = true;
    let { hasError, error } = { hasError: false, error: "" };

    if (validator) {
        ({ hasError, error } = validator(value));
    } else {
        ({ hasError, error } = validationChecker(type, value));
    }

    for (const key in formState) {
        const item = formState[key]
        // Check if the current field has error
        if (key === name && hasError) {
            isFormValid = false
            break
            // Check if any other field has error
        } else if (key !== name && item.hasError) {
            isFormValid = false
            break
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: { name, value, type, hasError, error, touched: wasTouched, formID, isFormValid },
    })
};

export function matchNameAndType(name: any) {
    if (name.includes("FiguraTextArea")) return "textarea"
    else if (name.includes("FiguraCheckBox")) return "checkbox"
    else if (name.includes("FiguraEmail")) return "email"
    else if (name.includes("FiguraPassword")) return "password"
    else if (name.includes("FiguraPhone")) return "tel"
    else if (name.includes("FiguraSelect")) return "select"
    else if (name.includes("FiguraText")) return "text"
    else if (name.includes("FiguraTimeMilitary")) return "time24"
    else return ""
};
