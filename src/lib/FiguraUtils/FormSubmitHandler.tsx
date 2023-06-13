
import { checkForErrors, matchNameAndType } from "./ValidationUtils";
import React, { useState } from "react";

//custom hook to handle all our form submissions
export function useSubmit() {
    const [showError, setShowError] = useState({ bool: false, formID: "" });

    function formSubmitHandler(e: any, dispatch: any, formState: any, onSubmit: any, submittedFormID: any) {
        e.preventDefault();
        let noErrors = true
        for (const name in formState) {
            const item = formState[name]
            const { value } = item
            const type = matchNameAndType(name)
            checkForErrors(true, name, value, type, dispatch, formState, submittedFormID)
            if (item.hasError) {
                noErrors = false
                setShowError({ bool: true, formID: submittedFormID })
            }
        };
        const formTouched = Object.values(formState).some((item: any) => item.touched);
        //if no errors & the form has been touched trigger onSubmit function
        if (noErrors && formTouched) {
            onSubmit()
        };
        //show the big popup for 5 seconds (this is subjective)
        setTimeout(() => {
            setShowError({ bool: false, formID: submittedFormID });
        }, 5000);
    };

    return {
        showError,
        formSubmitHandler
    };
};
