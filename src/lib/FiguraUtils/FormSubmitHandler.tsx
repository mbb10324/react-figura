import { validationChecker } from "./ValidationChecker"
import { UPDATE_FORM } from "./ValidationUtils"
import { useState } from "react"
import React from 'react';

//custom hook to handle all of our form submissions
export function useSubmit() {
    const [showError, setShowError] = useState({ bool: false, formID: '' })

    function formSubmitHandler(e: any, formState: any, dispatch: any, endpoint: any, submittedFormID: any) {
        e.preventDefault()
        let isFormValid = true
        //decipher if we have errors
        for (const name in formState) {
            const item = formState[name]
            const { value, formID } = item
            const { hasError, error } = validationChecker(name, value)
            if (hasError) {
                isFormValid = false
            }
            if (formID) {
                dispatch({
                    type: UPDATE_FORM,
                    data: { name, value, hasError, error, touched: true, formID, isFormValid },
                })
            }
        }

        if (!formState.isFormValid) {
            setShowError({ bool: true, formID: submittedFormID })
        } else {
            //this is where you would make your api call, for example (api.createSoldierAccount)
            console.log(endpoint)
            console.log(formState)
        }

        //show the big popup for 5 seconds (this is subjective)
        setTimeout(() => {
            setShowError({ bool: false, formID: submittedFormID })
        }, 5000)
    }

    return {
        showError,
        formSubmitHandler
    }
}
