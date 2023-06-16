import { FiguraContext, ParentContext, ResetContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { PropsWithChildren, useContext } from "react";

interface Props extends PropsWithChildren {
    name: string;
    wrapper?: string;
    errorStyle?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraButtonGroup(props: Props) {
    const { wrapper, errorStyle, validator, name, children } = props;
    const resetContext = useContext(ResetContext);

    return (
        <FiguraContext.Consumer>
            {(context) => {
                const fieldValue = context.formState[name as string];
                return (
                    <div
                        id={name}
                        className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}
                        onBlur={e => { checkForErrors(true, name, resetContext.selected, "buttongroup", context.dispatch, context.formState, context.formID, validator) }}
                    >
                        {children}
                        <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                    </div>
                )
            }}
        </FiguraContext.Consumer>
    );
};