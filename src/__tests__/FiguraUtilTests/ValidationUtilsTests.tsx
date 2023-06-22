import { checkForErrors, typeMapper, validationMapper, fallBack, defineDefaultValues } from '../../lib/FiguraUtils/ValidationUtils';
import * as V from '../../lib/FiguraUtils/Validation';
import { FormState } from '../../lib/FiguraUtils/FiguraTypes';

const mockDispatch = jest.fn();

const mockFormState: FormState = {
    name: { validator: fallBack },
};

const mockFormStateNoValidator = {
    name: { value: 'value', validator: undefined },
};

describe("checkForErrors", () => {
    test("validationFunction exists", async () => {
        const error = await checkForErrors(true, 'name', 'value', 'type', mockDispatch, mockFormState, 'formID');
        expect(error).toBeDefined();
        expect(mockDispatch).toBeCalled();
    });

    test("validationFunction doesn't exist", async () => {
        const error = await checkForErrors(true, 'name', 'value', 'type', mockDispatch, mockFormStateNoValidator, 'formID');
        expect(error).toBeUndefined();
    });
});

describe("typeMapper", () => {
    test("matches type", () => {
        expect(typeMapper("FiguraPassword")).toEqual("password");
    });

    test("returns empty string for unknown type", () => {
        expect(typeMapper("UnknownType")).toEqual("");
    });
});

describe("validationMapper", () => {
    test("matches function", () => {
        expect(validationMapper("FiguraPassword")).toBe(V.validatePassword);
    });

    test("returns fallBack function for unknown name", () => {
        expect(validationMapper("UnknownName")).toBe(fallBack);
    });
});

describe("fallBack", () => {
    test("returns valid state", () => {
        expect(fallBack("value")).toEqual({ hasError: false, error: "" });
        expect(fallBack()).toEqual({ hasError: false, error: "" });
    });
});

describe("defineDefaultValues", () => {
    test("returns correct default values based on type", () => {
        expect(defineDefaultValues("color")).toEqual("#000000");
        expect(defineDefaultValues("range")).toEqual("false");
        expect(defineDefaultValues("checkbox")).toEqual("false");
        expect(defineDefaultValues("unknown")).toEqual("");
    });
});