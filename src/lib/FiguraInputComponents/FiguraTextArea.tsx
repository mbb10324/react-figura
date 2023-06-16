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

export default function FiguraTextArea(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, name, placeholder } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name as string];
                    return (
                        <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                            {props.children}
                            <textarea
                                name={name}
                                id={name}
                                value={fieldValue ? fieldValue.value : ""}
                                placeholder={`${placeholder ? placeholder : ''}`}
                                className={`${inputStyle ? inputStyle : "border-2 border-blue-500 focus:border-2 focus:border-cyan-500 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                                onChange={e => { checkForErrors(false, name, e.target.value, "textarea", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "textarea", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};