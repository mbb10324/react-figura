import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    name: string;
    wrapper?: string;
    errorStyle?: string;
    inputStyle?: string;
    placeholder?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraText(props: Props) {
    const { name, wrapper, inputStyle, errorStyle, validator, children, placeholder } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name as string];
                    return (
                        <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                            {children}
                            <input
                                name={name}
                                id={name}
                                type="text"
                                autoComplete="text"
                                value={fieldValue ? fieldValue.value : ""}
                                placeholder={`${placeholder ? placeholder : ''}`}
                                className={`${inputStyle ? inputStyle : "border-2 border-blue-500 focus:border-2 focus:border-cyan-500 outline-none rounded-md p-2 pl-3 transition-all duration-300 ease-in-out"}`}
                                onChange={e => { checkForErrors(false, name, e.target.value, "text", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "text", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};