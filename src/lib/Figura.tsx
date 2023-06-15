import { INITIAL_FORM, useFormValidation } from "./FiguraUtils/Validation";
import { FiguraContext, ResetContext } from "./FiguraUtils/FiguraContext";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";

interface Props extends PropsWithChildren {
    figuraID: string;
    formStyle?: string;
    onSubmit?: any;
    children: React.ReactNode;
};

export default function Figura(props: Props) {
    const { children, figuraID, formStyle, onSubmit } = props;
    const formID = figuraID;
    const [selected, setSelected] = useState("")
    const [reset, setReset] = useState(false)
    const { formState, dispatch } = useFormValidation();
    const fieldNames: any = [];

    const childComponents = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            const ChildComponent = child.type as React.ComponentType<any>;
            const formattedFieldName: any = `${ChildComponent.name || "Unknown"}${index}`;
            fieldNames.push(formattedFieldName);
            return React.cloneElement(child, {
                ...child.props,
                fieldName: formattedFieldName,
                key: formattedFieldName,
            });
        };
        return child;
    });

    useEffect(() => {
        dispatch({ type: INITIAL_FORM, data: fieldNames })
        setReset(false)
    }, [reset])

    return (
        <ResetContext.Provider value={{ selected, setSelected, setReset }}>
            <FiguraContext.Provider value={{ formState, dispatch, formID }}>
                <form
                    noValidate
                    className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                    onSubmit={(e) => { formSubmitHandler(e, dispatch, formState, onSubmit, formID) }}
                >
                    {childComponents}
                </form>
            </FiguraContext.Provider>
        </ResetContext.Provider>
    );
};