import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext.jsx";
import FiguraError from "../FiguraSupportingComponents/FiguraError.jsx";
import { checkForErrors } from "../FiguraUtils/ValidationUtils.jsx";
import React from "react";

export default function FiguraConfirmPassword(props) {
    const { wrapper, inputStyle, errorStyle, validator, name, placeholder } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <div className={`${wrapper ? wrapper : "input-container"}`}>
                            {props.children}
                            <input
                                name={name}
                                id={name}
                                type="password"
                                value={fieldValue ? fieldValue.value : ""}
                                placeholder={`${placeholder ? placeholder : ''}`}
                                className={`${inputStyle ? inputStyle : "input-style"}`}
                                onChange={e => { checkForErrors(false, name, e.target.value, "confirmpassword", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "confirmpassword", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};