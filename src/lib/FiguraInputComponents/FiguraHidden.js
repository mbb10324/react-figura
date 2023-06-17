import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

export default function FiguraHidden(props) {
    const { validator, name, children } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <div>
                            {children}
                            <input
                                name={name}
                                id={name}
                                type="hidden"
                                value={fieldValue ? fieldValue.value : ""}
                                onChange={e => { checkForErrors(false, name, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                            />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};

FiguraHidden.displayName = "FiguraHidden";