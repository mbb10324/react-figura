import { defineDefaultValues, fallBack } from "./ValidationUtils";
import { Action, FormState } from "./FiguraTypes";
import { useReducer } from "react";

//baseline state values
export const initialFormState: FormState = {
	default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
};

export function formsReducer(state: FormState, action: Action): FormState {
	switch (action.type) {
		case "INITIAL_FORM":
			//ensure action data exists
			if (action.data && action.data.fieldNames) {
				const fieldNames = action.data.fieldNames;
				let fieldObject = {};
				//reduce array of fieldNames to format keys and values for state
				const initialFields = fieldNames.reduce<FormState>((acc, fieldName) => {
					let defaultValues: string = defineDefaultValues(fieldName.type);
					if (fieldName.name) {
						fieldObject = {
							[fieldName.name]: {
								value: defaultValues,
								type: fieldName.type,
								hasError: false,
								error: "",
								touched: false,
								formID: fieldName.formID,
								validator: fieldName.validation,
							},
						};
					}
					return Object.assign(acc, fieldObject);
				}, {});
				return initialFields;
			} else {
				return state;
			}

		case "UPDATE_FORM":
			if (action.data && action.data.name) {
				const { name, value, type, hasError, error, touched, formID, validator } = action.data;
				return {
					...state,
					//update state with new values from action.data
					[name]: { value, type, hasError, error, touched, formID, validator },
				};
			} else {
				return state;
			}

		case "INPUT_UPDATE":
			if (action.data === undefined || action.data.name === undefined) {
				return state;
			}
			const validator = state[action.data.name].validator;
			const { name, value, type, touched } = action.data;
			const { hasError, error } = validator(value, state);
			return {
				...state,
				[name]: { value, type, hasError, error, touched, formID: state[name]?.formID, validator: state[name].validator },
			};

		case "RESET_FORM":
			//reset state to an empty object
			return initialFormState;

		default:
			return state;
	}
}

export function useFigura() {
	const [formState, dispatch] = useReducer(formsReducer, initialFormState);
	return {
		formState,
		dispatch,
	};
}
