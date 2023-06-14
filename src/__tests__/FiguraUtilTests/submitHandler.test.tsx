import { formSubmitHandler } from "../../lib/FiguraUtils/FormSubmitHandler";

describe("formSubmitHandler", () => {
    let e, dispatch, formState, onSubmit, submittedFormID, checkForErrors, matchNameAndType;

    beforeEach(() => {
        e = {
            preventDefault: jest.fn(),
        };
        dispatch = jest.fn();
        formState = {
            // Mock your form state here
        };
        onSubmit = jest.fn();
        submittedFormID = "form1";
        checkForErrors = jest.fn();
        matchNameAndType = jest.fn();
    });

    test("should prevent default form submission", () => {
        formSubmitHandler(e, dispatch, formState, onSubmit, submittedFormID);

        expect(e.preventDefault).toHaveBeenCalledTimes(1);
    });

    test("should call checkForErrors for each form input", () => {
        formSubmitHandler(e, dispatch, formState, onSubmit, submittedFormID);

        // Loop through formState and assert that checkForErrors was called for each input
        for (const name in formState) {
            const item = formState[name];
            const { value } = item;
            const type = matchNameAndType(name);

            expect(checkForErrors).toHaveBeenCalledWith(true, name, value, type, dispatch, formState, submittedFormID);
        }
    });

    test("should not call onSubmit if there are errors", () => {
        // Mock formState with errors
        formState = {
            input1: {
                value: "some value",
                hasError: true,
            },
            // Add more inputs with errors if needed
        };

        formSubmitHandler(e, dispatch, formState, onSubmit, submittedFormID);

        expect(onSubmit).not.toHaveBeenCalled();
    });

    test("should call onSubmit if there are no errors and the form has been touched", () => {
        // Mock formState without errors
        formState = {
            input1: {
                value: "some value",
                hasError: false,
                touched: true,
            },
            // Add more inputs without errors if needed
        };

        formSubmitHandler(e, dispatch, formState, onSubmit, submittedFormID);

        expect(onSubmit).toHaveBeenCalledTimes(1);
        // Add more assertions if needed
    });

    // Add more test cases as needed
});