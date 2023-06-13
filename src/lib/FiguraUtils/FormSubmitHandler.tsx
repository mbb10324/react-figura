
import { checkForErrors, matchNameAndType } from "./ValidationUtils";
// import React, { useState } from "react";

// //custom hook to handle all our form submissions
// export function useSubmit() {
//     // const [showError, setShowError] = useState({ bool: false, formID: "" });
//     // const [isDisabled, setIsDisabled] = useState(false)

//     function formSubmitHandler(e: any, dispatch: any, formState: any, onSubmit: any, submittedFormID: any) {
//         e.preventDefault();
//         // setIsDisabled(true)
//         let noErrors = true
//         for (const name in formState) {
//             const item = formState[name]
//             const { value } = item
//             const type = matchNameAndType(name)
//             checkForErrors(true, name, value, type, dispatch, formState, submittedFormID)
//             if (item.hasError) {
//                 noErrors = false
//                 // setShowError({ bool: true, formID: submittedFormID })
//             }
//         };
//         const formTouched = Object.values(formState).some((item: any) => item.touched);
//         //if no errors & the form has been touched trigger onSubmit function
//         if (noErrors && formTouched) {
//             onSubmit()
//         };
//         //TODO: these cause unnecessary renders, come up with a better solution to prevent multiple renders.
//         // setTimeout(() => {
//         //     setIsDisabled(false)
//         // }, 1000)
//         // setTimeout(() => {
//         //     setShowError({ bool: false, formID: submittedFormID });
//         // }, 5000);
//     };

//     return {
//         formSubmitHandler
//     };
// };

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
