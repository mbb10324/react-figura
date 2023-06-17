import { checkForErrors } from "./ValidationUtils";

export async function formSubmitHandler(e, dispatch, formState, onSubmit, submittedFormID) {
    e.preventDefault();
    let noErrors = true
    let data = {}
    for (const name in formState) {
        const item = formState[name]
        const { value, formID, type } = item
        let hasError = await checkForErrors(true, name, value, type, dispatch, formState, submittedFormID)
        if (hasError) {
            noErrors = false
        } else if (formID === submittedFormID && value.trim() !== "") {
            data[name] = value
        }
    };
    //if no errors & the form has been touched trigger onSubmit function
    if (noErrors) {
        onSubmit(data)
    };
};