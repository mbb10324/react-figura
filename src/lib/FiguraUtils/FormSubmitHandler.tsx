import { checkForErrors } from "./ValidationUtils";
import { Action, FormState } from "./FiguraTypes";

export async function formSubmitHandler(e: React.FormEvent<HTMLFormElement>, dispatch: React.Dispatch<Action>,
    formState: FormState, submittedFormID: string, onSubmit?: (data: Record<string, string>) => void) {
    e.preventDefault();
    let noErrors = true;
    let data: Record<string, string> = {};
    for (const name in formState) {
        //extract 'item' as the value of key 'name'
        const item = formState[name];
        const { value, formID, type } = item;
        //asynchronously run validation on every field in form
        let hasError = await checkForErrors(true, name, value, type, dispatch, formState, submittedFormID);
        if (hasError) {
            noErrors = false;
            //if formID's match, and we have a valid value; push the name and value to the data object
        } else if (formID === submittedFormID && value && value.trim() !== "") {
            data[name] = value;
        }
    };
    //if no errors & the onSubmit function exists; trigger onSubmit function
    if (noErrors && onSubmit) {
        onSubmit(data);
    };
};