import { UPDATE_FORM } from "./ValidationUtils";
import { useReducer } from "react";
import React from "react";

const initialFormState = {
    fields: {},
    isFormValid: false,
};

function formsReducer(state: any, action: any) {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, type, hasError, error, touched, formID, isFormValid } = action.data;
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [name]: { value, type, hasError, error, touched, formID },
                },
                isFormValid,
            };
        default:
            return state;
    }
}

export function useFormValidation(initialFieldNames = []) {
    const initialFields = initialFieldNames.reduce((fields, fieldName) => {
        fields[fieldName] = { value: "", type: "", hasError: false, error: "", touched: false, formID: "" };
        return fields;
    }, {} as any); // Specify type as any

    const [formState, dispatch] = useReducer(formsReducer, {
        ...initialFormState,
        fields: initialFields,
    });

    // Merge the initialFields with the dynamically created formState
    const mergedFormState = { ...initialFields, ...formState.fields };

    return {
        formState: mergedFormState,
        dispatch,
    };
}