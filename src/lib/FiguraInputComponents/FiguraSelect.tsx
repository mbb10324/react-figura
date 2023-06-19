import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputShortProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraSelect(props: InputShortProps) {
    const { children, wrapper, inputStyle, errorStyle, name } = props;
    const childrenArray = React.Children.toArray(children);

    //these functions seperate children passed into FiguraSelect and extracts the options so that we can properly handle them
    const label = childrenArray.find((child) => !isLabel(child));
    const options = childrenArray.filter((child) => isLabel(child));
    function isLabel(child: React.ReactNode): child is React.ReactElement {
        if (React.isValidElement(child)) {
            return child.type === "option";
        };
        return false;
    };

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container"}`}>
                                {label}
                                <select
                                    name={name}
                                    id={name}
                                    value={context.formState[name] ? context.formState[name].value : ""}
                                    className={`${inputStyle ? inputStyle : "input-style"}`}
                                    onChange={e => { checkForErrors(false, name, e.target.value, "select", context.dispatch, context.formState, context.formID); }}
                                    onBlur={e => { checkForErrors(true, name, e.target.value, "select", context.dispatch, context.formState, context.formID); }}
                                >
                                    {options}
                                </select>
                            </div>
                            <FiguraError formField={context.formState[name]} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraSelect.displayName = "FiguraSelect"; //we do this because children.name is unstable. Therefore we explicitly define a displayName