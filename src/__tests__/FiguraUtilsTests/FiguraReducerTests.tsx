import { act, renderHook } from '@testing-library/react';
import { formsReducer, initialFormState, useFigura } from '../../lib/FiguraUtils/FiguraReducer';
import { FormState, Action } from "../../lib/FiguraUtils/FiguraTypes";
import { fallBack } from "../../lib/FiguraUtils/ValidationUtils";

describe('formsReducer', () => {

    test('returns initial state when no action is passed', () => {
        const state = formsReducer(initialFormState, { type: 'UNKNOWN_ACTION' } as Action);
        expect(state).toEqual(initialFormState);
    });

    test('updates state correctly when INITIAL_FORM action is passed with data', () => {
        const action: Action = {
            type: 'INITIAL_FORM',
            data: {
                fieldNames: [
                    { name: 'test', type: 'text', validation: fallBack },
                ],
            },
        };
        const expectedState: FormState = {
            test: { value: "", type: "text", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
        };
        const state = formsReducer(initialFormState, action);
        expect(state).toEqual(expectedState);
    });

    test("INITIAL_FORM returns original state if action.data is undefine", () => {
        const initialState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        }
        const action: Action = {
            type: 'INITIAL_FORM',
        };
        const state = formsReducer(initialState, action);
        expect(state).toEqual(initialState)
    })

    test("INITIAL_FORM if no fieldNames make fieldNames an empty array", () => {
        const action: Action = {
            type: 'INITIAL_FORM',
            data: {
                fieldNames: [],
            },
        };
        const initialState: FormState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
        };
        const expectedState = {}
        const state = formsReducer(initialState, action);
        expect(state).toEqual(expectedState)
    })

    test("INITIAL_FORM if no fieldName.name make fieldNames an empty array", () => {
        const action: Action = {
            type: 'INITIAL_FORM',
            data: {
                fieldNames: [
                    { type: 'text', validation: fallBack },
                ],
            },
        };
        const initialState: FormState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
        };
        const expectedState = {}
        const state = formsReducer(initialState, action);
        expect(state).toEqual(expectedState)
    })

    test('UPDATE_FORM updates state correctly when action is passed with data', () => {
        const action: Action = {
            type: 'UPDATE_FORM',
            data: {
                name: "text", value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack
            },
        };
        const expectedState: FormState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        };
        const state = formsReducer(initialFormState, action);
        expect(state).toEqual(expectedState);
    });

    test("UPDATE_FORM returns original state if action.data is undefine", () => {
        const initialState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        }
        const action: Action = {
            type: 'UPDATE_FORM',
            data: {
                fieldNames: [
                    { type: 'text', validation: fallBack },
                ],
            },
        };
        const state = formsReducer(initialState, action);
        expect(state).toEqual(initialState)
    })

    test("UPDATE_FORM returns original state if action.data is undefine", () => {
        const initialState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        }
        const action: Action = {
            type: 'UPDATE_FORM',
        };
        const state = formsReducer(initialState, action);
        expect(state).toEqual(initialState)
    })

    test('INPUT_UPDATE updates the state correctly', () => {
        const initialState = { fieldName: { value: '', type: 'text', hasError: false, error: '', touched: false, validator: jest.fn().mockReturnValue({ hasError: false, error: '' }) } };
        const action = {
            type: "INPUT_UPDATE",
            data: { name: 'fieldName', value: 'newValue', type: 'text', touched: true }
        };
        const expectedState = { fieldName: { value: 'newValue', type: 'text', hasError: false, error: '', touched: true, validator: initialState.fieldName.validator } };
        expect(formsReducer(initialState, action)).toEqual(expectedState);
    });

    test('INPUT_UPDATE calls the validation function and updates the state correctly', () => {
        const validator = jest.fn(() => ({ hasError: true, error: 'Error!' }));
        const initialState = { fieldName: { value: '', type: 'text', hasError: false, error: '', touched: false, validator } };
        const action = {
            type: "INPUT_UPDATE",
            data: { name: 'fieldName', value: 'newValue', type: 'text', touched: true }
        };
        const expectedState = { fieldName: { value: 'newValue', type: 'text', hasError: true, error: 'Error!', touched: true, validator } };
        const newState = formsReducer(initialState, action);
        expect(newState).toEqual(expectedState);
        expect(validator).toHaveBeenCalledWith('newValue', initialState);
    });

    test("INPUT_UPDATE returns original state if action.data is undefined", () => {
        const initialState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        }
        const action: Action = {
            type: 'INPUT_UPDATE',
        };
        const actionNoName: Action = {
            type: 'INPUT_UPDATE',
            data: { value: 'newValue', type: 'text', touched: true }
        }
        const state = formsReducer(initialState, action);
        const stateNoName = formsReducer(initialState, actionNoName);
        expect(state).toEqual(initialState)
        expect(stateNoName).toEqual(initialState)
    })

    test('RESET_FORM correctly clears state', () => {
        const initialState = {
            default: { value: "", type: "", hasError: false, error: "", touched: false, formID: "", validator: fallBack },
            text: { value: "hello", type: "text", hasError: false, error: "", touched: true, formID: "id", validator: fallBack },
        }
        const action = {
            type: "RESET_FORM",
        }
        const expectedState = {}
        const newState = formsReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

});

describe('useFigura', () => {
    test('should initialize form state correctly', () => {
        const { result } = renderHook(() => useFigura());
        expect(result.current.formState).toEqual(initialFormState); // assuming initialFormState is defined
    });

    test('should dispatch an action correctly', () => {
        const { result } = renderHook(() => useFigura());
        act(() => {
            result.current.dispatch({ type: 'RESET_FORM' });
        });
        const expectedState = {}
        expect(result.current.formState).toEqual(expectedState); // assuming expectedFormState is defined based on the dispatched action
    });
});








