import { useReducer } from "react";
import { UPDATE_FORM } from "./ValidationUtils";
import React from 'react';

//as we get new input names, we just add them to the formtypes and initialstate
interface FormTypes {
    name: any;
    email: any;
    password: any;
    mobile: any;
    check: any;
    select: any;
    time: any;
    notes: any;
    isFormValid: any;
}

const initialFormState: FormTypes = {
    name: { value: "", touched: false, hasError: false, error: "", formID: "" },
    email: { value: "", touched: false, hasError: false, error: "", formID: "" },
    password: { value: "", touched: false, hasError: false, error: "", formID: "" },
    mobile: { value: "", touched: false, hasError: false, error: "", formID: "" },
    check: { value: false, touched: false, hasError: false, error: "", formID: "" },
    select: { value: false, touched: false, hasError: false, error: "", formID: "" },
    time: { value: "", touched: false, hasError: false, error: "", formID: "" },
    notes: { value: "", touched: false, hasError: false, error: "", formID: "" },
    isFormValid: false,
}

//reducer handler that will make the call to update state for each field and retain state of any previously updated fields
function formsReducer(state: any, action: any) {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, formID, isFormValid } = action.data
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched, formID },
                isFormValid,
            }
        default:
            return state
    }
}

//this is where our useReducer is defined
export function useFormValidation() {
    const [formState, dispatch] = useReducer<any>(formsReducer, initialFormState)
    return {
        formState,
        dispatch
    }
}
