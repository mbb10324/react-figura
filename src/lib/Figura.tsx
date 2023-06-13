import { useFormValidation } from "./FiguraUtils/Validation";
import { useSubmit } from "./FiguraUtils/FormSubmitHandler";
import { FiguraContext } from "./FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    endpoint?: any;
    figuraID: any;
    formStyle?: any;
    onSubmit?: any;
    children: React.ReactNode;
};

export default function Figura(props: Props) {
    const { children, figuraID, formStyle, endpoint, onSubmit } = props;
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

    console.log(formState)

    return (
        <FiguraContext.Provider value={{ formState, dispatch, submit, formID }}>
            <form
                noValidate
                className={`${formStyle ? formStyle : "w-80 m-4 p-2 overflow-hidden"}`}
                onSubmit={(e) => {
                    if (endpoint) {
                        submit.formSubmitHandler(e, formState, endpoint, formID);
                    } else if (onSubmit) {
                        submit.formSubmitHandler(e, formState, "", formID);
                        if (!submit.showError.bool) {
                            onSubmit();
                        }
                    }
                }}
            >
                {childComponents}
            </form>
        </FiguraContext.Provider>
    );
}