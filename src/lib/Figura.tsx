import { useFormValidation } from "./FiguraUtils/Validation";
import { useSubmit } from "./FiguraUtils/FormSubmitHandler";
import { FiguraContext } from "./FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    figuraID: any;
    formStyle?: any;
    onSubmit?: any;
    children: React.ReactNode;
};

export default function Figura(props: Props) {
    const { children, figuraID, formStyle, onSubmit } = props;
    const fieldNames: any = [];

    const childComponents = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            const ChildComponent = child.type as React.ComponentType<any>;
            const formattedFieldName: any = `${ChildComponent.displayName || ChildComponent.name || "Unknown"}-${index}`;
            fieldNames.push(formattedFieldName);
            return React.cloneElement(child, {
                ...child.props, // Spread the existing props
                fieldName: formattedFieldName,
                key: formattedFieldName,
            });
        }
        return child;
    });

    const { formState, dispatch } = useFormValidation(fieldNames);
    const submit = useSubmit();
    const formID = figuraID;

    return (
        <FiguraContext.Provider value={{ formState, dispatch, submit, formID }}>
            <form
                noValidate
                className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                onSubmit={(e) => { submit.formSubmitHandler(e, dispatch, formState, onSubmit, formID) }}
            >
                {childComponents}
            </form>
        </FiguraContext.Provider>
    );
}