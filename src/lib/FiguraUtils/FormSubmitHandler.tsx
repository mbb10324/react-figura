
import { checkForErrors, matchNameAndType } from "./ValidationUtils";
import React from "react";

export function formSubmitHandler(e: any, dispatch: any, formState: any, onSubmit: any, submittedFormID: any) {
    e.preventDefault();
    let noErrors = true
    for (const name in formState) {
        const item = formState[name]
        const { value } = item
        const type = matchNameAndType(name)
        checkForErrors(true, name, value, type, dispatch, formState, submittedFormID)
        if (item.hasError) {
            noErrors = false
        }
    };
    const formTouched = Object.values(formState).some((item: any) => item.touched);
    //if no errors & the form has been touched trigger onSubmit function
    if (noErrors && formTouched) {
        onSubmit()
    };
};
