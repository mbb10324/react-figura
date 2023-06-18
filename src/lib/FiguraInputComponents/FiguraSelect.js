import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import React from "react";

export default function FiguraSelect(props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;
    const childrenArray = React.Children.toArray(props.children);
    const label = childrenArray.find((child) => !isLabel(child));
    const options = childrenArray.filter((child) => isLabel(child));

    function isLabel(child) {
        if (child.type === "option") {
            return child;
        };
    };

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container"}`}>
                                {label}
                                <select
                                    name={name}
                                    id={name}
                                    value={fieldValue ? fieldValue.value : ""}
                                    className={`${inputStyle ? inputStyle : "input-style"}`}
                                    onChange={e => { checkForErrors(false, name, e.target.value, "select", context.dispatch, context.formState, context.formID, validator); }}
                                    onBlur={e => { checkForErrors(true, name, e.target.value, "select", context.dispatch, context.formState, context.formID, validator); }}
                                >
                                    {options}
                                </select>
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    );
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};

FiguraSelect.displayName = "FiguraSelect";