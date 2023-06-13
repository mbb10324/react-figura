import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
    validator?: any;
    fieldName?: any
};

export default function FiguraRange(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, fieldName } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => (
                    <>
                        <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                            {props.children}
                            <input
                                name={fieldName}
                                id={fieldName}
                                type="range"
                                value={context.formState[fieldName].value}
                                className={`${inputStyle ? inputStyle : "mr-2"}`}
                                onChange={e => { checkForErrors(true, fieldName, e.target.value, "range", context.dispatch, context.formState, context.formID, validator) }}
                            />
                        </div>
                        {context.formState[fieldName].touched && context.formState[fieldName].hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.formState[fieldName].error}</div>
                        )}
                    </>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};