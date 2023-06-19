import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraTimeMilitary(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <div className={`${wrapper ? wrapper : "input-container"}`}>
                            {children}
                            <input
                                name={name}
                                id={name}
                                type="time24"
                                value={context.formState[name] ? context.formState[name].value : ""}
                                className={`${inputStyle ? inputStyle : "input-style"}`}
                                onChange={e => { checkForErrors(false, name, e.target.value, "time24", context.dispatch, context.formState, context.formID); }}
                                onBlur={e => { checkForErrors(true, name, e.target.value, "time24", context.dispatch, context.formState, context.formID); }}
                            />
                            <FiguraError formField={context.formState[name]} errorStyle={errorStyle} />
                        </div>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraTimeMilitary.displayName = "FiguraTimeMilitary"; //we do this because children.name is unstable. Therefore we explicitly define a displayName