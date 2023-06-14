import { UPDATE_FORM } from "../../lib/FiguraUtils/ValidationUtils";
import { useReducer } from "react";
import { formsReducer, useFormValidation } from "../../lib/FiguraUtils/Validation";

describe("formsReducer", () => {
    test("should update form state when receiving UPDATE_FORM action", () => {
        const initialState = {
            fields: {},
        };

        const action = {
            type: UPDATE_FORM,
            data: {
                name: "input1",
                value: "some value",
                type: "text",
                hasError: false,
                error: "",
                touched: true,
                formID: "form1",
            },
        };

        const expectedState = {
            fields: {
                input1: {
                    value: "some value",
                    type: "text",
                    hasError: false,
                    error: "",
                    touched: true,
                    formID: "form1",
                },
            },
        };

        const newState = formsReducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("should return the current state for unknown action types", () => {
        const initialState = {
            fields: {},
        };

        const action = {
            type: "UNKNOWN_ACTION",
            data: {},
        };

        const newState = formsReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});

