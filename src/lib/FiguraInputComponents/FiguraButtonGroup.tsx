import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React, { useContext } from "react";

type ButtonGroupProps = {
    children: React.ReactNode;
    errorStyle?: string;
    wrapper?: string;
    name: string;
}

export default function FiguraButtonGroup(props: ButtonGroupProps) {
    const { wrapper, errorStyle, name, children } = props;
    const resetContext = useContext(ResetContext);
    if (!resetContext) return null;

    return (
        <FiguraContext.Consumer>
            {(context) => {
                if (!context) return null;
                return (
                    <div
                        id={name}
                        className={`${wrapper ? wrapper : "input-container"}`}
                        onBlur={e => { checkForErrors(true, name, resetContext.selected, "buttongroup", context.dispatch, context.formState, context.formID); }}
                    >
                        {children}
                        <FiguraError formField={context.formState[name]} errorStyle={errorStyle} />
                    </div>
                );
            }}
        </FiguraContext.Consumer>
    );
};

FiguraButtonGroup.displayName = "FiguraButtonGroup"; //we do this because children.name is unstable. Therefore we explicitly define a displayName