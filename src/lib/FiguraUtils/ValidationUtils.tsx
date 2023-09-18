import { Action, FormState } from "./FiguraTypes";
import * as V from "./Validation";

export function checkForErrors(
	wasTouched: boolean,
	name: string,
	value: string | undefined,
	type: string | undefined,
	dispatch: React.Dispatch<Action>,
	formState: FormState,
	formID: string
) {
	const thisName = formState[name];
	//extract validator from reducer state
	const validationFunction = thisName.validator;
	//ensure it exists
	if (validationFunction) {
		const { hasError, error } = validationFunction(value, formState);
		//update reducer with new hasError, error from validationFunction and passed in variables
		dispatch({
			type: "UPDATE_FORM",
			data: {
				name,
				value,
				type,
				hasError: hasError,
				error: error,
				touched: wasTouched,
				formID,
				validator: validationFunction,
			},
		});
		return hasError;
	}
}

//provided a displayName(name of our child components) this function
//gets called from Figura component and matches a type with the displayName
export function typeMapper(name: string) {
	const nameToType: Record<string, string> = {
		FiguraTextArea: "textarea",
		FiguraCheckBox: "checkbox",
		FiguraEmail: "email",
		FiguraPassword: "password",
		FiguraConfirmPassword: "confirmpassword",
		FiguraPhone: "tel",
		FiguraSelect: "select",
		FiguraText: "text",
		FiguraTime: "time",
		FiguraTimeMilitary: "time24",
		FiguraRadio: "radio",
		FiguraRange: "range",
		FiguraNumber: "number",
		FiguraDate: "date",
		FiguraDateLocal: "datelocal",
		FiguraHidden: "hidden",
		FiguraColor: "color",
		FiguraWeek: "week",
		FiguraMonth: "month",
		FiguraFile: "file",
		FiguraUrl: "url",
		FiguraButtonGroup: "buttongroup",
	};
	return nameToType[name] || "";
}

//provided a displayName(name of our child components) this function
//gets called from Figura component and matches a validation function with the displayName
export function validationMapper(name: string) {
	const nameToFunc: Record<string, Function> = {
		FiguraTextArea: V.validateTextArea,
		FiguraCheckBox: V.validateCheck,
		FiguraEmail: V.validateEmail,
		FiguraPassword: V.validatePassword,
		FiguraConfirmPassword: V.validateConfirmPassword,
		FiguraPhone: V.validatePhone,
		FiguraSelect: V.validateSelect,
		FiguraText: V.validateText,
		FiguraTime: V.validateTime,
		FiguraTimeMilitary: V.validateTimeMilitary,
		FiguraRadio: V.validateRadio,
		FiguraRange: V.validateRange,
		FiguraNumber: V.validateNumber,
		FiguraDate: V.validateDate,
		FiguraDateLocal: V.validateDateLocal,
		FiguraHidden: V.validateHidden,
		FiguraColor: V.validateColor,
		FiguraWeek: V.validateWeek,
		FiguraMonth: V.validateMonth,
		FiguraFile: V.validateFile,
		FiguraUrl: V.validateUrl,
		FiguraButtonGroup: V.validateButtonGroup,
	};
	return nameToFunc[name] || fallBack;
}

//always returns valid(TODO: consider better ways to handle this)
export function fallBack(value?: string) {
	if (value) return { hasError: false, error: "" };
	return { hasError: false, error: "" };
}

//this function accounts for edge case default values
export function defineDefaultValues(type: string | undefined) {
	let typeValue = "";
	if (type === "color") return (typeValue = "#000000");
	if (type === "range" || type === "checkbox") return (typeValue = "false");
	return typeValue;
}
