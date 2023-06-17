import { FiguraContext, ParentContext } from "../FiguraUtils/FiguraContext.jsx";
import FiguraError from "../FiguraSupportingComponents/FiguraError.jsx";
import { checkForErrors } from "../FiguraUtils/ValidationUtils.jsx";
import React from "react";

export default function FiguraColor(props) {
    const { wrapper, inputStyle, errorStyle, validator, name } = props;

    return (
        <ParentContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    const fieldValue = context.formState[name];
                    return (
                        <>
                            <div className={`${wrapper ? wrapper : "input-container-inline"}`}>
                                <div className="color-picker-container">
                                    <input
                                        name={name}
                                        id={name}
                                        type="color"
                                        value={fieldValue ? fieldValue.value : "#000000"}
                                        className={`${inputStyle ? inputStyle : "color-picker-style"}`}
                                        onChange={e => { checkForErrors(true, name, e.target.value, "color", context.dispatch, context.formState, context.formID, validator) }}
                                    />
                                </div>
                                {props.children}
                            </div>
                            <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                        </>
                    )
                }}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};