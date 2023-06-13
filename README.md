# FIGURA

## Disclaimer 
This library is currently in production/testing and is strictly a pre-release version.
## Description
Figura is a powerful library of React components designed to simplify form handling, validation, and submission. It offers an easy-to-use and fully customizable solution for managing forms in your applications. Figura is built with React, TypeScript, and Tailwind CSS.
## Installation
To install Figura, run the following command:
`npm install react-figura --save`

## Use Case
Figura was created with three main purposes in mind:

1. **Customizability:** Figura provides a simple and effective way to customize form components. By importing the Figura styles (import 'react-figura/dist/styles.css'), you can apply pre-defined styles. However, we highly recommend customizing the components using the pre-defined style props. You can use Tailwind CSS classes or regular CSS class names to achieve the desired styling.

2. **Single Form State:** Figura utilizes React's built-in useReducer hook to manage form state. It stores the state of all forms in a single reducer, eliminating unexpected re-renders and simplifying state management. With Figura, developers can use the components without worrying about complex state management, as it is handled seamlessly by the library.

3. **Custom Validation:** While vanilla HTML provides basic form validation, Figura takes it a step further by offering custom syntax and styling for error messages. Figura combines industry standards for form validation and error handling, allowing developers to create professional applications with beautiful and user-friendly form validation.

## Example

```jsx
import { Figura, FiguraText, FiguraLabel, FiguraEmail, FiguraTitle, 
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

            <Figura figuraID={"signup"} onSubmit={signUp}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText>
                    <FiguraLabel>Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>

        </div>
    )
}
```

## Components

| Components | Validation | Props | HTML |
| ---------- | ---------- | ----- | ---- |
| Figura | N/A | figuraID(required), onSubmit, formStyle | `<form>` |
| FiguraLabel | N/A | labelStyle | `<label>` |
| FiguraTitle | N/A | titleStyle | `<h1>` |
| FiguraSubmitBtn | N/A | buttonStyle | `<button>` |
| FiguraText | must be filled and must not contain any special characters | wrapper, inputStyle, errorStyle | `<input type="text">` |
| FiguraEmail | must be filled and must be in a valid email address format | wrapper, inputStyle, errorStyle | `<input type="email">` |
| FiguraPassword | must be filled and must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character | wrapper, inputStyle, errorStyle | `<input type="password">` |
| FiguraPhone | must be filled and must be a valid 10 digit phone number | wrapper, inputStyle, errorStyle | `<input type="tel">` |
| FiguraTimeMilitary | must be filled and must be in a valid 24h format ex: 12:34 | wrapper, inputStyle, errorStyle | `<input type="time24">` |
| FiguraCheckBox | must be checked | wrapper, inputStyle, errorStyle | `<input type="checkbox">` |
| FiguraSelect | must have a value | wrapper, inputStyle, errorStyle | `<select>` |
| FiguraTextArea | cannot exceed 250 characters | wrapper, inputStyle, errorStyle | `<textarea>` |

Figura: This is the primary component of our library, equivalent to an HTML form.

- The Figura component is the main wrapper for all other Figura components. It requires a unique figuraID prop, which should be unique when using multiple Figura forms in your application. This ID identifies the form that the user is interacting with, ensuring a single source of truth for form state throughout your application.
- This component accepts an onSubmit prop, similar to the HTML variant, to handle form submission. You can provide a custom function to handle form submission with this prop.
- Customize with: 'formStyle'.

Here is an example where the form is custom styled using tailwind and passing a custom formSubmission function into Figura:

```jsx
function formSubmission() {
    console.log("you used onSubmit to submit this form")
}

return (
    <Figura figuraID={"myspecialID"} onSubmit={formSubmission} formStyle="w-80 m-4 p-2 bg-gray-400 overflow-hidden">

        <FiguraText>
            <FiguraLabel>Name:</FiguraLabel>
        </FiguraText>

        <FiguraEmail>
            <FiguraLabel>Email:</FiguraLabel>
        </FiguraEmail>

        <FiguraPassword>
            <FiguraLabel>Password:</FiguraLabel>
        </FiguraPassword>

        <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

    </Figura>
)
```

> **_NOTE:_** Figura handles the html event for you, and by default calls preventDefault. You can still pass the event if you'd like.

___

FiguraLabel: This component is used within input components to set a label above the input field.

- Customize with: 'labelStyle'.

```jsx
    <FiguraName>
        <FiguraLabel labelStyle="text-2xl text-rose-400">Name:</FiguraLabel>
    </FiguraName>
```

___

FiguraTitle: This component creates a title for your form using an HTML h1 element. 

- Customize with: 'titleStyle'.

```jsx
    <FiguraTitle titleStyle="text-center text-4xl text-rose-400">Sign Up Form</FiguraTitle>
```

___

FiguraSubmitBtn: This component is the primary submit button for Figura forms, equivalent to an HTML button element.

- Customize with: 'buttonStyle'.

```jsx
    <FiguraSubmitBtn buttonStyle="bg-sky-400 border-2 border-black">Sign Up</FiguraSubmitBtn>
```

___

FiguraText: This component displays an input field with validation for a generic name.

- Validation: must be filled and must not contain any special characters.
- Customize with: 'wrapper'(customizes the div container around the input field, error message, and label), 'inputStyle', and 'errorStyle'.

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

FiguraTimeMilitary: This component displays an input field with validation for a time.

- Validation: must be filled, and must be in 24h format 12:34.
- This component is customized the same as FiguraName from above.

___

FiguraSelect: This component displays a select field with validation if the first options value is "".

- Validation: must have a value.
- This component is customized the same as FiguraName from above.

___

FiguraTextArea: This component displays a textare with validation if the characters exceed 200.

- Validation: Cannot exceed 200 characters.
- This component is customized the same as FiguraName from above.

___

FiguraCheckBox: This component displays a check box with validation if the box is checked.

- Validation: Must be checked.
- This component is customized the same as FiguraName from above.

___

> **_TIP:_** By default the input components are ordered as label -> input -> error top to bottom. To reverse the direction of the components you can use css's 'flex-direction: column-reverse'. or tailwind 'flex-col-reverse' and then you will have error -> input -> label.

## Validation Logic

```jsx
//validates a name
function validateText(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "This field cannot be empty" };
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
        return { hasError: true, error: "Invalid Field. Avoid Special characters" };
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
    let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    if (value.trim() === "") {
        return { hasError: true, error: "Password cannot be empty" }
    } else if (!value.match(strongPassword)) {
        return { hasError: true, error: "Password must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character" }
    }
    return { hasError: false, error: "" };
}

//validates a phone number
function validatePhone(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Phone cannot be empty" }
    } else if (!/^[0-9]{10}$/.test(value)) {
        return { hasError: true, error: "Invalid Phone Number. Use 10 digits only" }
    }
    return { hasError: false, error: "" };
}

//validates a checkbox
function validateCheck(value: any) {
    if (value.trim() === "false") {
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
function validateTimeMilitary(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Time cannot be empty" }
    } else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
        return { hasError: true, error: "Invalid Time Format. Use 12:34" }
    }
    return { hasError: false, error: "" };
}

//validates a text area
function validateTextArea(value: any) {
    if (value.length > 250) {
        return { hasError: true, error: "This text field cannot be longer than 250 characters" }
    }
    return { hasError: false, error: "" };
}
```

___

## Custom Validation Logic

If you need to create custom validation logic for an input field pass the prop 'validator' in to the component with a value of your custom validation function.

```jsx
function customNameValidation(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Custom Name validation" };
    }
    return { hasError: false, error: "" };
}

return (
    <FiguraText validator={customNameValidation}>
        <FiguraLabel>First Name:</FiguraLabel>
    </FiguraText>
)
```

> **_NOTE:_** This will totally override Figuras built in validation (i.e. your function replaces Figuras). You must return an object with {hasError: boolean, error: string}

### License 

This application is currently still in production, and therefore has not been released as an open source repository. 

© [2023] [react-figura]. All rights reserved.

This software and its accompanying documentation are protected by copyright law and international treaties. Unauthorized reproduction or distribution, in whole or in part, is strictly prohibited and may result in severe civil and criminal penalties.

#### If you have any feedback and would like to see things added/removed/changed reach out @ https://github.com/mbb10324/

#### TODO

Fields to Add:

- old password
- confirm password
- range
- radio
- time
- number
- date
- datetime-local
- file
- image
- url
- month
- week
- hidden
- color

Stretch:

- add a honeypot
- add a captcha system


