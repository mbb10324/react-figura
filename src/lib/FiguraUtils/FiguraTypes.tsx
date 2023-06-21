/*GLOBAL TYPES USED IN MORE THAN ONE PLACE
*********************************************************************************************/

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

//dispatch type
export type Action = {
    type: string;
    data?: ActionData
};

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

//Long input type
export type InputProps = {
    onEvent: (value: string, name: string, type: string) => void
    children: React.ReactNode;
    placeholder?: string;
    inputStyle?: string;
    errorStyle?: string;
    onChange?: boolean;
    wrapper?: string;
    name: string;
}

//Short input type
export type InputShortProps = {
    onEvent: (value: string, name: string, type: string) => void
    children: React.ReactNode;
    inputStyle?: string;
    errorStyle?: string;
    onChange?: boolean;
    wrapper?: string;
    name: string;
}

//Shared Buttons type
export type ButtonProps = {
    children: React.ReactNode;
    buttonStyle?: string;
}

