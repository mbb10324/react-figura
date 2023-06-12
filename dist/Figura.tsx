import { PropsWithChildren } from "react";
import { FiguraContext } from "./FiguraContext";
import { useFormValidation } from "./FiguraUtils/Validation";
import { useSubmit } from "./FiguraUtils/FormSubmitHandler";

interface Props extends PropsWithChildren {
    figuraID: any;
    formStyle?: any;
}

export default function Figura(props: Props) {
    const { children, figuraID, formStyle } = props
    const form: any = useFormValidation()
    const submit: any = useSubmit()
    const formID = figuraID

    return (
        <FiguraContext.Provider value={{ form, submit, formID }}>
            <form
                noValidate
                className={`${formStyle ? formStyle : 'w-80 m-4 pt-20 overflow-hidden'}`}
                onSubmit={e => submit.formSubmitHandler(e, form.formState, form.dispatch, "Some api call for the sign up", formID)}>
                {children}
            </form>
        </FiguraContext.Provider>
    )
}