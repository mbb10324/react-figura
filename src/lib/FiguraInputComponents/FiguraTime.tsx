import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    wrapper?: string;
    fieldName?: string;
    errorStyle?: string;
    inputStyle?: string;
    placeholder?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraTime(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, fieldName, placeholder } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[fieldName as string];
                    return (
                        <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                            {props.children}
                            <input
                                name={fieldName}
                                id={fieldName}
                                type="time"
                                value={fieldValue ? fieldValue.value : ""}
                                placeholder={`${placeholder ? placeholder : ''}`}
                                className={`${inputStyle ? inputStyle : "border-2 border-blue-500 focus:border-2 focus:border-cyan-500 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                                onChange={e => { checkForErrors(false, fieldName, e.target.value, "time", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, fieldName, e.target.value, "time", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};