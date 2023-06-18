import { UPDATE_FORM } from "./FiguraReducer";
import * as V from "./Validation";

export async function checkForErrors(wasTouched, name, value, type, dispatch, formState, formID) {
    const thisName = formState[name];
    const validationFunction = thisName.validator;
    const { hasError, error } = validationFunction(value, formState);
    dispatch({
        type: UPDATE_FORM,
        data: { name, value, type, hasError: hasError, error: error, touched: wasTouched, formID, validator: validationFunction },
    });
    return hasError;
};

export function typeMapper(name) {
    const nameToType = {
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

export function validationMapper(name) {
    const nameToFunc = {
        FiguraTextArea: V.validateTextArea,
        FiguraCheckBox: V.validateCheck,
        FiguraEmail: V.validateEmail,
        FiguraPassword: V.validatePassword,
        FiguraConfirmPassword: V.validateConfirmPassword,
        FiguraPhone: V.validatePhone,
        FiguraSelect: V.validateSelect,
        FiguraText: V.validateSelect,
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
        FiguraFile: V.validateMonth,
        FiguraUrl: V.validateUrl,
        FiguraButtonGroup: V.validateButtonGroup,
    };
    return nameToFunc[name] || fallBack;
}

function fallBack(value) {
    return { hasError: false, error: "" };
}
