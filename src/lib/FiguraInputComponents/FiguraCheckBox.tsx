import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
    validator?: any;
    fieldName?: any
};

export default function FiguraCheckBox(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator, fieldName } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => (
                    <>
                        <div className={`${wrapper ? wrapper : "flex flex-row mb-1"}`}>
                            <input
                                className={`${inputStyle ? inputStyle : "mr-2"}`}
                                type="checkbox"
                                name={fieldName}
                                id={fieldName}
                                onChange={e => { checkForErrors(true, fieldName, e.target.checked.toString(), "checkbox", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            {props.children}
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