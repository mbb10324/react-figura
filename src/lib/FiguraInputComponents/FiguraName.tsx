import { PropsWithChildren } from "react";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
}

export default function FiguraName(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={'name'}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : 'flex flex-col mb-1'}`}>
                        {props.children}
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className={`${inputStyle ? inputStyle : 'text-black'}`}
                            value={context.form.formState.name.value}
                            onChange={e => { checkForErrors(false, "name", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            onBlur={e => { checkForErrors(true, "name", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                        />
                        {context.form.formState.name.touched && context.form.formState.name.hasError && (
                            <div className={`${errorStyle ? errorStyle : 'mt-1 text-[#F65157]'}`}>{context.form.formState.name.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    )
}