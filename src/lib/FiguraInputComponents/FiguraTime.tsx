import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
    validator?: any;
};

export default function FiguraTime(props: Props) {
    const { wrapper, inputStyle, errorStyle, validator } = props;

    return (
        <ParentContext.Provider value={"time"}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                        {props.children}
                        <input
                            type="text"
                            name="time"
                            id="time"
                            className={`${inputStyle ? inputStyle : "border-2 border-sky-600 focus:border-2 focus:border-sky-400 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                            value={context.formState.time.value}
                            onChange={e => { checkForErrors(false, "time", e.target.value, context.dispatch, context.formState, context.formID, validator) }}
                            onBlur={e => { checkForErrors(true, "time", e.target.value, context.dispatch, context.formState, context.formID, validator) }}
                        />
                        {context.formState.time.touched && context.formState.time.hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.formState.time.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};