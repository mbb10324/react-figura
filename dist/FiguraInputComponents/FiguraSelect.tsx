import { PropsWithChildren } from "react";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
}

export default function FiguraSelect(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;
    const childrenArray = React.Children.toArray(props.children);
    const label = childrenArray.find((child) => !isLabel(child));
    const options = childrenArray.filter((child) => isLabel(child));

    function isLabel(child: any) {
        if (child.type === 'option') {
            return child;
        }
    }

    return (
        <ParentContext.Provider value={'select'}>
            <FiguraContext.Consumer>
                {(context) => (
                    <>
                        <div className={`${wrapper ? wrapper : 'flex flex-col mb-1'}`}>
                            {label}
                            <select
                                name="select"
                                id="select"
                                className={`${inputStyle ? inputStyle : 'text-black'}`}
                                value={context.form.formState.select.value}
                                onChange={e => { checkForErrors(false, "select", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                                onBlur={e => { checkForErrors(true, "select", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            >
                                {options}
                            </select>
                        </div>
                        {context.form.formState.select.touched && context.form.formState.select.hasError && (
                            <div className={`${errorStyle ? errorStyle : 'mt-1 text-[#F65157]'}`}>{context.form.formState.select.error}</div>
                        )}
                    </>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    )
}