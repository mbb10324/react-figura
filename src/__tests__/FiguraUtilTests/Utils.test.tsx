import { checkForErrors, matchNameAndType } from "../../lib/FiguraUtils/ValidationUtils";
import { UPDATE_FORM } from "../../lib/FiguraUtils/Validation";

describe("checkForErrors", () => {
    it("should dispatch the UPDATE_FORM action with the correct data when validator is provided", () => {
        const wasTouched = true;
        const name = "exampleField";
        const value = "exampleValue";
        const type = "text";
        const dispatch = jest.fn();
        const formState = { /* mock form state */ };
        const formID = "exampleForm";
        const validator = (value: string) => {
            return { hasError: false, error: "" };
        };

        checkForErrors(wasTouched, name, value, type, dispatch, formState, formID, validator);

        expect(dispatch).toHaveBeenCalledWith({
            type: UPDATE_FORM,
            data: {
                name,
                value,
                type,
                hasError: false,
                error: "",
                touched: wasTouched,
                formID,
            },
        });
    });

    it("should dispatch the UPDATE_FORM action with the correct data when validator is not provided", () => {
        const wasTouched = true;
        const name = "exampleField";
        const value = "exampleValue";
        const type = "text";
        const dispatch = jest.fn();
        const formState = { /* mock form state */ };
        const formID = "exampleForm";

        checkForErrors(wasTouched, name, value, type, dispatch, formState, formID);

        expect(dispatch).toHaveBeenCalledWith({
            type: UPDATE_FORM,
            data: {
                name,
                value,
                type,
                hasError: false, // Adjust this based on your validationChecker logic
                error: "", // Adjust this based on your validationChecker logic
                touched: wasTouched,
                formID,
            },
        });
    });
});

describe("matchNameAndType", () => {
    it("should return the correct type for the given name", () => {
        const name = "FiguraText";
        const result = matchNameAndType(name);
        expect(result).toBe("text");
    });

    // Add more test cases for different input names and expected types
});