import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
    validator?: any;
    fieldName?: any;
};

export default function FiguraTimeMilitary(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, fieldName } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                        {props.children}
                        <input
                            name={fieldName}
                            id={fieldName}
                            type="time24"
                            className={`${inputStyle ? inputStyle : "border-2 border-sky-600 focus:border-2 focus:border-sky-400 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                            value={context.formState[fieldName].value}
                            onChange={e => { checkForErrors(false, "time", e.target.value, "time24", context.dispatch, context.formState, context.formID, validator) }}
                            onBlur={e => { checkForErrors(true, "time", e.target.value, "time24", context.dispatch, context.formState, context.formID, validator) }}
                        />
                        {context.formState[fieldName].touched && context.formState[fieldName].hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.formState[fieldName].error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};