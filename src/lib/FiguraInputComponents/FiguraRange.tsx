import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: string;
    fieldName?: string;
    errorStyle?: string;
    inputStyle?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraRange(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, fieldName } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[fieldName as string];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                                {props.children}
                                <input
                                    name={fieldName}
                                    id={fieldName}
                                    type="range"
                                    value={fieldValue.value}
                                    className={`${inputStyle ? inputStyle : "mr-2"}`}
                                    onChange={e => { checkForErrors(true, fieldName, e.target.value, "range", context.dispatch, context.formState, context.formID, validator) }}
                                />
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};