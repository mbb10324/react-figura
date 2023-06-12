import { PropsWithChildren } from "react";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
}

export default function FiguraPassword(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={'password'}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : 'flex flex-col mb-1'}`}>
                        {props.children}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={`${inputStyle ? inputStyle : 'text-black'}`}
                            value={context.form.formState.password.value}
                            onChange={e => { checkForErrors(false, "password", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            onBlur={e => { checkForErrors(true, "password", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                        />
                        {context.form.formState.password.touched && context.form.formState.password.hasError && (
                            <div className={`${errorStyle ? errorStyle : 'mt-1 text-[#F65157]'}`}>{context.form.formState.password.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    )
}