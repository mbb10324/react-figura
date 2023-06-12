# FIGURA

## Description
Figura is a library of react components intended to streamline forms, form validation, and form submission all in a easy to use fully customizable library.
Figura is created using react, typescript, and tailwind css. 
## Installation
Run the following command:
`npm install react-figura --save`

## Use Case
This library was created with 3 major purposes in mind.
- Easily customizable 
- Single form state
- Custom validation

We achieve customizability in a simple and effective way. Figura components come pre styled. To apply the styling from Figura `import 'react-figura/dist/styles.css'`. If you want to custom style your components (which we highly reccommend) you can utilize our pre-defined style props listed below, and pass in tailwind or a regular css element name.

Next we handle a single form state by using reacts built in useReducer hook. We store state from all of our forms in a single useReducer. This eleminates the possibility of re-renders at unforseen times, and gives the developer the capability to utilize our components without even having to consider state management. It is all handled in a clean and effective way by Figura. 

Vanilla HTML provides validation that works, but in a proffesional application most developers would prefer to have custom syntax, and styling for there error messages. This is ultimately Figura's primary benefit, and we've achieved a beautiful solution for this by combining the remarks from above and using the industry standards for form validation and error messages. 

## Example

```jsx
import { Figura, FiguraName, FiguraLabel, FiguraEmail, FiguraTitle, 
FiguraPassword, FiguraSubmitBtn, FiguraPhone, FiguraBigError } from "react-figura"
import 'react-figura/dist/styles.css';

export default function MyFormComponent() {

    function signUp({ name, email, phone, password }) {
        return fetch(`http://localhost:3000/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            mode: "cors",
            body: JSON.stringify({ name, email, phone, password }),
        })
    }

    return (
        <div className="w-full h-screen flex justify-center">

            <Figura figuraID={"signup"} endpoint={signUp}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraName>
                    <FiguraLabel>Name:</FiguraLabel>
                </FiguraName>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraBigError>Please fill out the entire form.</FiguraBigError>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>

        </div>
    )
}
```

## Components

Figura: This is the primary component of our library. it is equivalent to html's form

- Being the main component that will wrap all of Figura's other components, we require that you pass a unique figuraID to this component. This ID needs to be unique especially when utilizing multiple Figura forms throughout your application. This ID tells Figura which form the user is interacting with, and allows us to maintain a single source of truth for form state throughout your application.
- This component accepts 2 seperate props which are responsible for submitting your form. The first method is 'endpoint'; when using this prop you would simply pass a function which calls an API to submit your form. The second method is the common html variant 'onSubmit'; when using this prop you can call a custom function that you create to handle form submission.
- Customize with: 'formStyle'.

Here is an example where the form is custom styled using tailwind and passing some custom formSubmission function into Figura:

```jsx
function formSubmission() {
    console.log("you used onSubmit to submit this form")
}

return (
    <Figura figuraID={"myspecialID"} onSubmit={formSubmission} formStyle="w-80 m-4 p-2 bg-gray-400 overflow-hidden">

        <FiguraName>
            <FiguraLabel>Name:</FiguraLabel>
        </FiguraName>

        <FiguraEmail>
            <FiguraLabel>Email:</FiguraLabel>
        </FiguraEmail>

        <FiguraPassword>
            <FiguraLabel>Password:</FiguraLabel>
        </FiguraPassword>

        <FiguraBigError>Please fill out the entire form.</FiguraBigError>

        <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

    </Figura>
)
```

> **_NOTE:_** Figura handles the html event for you, and by default calls preventDefault. You can still pass the event if you'd like.

___


FiguraLabel: This component is used within input components to set a label over the input field.

- Customize with: 'labelStyle'.

```jsx
    <FiguraName>
        <FiguraLabel labelStyle="text-2xl text-rose-400">Name:</FiguraLabel>
    </FiguraName>
```

___

FiguraTitle: This component creates a title using htmls h1 for your form. 

- Customize with: 'titleStyle'.

```jsx
    <FiguraTitle titleStyle="text-center text-4xl text-rose-400">Sign Up Form</FiguraTitle>
```

___

FiguraSubmitBtn: This component is the primary submit button for Figura forms, its html equivalent is button.

- Customize with: 'buttonStyle'.

```jsx
    <FiguraSubmitBtn buttonStyle="bg-sky-400 border-2 border-black">Sign Up</FiguraSubmitBtn>
```

___

FiguraBigError: This component displays a pop up when clicking submit and the form has not succesfully been validated.

- Customize with: 'bigErrorStyle'.

```jsx
    <FiguraBigError bigErrorStyle="bg-rose-400 border-2 border-rose-900 text-rose-900">Please fill out the entire form.</FiguraBigError>
```

___

FiguraName: This component displays an input field with validation for a generic name.

- Validation: must be filled, must contain no special characters.
- Customize with: 'wrapper'(this customizes the div around our input field, error message, and label), 'inputStyle', and 'errorStyle'.

```jsx
    <FiguraName wrapper="flex flex-col mb-1" inputStyle="bg-white text-black" errorStyle="text-rose-900">
        <FiguraLabel>Name:</FiguraLabel>
    </FiguraName>
```

___

FiguraEmail: This component displays an input field with validation for an email address.

- Validation: must be filled. must be in a valid email address format.
- This component is customized the same as FiguraName from above. 

___

FiguraPassword: This component displays an input field with validation for a password.

- Validation: must be filled, and must be 8 characters in length.
- This component is customized the same as FiguraName from above. 

___

FiguraPhone: This component displays an input field with validation for a phone number.

- Validation: must be filled, and must be a valid phone number.
- This component is customized the same as FiguraName from above.

___

FiguraTime: This component displays an input field with validation for a time.

- Validation: must be filled, and must be in format 12:34.
- This component is customized the same as FiguraName from above.

___

FiguraSelect: This component displays a select field with validation if the first options value is "".

- Validation: must have a value.
- This component is customized the same as FiguraName from above.

___

FiguraNotes: This component displays a textare with validation if the characters exceed 200.

- Validation: Cannot exceed 200 characters.
- This component is customized the same as FiguraName from above.

___

FiguraCheckBox: This component displays a check box with validation if the box is checked.

- Validation: Must be checked.
- This component is customized the same as FiguraName from above.

___

## Validation Logic

```jsx
//validates a name
function validateName(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Name cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Name. Avoid Special characters" };
    }
    return { hasError: false, error: "" };
}

//validates a email
function validateEmail(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Email cannot be empty" };
    } else if (!/^[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {
        return { hasError: true, error: "Invalid Email" };
    }
    return { hasError: false, error: "" };
}

//validates a password
function validatePassword(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" }
    } else if (value.trim().length < 8) {
        return { hasError: true, error: "Password must have at least 8 characters" }
    }
    return { hasError: false, error: "" };
}

//validates a phone number
function validateMobile(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" }
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" }
    }
    return { hasError: false, error: "" };
}

//validates a checkbox
function validateCheck(value: any) {
    if (!value) {
        return { hasError: true, error: "You must check this box." }
    }
    return { hasError: false, error: "" };
}

//validates a select field
function validateSelect(value: any) {
    if (!value) {
        return { hasError: true, error: "Please choose an option" }
    }
    return { hasError: false, error: "" };
}

//validates time format
function validateTime(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" }
    }
    return { hasError: false, error: "" };
}

//validates a text area
function validateNotes(value: any) {
    if (value.length > 200) {
        return { hasError: true, error: "Notes cannot be longer than 200 characters" }
    }
    return { hasError: false, error: "" };
}

```

### License 

This application is currently still in production, and therefore has not been released as an open source repository. 

© [2023] [react-figura]. All rights reserved.

This software and its accompanying documentation are protected by copyright law and international treaties. Unauthorized reproduction or distribution, in whole or in part, is strictly prohibited and may result in severe civil and criminal penalties.

#### If you have any feedback and would like to see things added/removed/changed reach out @ https://github.com/mbb10324/


