import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { useContext } from "react";

export default function FiguraButtonGroup(props) {
    const { wrapper, errorStyle, validator, name, children } = props;
    const resetContext = useContext(ResetContext);

    return (
        <FiguraContext.Consumer>
            {(context) => {
                const fieldValue = context.formState[name];
                return (
                    <div
                        id={name}
                        className={`${wrapper ? wrapper : "input-container"}`}
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

FiguraButtonGroup.displayName = "FiguraButtonGroup";