import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    validator?: (value: string) => { hasError: boolean, error: string };
    fieldName?: string;
};

export default function FiguraHidden(props: Props) {
    const { validator, fieldName, children } = props;

    return (
        <ParentContext.Provider value={fieldName}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[fieldName as string];
                    return (
                        <div className="-mt-1">
                            {children}
                            <input
                                name={fieldName}
                                id={fieldName}
                                type="hidden"
                                value={fieldValue ? fieldValue.value : ""}
                                onChange={e => { checkForErrors(false, fieldName, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                                onBlur={e => { checkForErrors(true, fieldName, e.target.value, "hidden", context.dispatch, context.formState, context.formID, validator) }}
                            />
                        </div>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};