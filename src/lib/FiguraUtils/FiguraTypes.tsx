/*GLOBAL TYPES USED IN MORE THAN ONE PLACE
*********************************************************************************************/

//dispatch type
export type Action = { type: "INITIAL_FORM" | "UPDATE_FORM" | "RESET_FORM" | "INPUT_UPDATE"; data?: ActionData };

//reducer state 
export type FormState = {
    [key: string]: FormField
};

//individual state objects
export type FormField = {
    value?: string;
    type?: string;
    hasError?: boolean;
    error?: string;
    touched?: boolean;
    formID?: string;
    validator?: (value?: string, formState?: FormState) => { hasError: boolean; error: string; };
}

//action.data passed to dispatch
export type ActionData = {
    fieldNames?: FieldName[];
    name?: string;
    value?: string;
    type?: string;
    hasError?: boolean;
    error?: string;
    touched?: boolean;
    formID?: string;
    validator?: (value?: string, formState?: FormState) => { hasError: boolean; error: string; };
}

//initial values dispatched from Figura component
export type FieldName = {
    name?: string;
    type?: string;
    validation?: (value?: string, formState?: FormState) => { hasError: boolean; error: string; };
};

//Main context provided from Figura to children
export type FiguraContextProps = {
    // formState: FormState;
    dispatch: (action: Action) => void;
    formID: string;
};

//Used by the reset button
export type ResetContextProps = {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    setReset: React.Dispatch<React.SetStateAction<boolean>>;
};

//Long input type
export type InputProps = {
    children: React.ReactNode;
    placeholder?: string;
    inputStyle?: string;
    errorStyle?: string;
    wrapper?: string;
    name: string;
}

//Short input type
export type InputShortProps = {
    children: React.ReactNode;
    inputStyle?: string;
    errorStyle?: string;
    wrapper?: string;
    name: string;
}

//Shared Buttons type
export type ButtonProps = {
    children: React.ReactNode;
    buttonStyle?: string;
}

