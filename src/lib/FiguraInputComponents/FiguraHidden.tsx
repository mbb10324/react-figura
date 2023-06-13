import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    validator?: any;
    fieldName?: any;
};

export default function FiguraHidden(props: Props) {
    const { validator, fieldName, children } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className="-mt-1">
                        {children}
                        <input
                            name={fieldName}
                            id={fieldName}
                            type="hidden"
                            value={context.formState[fieldName].value}
                            onChange={e => { checkForErrors(false, fieldName, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                            onBlur={e => { checkForErrors(true, fieldName, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                        />
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};