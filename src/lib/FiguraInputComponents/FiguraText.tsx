import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

function FiguraText(props: InputProps) {
    const { children, wrapper, inputStyle, errorStyle, name, placeholder } = props;

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
                                type="text"
                                placeholder={`${placeholder ? placeholder : ""}`}
                                className={`${inputStyle ? inputStyle : "input-style"}`}
                                onChange={e => {
                                    context.dispatch({
                                        type: "INPUT_UPDATE",
                                        data: { name: name, value: e.target.value, type: "text", touched: true, formID: context.formID }
                                    })
                                }}
                                onBlur={e => {
                                    context.dispatch({
                                        type: "INPUT_UPDATE",
                                        data: { name: name, value: e.target.value, type: "text", touched: true, formID: context.formID }
                                    })
                                }}
                            // onBlur={e => { checkForErrors(true, name, e.target.value, "text", context.dispatch, context.formState, context.formID); }}
                            />
                            {/* <FiguraError formField={context.formState[name]} errorStyle={errorStyle} /> */}
                        </div>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

const MemoizedFiguraText = React.memo(FiguraText);

MemoizedFiguraText.displayName = "FiguraText";

export default MemoizedFiguraText;

// FiguraText.displayName = "FiguraText"; //we do this because children.name is unstable. Therefore we explicitly define a displayName
