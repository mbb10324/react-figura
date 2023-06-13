import { validationChecker } from "./ValidationChecker";
import React from "react";

export const UPDATE_FORM = "UPDATE_FORM";

export function checkForErrors(wasTouched: any, name: any, value: any, type: any, dispatch: any, formState: any, formID: any, validator?: any) {
    let { hasError, error } = { hasError: false, error: "" };
    if (validator) {
        ({ hasError, error } = validator(value));
    } else {
        ({ hasError, error } = validationChecker(type, value, formState));
    }
    dispatch({
        type: UPDATE_FORM,
        data: { name, value, type, hasError, error, touched: wasTouched, formID },
    })
};

export function matchNameAndType(name: any) {
    var splitName = name.split("-");
    var pureName = splitName[0]
    if (pureName === "FiguraTextArea") return "textarea"
    else if (pureName === "FiguraCheckBox") return "checkbox"
    else if (pureName === "FiguraEmail") return "email"
    else if (pureName === "FiguraPassword") return "password"
    else if (pureName === "FiguraConfirmPassword") return "confirmpassword"
    else if (pureName === "FiguraPhone") return "tel"
    else if (pureName === "FiguraSelect") return "select"
    else if (pureName === "FiguraText") return "text"
    else if (pureName === "FiguraTime") return "time"
    else if (pureName === "FiguraTimeMilitary") return "time24"
    else if (pureName === "FiguraRadio") return "radio"
    else if (pureName === "FiguraRange") return "range"
    else if (pureName === "FiguraNumber") return "number"
    else if (pureName === "FiguraDate") return "date"
    else if (pureName === "FiguraDateLocal") return "datelocal"
    else if (pureName === "FiguraHidden") return "hidden"
    else if (pureName === "FiguraColor") return "color"
    else if (pureName === "FiguraWeek") return "week"
    else if (pureName === "FiguraMonth") return "month"
    else if (pureName === "FiguraFile") return "file"
    else if (pureName === "FiguraUrl") return "url"
    else return ""
};
