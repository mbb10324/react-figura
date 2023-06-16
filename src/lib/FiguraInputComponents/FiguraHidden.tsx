import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    name: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraHidden(props: Props) {
    const { validator, name, children } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name as string];
                    return (
                        <div className="-mt-1">
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