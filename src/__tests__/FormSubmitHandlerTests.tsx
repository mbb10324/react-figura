import * as ValidationUtils from "../lib/FiguraUtils/ValidationUtils";
import { formSubmitHandler } from "../lib/FiguraUtils/FormSubmitHandler";

jest.mock("../../lib/FiguraUtils/ValidationUtils");

const mockDispatch = jest.fn();
const mockOnSubmit = jest.fn();

const mockFormState = {
    fieldName: {
        value: "testValue",
        formID: "testFormID",
        type: "testType",
        validator: ValidationUtils.fallBack
    },
};

const mockEvent = {
    preventDefault: jest.fn(),
};

describe("formSubmitHandler", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("successful form submission", async () => {
        (ValidationUtils.checkForErrors as jest.MockedFunction<typeof ValidationUtils.checkForErrors>).mockResolvedValue(false);
        await formSubmitHandler(mockEvent as any, mockDispatch, mockFormState, "testFormID", mockOnSubmit);
        expect(mockOnSubmit).toHaveBeenCalledWith({ fieldName: "testValue" });
    });

    test("form submission with errors", async () => {
        (ValidationUtils.checkForErrors as jest.MockedFunction<typeof ValidationUtils.checkForErrors>).mockResolvedValue(true);
        await formSubmitHandler(mockEvent as any, mockDispatch, mockFormState, "testFormID", mockOnSubmit);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test("form submission without onSubmit function", async () => {
        (ValidationUtils.checkForErrors as jest.MockedFunction<typeof ValidationUtils.checkForErrors>).mockResolvedValue(false);
        await formSubmitHandler(mockEvent as any, mockDispatch, mockFormState, "testFormID");
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test("form submission with non-matching formID", async () => {
        (ValidationUtils.checkForErrors as jest.MockedFunction<typeof ValidationUtils.checkForErrors>).mockResolvedValue(false);
        const nonMatchingFormState = {
            ...mockFormState,
            fieldName: {
                ...mockFormState.fieldName,
                formID: "nonMatchingFormID",
            },
        };
        await formSubmitHandler(mockEvent as any, mockDispatch, nonMatchingFormState, "testFormID", mockOnSubmit);
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});