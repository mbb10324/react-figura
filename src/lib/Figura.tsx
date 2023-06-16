import { INITIAL_FORM, useFormValidation } from "./FiguraUtils/Validation";
import { FiguraContext, ResetContext } from "./FiguraUtils/FiguraContext";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";
import { matchNameAndType } from "./FiguraUtils/ValidationUtils";

interface Props extends PropsWithChildren {
    figuraID: string;
    formStyle?: string;
    onSubmit?: any;
    children: React.ReactNode;
};

export default function Figura(props: Props) {
    const { children, figuraID, formStyle, onSubmit } = props;
    const { formState, dispatch } = useFormValidation();
    const [selected, setSelected] = useState("");
    const [reset, setReset] = useState(false);
    const fieldNames: any = [];
    const formID = figuraID;

    if (children && Array.isArray(children)) {
        children.map((child: any) => {
            if (child.props.name) {
                const childType = matchNameAndType(child.type.name)
                fieldNames.push({ name: child.props.name, type: childType })
            }
        })
    }

    useEffect(() => {
        dispatch({ type: INITIAL_FORM, data: fieldNames })
        setReset(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset])

    return (
        <ResetContext.Provider value={{ selected, setSelected, setReset }}>
            <FiguraContext.Provider value={{ formState, dispatch, formID }}>
                <form
                    noValidate
                    className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                    onSubmit={(e) => { formSubmitHandler(e, dispatch, formState, onSubmit, formID) }}
                >
                    {children}
                </form>
            </FiguraContext.Provider>
        </ResetContext.Provider>
    );
};