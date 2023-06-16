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

export default function FiguraColor(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name as string];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "flex flex-row mb-1 items-center"}`}>
                                <div className="h-6 w-6 m-2 rounded-full flex justify-center items-center overflow-hidden relative">
                                    <input
                                        name={name}
                                        id={name}
                                        type="color"
                                        value={fieldValue ? fieldValue.value : "#000000"}
                                        className={`${inputStyle ? inputStyle : "outline-none h-12 w-12 rounded-2xl bg-transparent border-none cursor-pointer absolute"}`}
                                        onChange={e => { checkForErrors(true, name, e.target.value, "color", context.dispatch, context.formState, context.formID, validator) }}
                                    />
                                </div>
                                {props.children}
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};