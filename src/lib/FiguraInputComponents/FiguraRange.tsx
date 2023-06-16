import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    name: string;
    wrapper?: string;
    errorStyle?: string;
    inputStyle?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraRange(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name as string];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                                {props.children}
                                <input
                                    name={name}
                                    id={name}
                                    type="range"
                                    value={fieldValue ? fieldValue.value : ""}
                                    className={`${inputStyle ? inputStyle : "mr-2"}`}
                                    onChange={e => { checkForErrors(true, name, e.target.value, "range", context.dispatch, context.formState, context.formID, validator) }}
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