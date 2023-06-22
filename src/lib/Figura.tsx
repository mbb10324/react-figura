import { typeMapper, validationMapper } from "./FiguraUtils/ValidationUtils";
import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { ErrorContext } from "./FiguraUtils/FiguraContext";
import { useFigura } from "./FiguraUtils/FiguraReducer";
import { FieldName } from "./FiguraUtils/FiguraTypes";

interface FiguraProps extends PropsWithChildren {
    children: React.ReactNode;
    formID: string;
    formStyle?: string;
    onSubmit?: (data: Record<string, string>) => void;
}

export default function Figura(props: FiguraProps) {
    const { children, formID, formStyle, onSubmit } = props;
    const { formState, dispatch } = useFigura(); //useReducer to store input data
    const [reset, setReset] = useState(false); //state to determine if the reset button has been clicked

    //function fired anytime an input event occurs
    //useCallback on the function to prevent referential equality from onEvent being passed down to children
    const onEvent = useCallback((value: string, name: string, type: string) => {
        dispatch({
            type: "INPUT_UPDATE",
            data: { name: name, value: value, type: type, touched: true }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //initialize empty array to prep for dispatch
    const fieldNames: FieldName[] = [];
    //ensure we have children
    if (children && Array.isArray(children)) {
        //loop over the children
        children.forEach((child) => {
            //ensure child has a name
            if (child.props.name) {
                //based off the displayName we match the type
                const childType = typeMapper(child.type.displayName);
                //based off the displayName we match the validation function; unless the validator prop(custom validation) has been passed to the child
                const childValidation = (child.props.validator ? child.props.validator : validationMapper(child.type.displayName));
                //push object with relevant values to fieldNames array
                fieldNames.push({ name: child.props.name, type: childType, validation: childValidation });
            }
        });
    };

    //Map over the children
    const childComponents = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            //inject onEvent as a prop. (why not context for onEvent? because context always mutates)
            if (typeof child.type === "string") {
                return React.cloneElement(child, {
                    ...child.props,
                });
            } else {
                return React.cloneElement(child, {
                    ...child.props,
                    onEvent: onEvent
                });
            }
        };
        return child;
    });

    function resetForm() {
        //setReset to true which tells Figura component we are reseting
        setReset(true);
        //reset reducer back to initial state
        dispatch({ type: "RESET_FORM" });
    }

    //fires on mount and each time the reset button is clicked
    useEffect(() => {
        //after reset cycle completes we revert "reset" state back to default
        setReset(false);
        //updates reducer state with initial values
        dispatch({ type: "INITIAL_FORM", data: { fieldNames } });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset]);

    return (
        <ErrorContext.Provider value={formState}>
            <form
                noValidate
                className={`${formStyle ? formStyle : "form-style"}`}
                onSubmit={(e) => { formSubmitHandler(e, dispatch, formState, formID, onSubmit); }}
                onReset={() => { resetForm(); }}
            >
                {childComponents}
            </form>
        </ErrorContext.Provider>
    );
};
