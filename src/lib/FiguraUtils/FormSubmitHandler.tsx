import { validationChecker } from "./ValidationChecker";
import { useState } from "react";
import React from "react";

//custom hook to handle all of our form submissions
export function useSubmit() {
    const [showError, setShowError] = useState({ bool: false, formID: "" });

    function formSubmitHandler(e: any, formState: any, endpoint: any, submittedFormID: any) {
        e.preventDefault();
        let isFormValid = true;
        //decipher if we have errors
        for (const name in formState) {
            const item = formState[name]
            const { value } = item
            const { hasError } = validationChecker(name, value)
            if (hasError) {
                isFormValid = false
            }
            //TODO: add a method to set formID form entire form even on submit, and check those fields only
        };

        if (!formState.isFormValid) {
            setShowError({ bool: true, formID: submittedFormID })
        } else {
            //this is where you would make your api call, for example (https://some.api.endpoint/)
            console.log(endpoint)
        };

        //show the big popup for 5 seconds (this is subjective)
        setTimeout(() => {
            setShowError({ bool: false, formID: submittedFormID })
        }, 5000);
    };

    return {
        showError,
        formSubmitHandler
    };
};
