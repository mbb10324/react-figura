import { checkForErrors } from "./ValidationUtils";
import { Action, FormState } from "./FiguraTypes";

export function formSubmitHandler(
	e: React.FormEvent<HTMLFormElement>,
	dispatch: React.Dispatch<Action>,
	formState: FormState,
	submittedFormID: string,
	onSubmit?: (data: Record<string, string>) => void
) {
	e.preventDefault();
	let noErrors = true;
	let formIdMatches = false;
	let data: Record<string, string> = {};
	for (const name in formState) {
		//extract 'item' as the value of key 'name'
		const item = formState[name];
		const { value, formID, type } = item;
		//asynchronously run validation on every field in form
		let hasError = checkForErrors(true, name, value, type, dispatch, formState, submittedFormID);
		if (hasError) {
			noErrors = false;
		}
		//if formID's match, and we have a valid value; push the name and value to the data object
		if (formID === submittedFormID && value && value.trim() !== "") {
			data[name] = value;
			formIdMatches = true;
		}
	}
	//if no errors & the onSubmit function exists; trigger onSubmit function
	if (noErrors && formIdMatches && onSubmit) {
		onSubmit(data);
	}
}
