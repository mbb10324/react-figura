import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";
import { useFormValidation } from "./FiguraUtils/Validation";
import { FiguraContext } from "./FiguraUtils/FiguraContext";
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
    const formID = figuraID;
    const fieldNames: any = [];

    const childComponents = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            const ChildComponent = child.type as React.ComponentType<any>;
            const formattedFieldName: any = `${ChildComponent.displayName || ChildComponent.name || "Unknown"}-${index}`;
            fieldNames.push(formattedFieldName);
            return React.cloneElement(child, {
                ...child.props,
                fieldName: formattedFieldName,
                key: formattedFieldName,
            });
        };
        return child;
    });

    const { formState, dispatch } = useFormValidation(fieldNames);

    return (
        <FiguraContext.Provider value={{ formState, dispatch, formID }}>
            <form
                noValidate
                className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                onSubmit={(e) => { formSubmitHandler(e, dispatch, formState, onSubmit, formID) }}
            >
                {childComponents}
            </form>
        </FiguraContext.Provider>
    );
};