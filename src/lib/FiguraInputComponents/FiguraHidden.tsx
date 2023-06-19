import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

type HiddenProps = { name: string };

export default function FiguraHidden(props: HiddenProps) {
    const { name } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <input
                            name={name}
                            id={name}
                            type="hidden"
                            value={context.formState[name] ? context.formState[name].value : ""}
                            onChange={e => { checkForErrors(false, name, e.target.value, "hidden", context.dispatch, context.formState, context.formID); }}
                            onBlur={e => { checkForErrors(true, name, e.target.value, "hidden", context.dispatch, context.formState, context.formID); }}
                        />
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraHidden.displayName = "FiguraHidden"; //we do this because children.name is unstable. Therefore we explicitly define a displayName