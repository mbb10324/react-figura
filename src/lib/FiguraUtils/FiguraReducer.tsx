import { defineDefaultValues, fallBack } from "./ValidationUtils";
import { Action, FormState } from "./FiguraTypes";
import { useReducer } from "react";

//baseline state values
const initialFormState: FormState = { default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack } };

//fired on initial render of Figura component
export const INITIAL_FORM = "INITIAL_FORM";
//fired at checkForErrors
export const UPDATE_FORM = "UPDATE_FORM";
//fired when reset button is clicked
export const RESET_FORM = "RESET_FORM";

export function formsReducer(state: FormState, action: Action) {
    switch (action.type) {

        case INITIAL_FORM:
            //ensure action data exists
            if (action.data) {
                const fieldNames = action.data.fieldNames || [];
                let fieldObject = {};
                //reduce array of fieldNames to format keys and values for state
                const initialFields = fieldNames.reduce<FormState>((acc, fieldName) => {
                    let defaultValues: string = defineDefaultValues(fieldName.type);
                    if (fieldName.name) {
                        fieldObject = { [fieldName.name]: { value: defaultValues, type: fieldName.type, hasError: false, error: "", touched: false, formID: "", validator: fieldName.validation } };
                    }
                    return Object.assign(acc, fieldObject);
                }, {});
                return initialFields;
            } else {
                return state;
            }

        case UPDATE_FORM:
            if (action.data) {
                const { name, value, type, hasError, error, touched, formID, validator } = action.data;
                //ensure we were passed a name
                if (!name) { return state; }
                return {
                    ...state,
                    //update state with new values from action.data
                    [name]: { value, type, hasError, error, touched, formID, validator },
                };
            } else {
                return state;
            }

        case RESET_FORM:
            //reset state to an empty object
            return {};

        default:
            return state;
    };
};

export function useFigura() {
    const [formState, dispatch] = useReducer(formsReducer, initialFormState);
    return {
        formState,
        dispatch,
    };
};