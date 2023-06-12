import { validationChecker } from "./ValidationChecker";
import React from "react";

export const UPDATE_FORM = "UPDATE_FORM";

export function checkForErrors(wasTouched: any, name: any, value: any, dispatch: any, formState: any, formID: any) {
    const { hasError, error } = validationChecker(name, value);
    let isFormValid = true;

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
        data: { name, value, hasError, error, touched: wasTouched, formID, isFormValid },
    })
}
