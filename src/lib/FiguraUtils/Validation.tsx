import { UPDATE_FORM } from "./ValidationUtils";
import React, { useReducer } from "react";

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
    };
};

export function useFormValidation(initialFieldNames = []) {
    const initialFields = initialFieldNames.reduce((fields, fieldName) => {
        fields[fieldName] = { value: "", type: "", hasError: false, error: "", touched: false, formID: "" };
        return fields;
    }, {} as any);
    const [formState, dispatch] = useReducer(formsReducer, {
        ...initialFormState,
        fields: initialFields,
    });
    const mergedFormState = { ...initialFields, ...formState.fields };
    return {
        formState: mergedFormState,
        dispatch,
    };
};