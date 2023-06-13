
import { checkForErrors, matchNameAndType } from "./ValidationUtils";
import React, { useState } from "react";

//custom hook to handle all our form submissions
export function useSubmit() {
    const [showError, setShowError] = useState({ bool: false, formID: "" });

    function formSubmitHandler(e: any, dispatch: any, formState: any, onSubmit: any, submittedFormID: any) {
        e.preventDefault();
        for (const name in formState) {
            const item = formState[name]
            const { value } = item
            const type = matchNameAndType(name)
            checkForErrors(true, name, value, type, dispatch, formState, submittedFormID)
            if (item.hasError) {
                setShowError({ bool: true, formID: submittedFormID })
            };
        };
        //if no errors trigger onSubmit function
        if (!showError.bool) {
            onSubmit();
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
