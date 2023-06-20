import { INITIAL_FORM, RESET_FORM, useFigura } from "./FiguraUtils/FiguraReducer";
import { typeMapper, validationMapper } from "./FiguraUtils/ValidationUtils";
import { FiguraContext, ResetContext } from "./FiguraUtils/FiguraContext";
import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";
import { FieldName } from "./FiguraUtils/FiguraTypes";
import React, { useEffect, useState } from "react";

interface FiguraProps {
    children: React.ReactNode;
    formID: string;
    formStyle?: string;
    onSubmit?: (data: Record<string, string>) => void;
}

export default function Figura(props: FiguraProps) {
    const { children, formID, formStyle, onSubmit } = props;
    const { formState, dispatch } = useFigura(); //pull in the useReducer
    const [selected, setSelected] = useState(""); //state for the selected value of FiguraButtonGroup
    const [reset, setReset] = useState(false); //state to determine if the reset button has been clicked

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

    function resetForm() {
        //setSelected for button group back to default
        setSelected("");
        //setReset to true which tells Figura component we are reseting
        setReset(true);
        //reset reducer back to initial state
        dispatch({ type: RESET_FORM });
    }

    //fires on mount and each time the reset button is clicked
    useEffect(() => {
        //updates reducer state with initial values
        dispatch({ type: INITIAL_FORM, data: { fieldNames } });
        //after reset cycle completes we revert 'reset' state back to default
        setReset(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset]);

    console.log(formState)

    return (
        <ResetContext.Provider value={{ selected, setSelected, setReset }}>
            <FiguraContext.Provider value={{ dispatch, formID }}>
                <form
                    noValidate
                    className={`${formStyle ? formStyle : "form-style"}`}
                    onSubmit={(e) => { formSubmitHandler(e, dispatch, formState, formID, onSubmit); }}
                    onReset={() => { resetForm(); }}
                >
                    {children}
                </form>
            </FiguraContext.Provider>
        </ResetContext.Provider>
    );
};
