import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

export default function FiguraWeek(props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

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
                                type="week"
                                value={fieldValue ? fieldValue.value : ""}
                                className={`${inputStyle ? inputStyle : "input-style"}`}
                                onChange={e => { checkForErrors(false, name, e.target.value, "week", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "week", context.dispatch, context.formState, context.formID, validator) }}
                            />
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};

FiguraWeek.displayName = "FiguraWeek";