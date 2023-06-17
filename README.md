<div align="center">
    <a href="https://github.com/mbb10324/figura/">
        <img src="https://raw.githubusercontent.com/mbb10324/figura/tree/master/docs/logo.png" alt="react-figura">
    </a>
</div>

## Disclaimer 
This library is currently in early production. If you notice any issues let us know @ https://github.com/mbb10324/figura/issues

## Description
Figura is a powerful yet lightweight library of React components designed to simplify form handling, validation, and submission. It offers an easy-to-use and fully customizable solution for managing forms in your applications.

## Installation
To install Figura, run the following command: `npm install react-figura --save`

## Use Case
Figura was created with three main purposes in mind:

1. **Customizability:** Figura provides a simple and effective way to customize form components. Out of the box, Figura components come pre styled however, we highly recommend customizing the components using the pre-defined style props. You can use Tailwind CSS classes or regular CSS class names to achieve the desired styling.

2. **Single Form State:** Figura utilizes React's built-in useReducer hook to manage form state. It stores the state of all forms in a single reducer, eliminating unexpected re-renders and simplifying state management. With Figura, developers can use the components without worrying about complex state management, as it is handled seamlessly by the library.

3. **Custom Validation:** While vanilla HTML provides basic form validation, Figura takes it a step further by offering custom syntax and styling for error messages. Figura combines industry standards for form validation and error handling, allowing developers to create professional applications with beautiful and user-friendly form validation.

## Example

```jsx
import { Figura, FiguraText, FiguraLabel, FiguraEmail, FiguraTitle, 
FiguraPassword, FiguraSubmitBtn, FiguraPhone, FiguraBigError } from "react-figura"
import 'react-figura/dist/styles.css';

export default function MyFormComponent() {

    function signUp({ yourname, email, phone, password }) {
        return fetch(`http://localhost:3000/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            mode: "cors",
            body: JSON.stringify({ yourname, email, phone, password }),
        })
    }

    return (
        <div className="w-full h-screen flex justify-center">

            <Figura figuraID={"signup"} onSubmit={signUp}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText name="yourname">
                    <FiguraLabel>Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail name="email">
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone name="phone">
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword name="password">
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>

        </div>
    )
}
```

**How to handle onSubmit**

When handling the `onSubmit` event, Figura will pass back an object called `data`. Your function for handling the data needs to accept it as an argument, like `myFunction(data)`. If desired, you can destructure the `data` object as shown in the example above.

The `name` prop is required by all of Figuras input components. The name that you assign to the component will be returned in `data` as the key of the input value.

We recommend starting by accepting the `data` object and using `console.log(data)` to inspect the structure and contents of the object. Once you understand the object being passed back from Figura, you can destructure it and manipulate the data according to your needs.

## Components

| Components | Validation | Props | HTML |
| ---------- | ---------- | ----- | ---- |
| Figura | N/A | figuraID(required), onSubmit, formStyle | `<form>` |
| FiguraLabel | N/A | labelStyle | `<label>` |
| FiguraTitle | N/A | titleStyle | `<h1>` |
| FiguraSubmitBtn | N/A | buttonStyle | `<button type="submit">` |
| FiguraResetBtn | N/A | buttonStyle | `<button type="reset">` |
| FiguraButton | N/A(must be used as a child of FiguraButtonGroup) | buttonStyle | `<input type="button">` |
| FiguraButtonGroup | must choose an option | wrapper, errorStyle, name | `<div>` |
| FiguraText | must be filled and must not contain any special characters | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="text">` |
| FiguraEmail | must be filled and must be in a valid email address format | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="email">` |
| FiguraPassword | must be filled and must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="password">` |
| FiguraConfirmPassword | must be filled (must have 1 corresponding FiguraPassword) and must match password | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="password">` |
| FiguraPhone | must be filled and must be a valid 10 digit phone number | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="tel">` |
| FiguraTimeMilitary | must be filled and must be in a valid 24h format ex: 12:34 | wrapper, inputStyle, errorStyle, validator, name | `<input type="time24">` |
| FiguraTime | must be filled | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="time">` |
| FiguraNumber | must be filled and must be between -1 million and 1 million |  wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="number">` |
| FiguraWeek | must be filled | wrapper, inputStyle, errorStyle, validator, name | `<input type="week">` |
| FiguraMonth | must be filled | wrapper, inputStyle, errorStyle, validator, name | `<input type="month">` |
| FiguraDate | must be filled and must be a valid date | wrapper, inputStyle, errorStyle, validator, name | `<input type="date">` |
| FiguraDateLocal | must be filled and must be a valid date and time | wrapper, inputStyle, errorStyle, validator, name | `<input type="datetime-local">` |
| FiguraCheckBox | must be checked | wrapper, inputStyle, errorStyle, validator, name | `<input type="checkbox">` |
| FiguraRadio | must be clicked | wrapper, inputStyle, errorStyle, validator, name | `<input type="radio">` |
| FiguraRange | must choose a range | wrapper, inputStyle, errorStyle, validator, name | `<input type="range">` |
| FiguraColor | must choose a color | wrapper, inputStyle, errorStyle, validator, name | `<input type="color">` |
| FiguraFile | must select a file | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="file">` |
| FiguraUrl | must be filled and must be a valid url | wrapper, inputStyle, errorStyle, validator, name | `<input type="url">` |
| FiguraHidden | must NOT be filled | wrapper, inputStyle, errorStyle, validator, name | `<input type="hidden">` |
| FiguraSelect | must have a value | wrapper, inputStyle, errorStyle, validator, name | `<select>` |
| FiguraTextArea | cannot exceed 250 characters | wrapper, inputStyle, errorStyle, validator, placeholder, name | `<textarea>` |

___

`Figura`: This is the primary component of our library.

- The Figura component is the main wrapper for all other Figura components. It requires a unique figuraID prop, which should be unique when using multiple Figura forms in your application. This ID identifies the form that the user is interacting with, ensuring a single source of truth for form state throughout your application.
- This component accepts an onSubmit prop, similar to the HTML variant, to handle form submission. You can provide a custom function to handle form submission with this prop.

Example usage:

```jsx
function formSubmission(data) {
    console.log(data)
}

return (
    <Figura figuraID={"myspecialID"} onSubmit={formSubmission} formStyle="w-80 m-4 p-2 bg-gray-400 overflow-hidden">

        <FiguraText name="yourname">
            <FiguraLabel>Name:</FiguraLabel>
        </FiguraText>

        <FiguraEmail name="email">
            <FiguraLabel>Email:</FiguraLabel>
        </FiguraEmail>

        <FiguraPassword name="password">
            <FiguraLabel>Password:</FiguraLabel>
        </FiguraPassword>

        <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

    </Figura>
)
```

> **_NOTE:_** Figura handles the html event for you, and by default calls preventDefault. You can still pass the event if you'd like.

___

`FiguraLabel`: This component is used within input components to set a label above the input field.

Example usage:

```jsx
    <FiguraText name="yourname">
        <FiguraLabel labelStyle="text-2xl text-rose-400">Name:</FiguraLabel>
    </FiguraText>
```

___

`FiguraTitle`: This component creates a title for your form. 

Example usage:

```jsx
    <FiguraTitle titleStyle="text-center text-4xl text-rose-400">Sign Up Form</FiguraTitle>
```

___

`FiguraSubmitBtn`: This component is the primary submit button for Figura forms.

Example usage:

```jsx
    <FiguraSubmitBtn buttonStyle="bg-sky-400 border-2 border-black">Sign Up</FiguraSubmitBtn>
```

___

`FiguraHidden`: This component is a hidden input field and is used as a honeypot to catch bots. if it is filled it will throw an error warning the user that a bot may be attempting to fill a form. Use this component as a security mechanism.

Example usage:

```jsx
    <Figura figuraID={"myspecialID"}>

        <FiguraText name="yourname">
            <FiguraLabel>Name:</FiguraLabel>
        </FiguraText>

         <FiguraPassword name="password">
            <FiguraLabel>Password:</FiguraLabel>
        </FiguraPassword>

        <FiguraSubmitBtn>Log In</FiguraSubmitBtn>

        <FiguraHidden name="hidden"/> 

    </Figura>
```

___

`FiguraButtonGroup` & `FiguraButton`: These two components are used in concert to create a group of buttons to choose from. FiguraButtonGroup ONLY accepts FiguraButton as a child. FiguraButton can ONLY be used as a child of FiguraButtonGroup. The resulting value that you recieve will be the child of FiguraButton. So in the example below if you click 'Okay' FiguraButtonGroup's value will be 'Okay'. To give the button group a label see the example below. The buttongroup also requires a name.

Example usage:

```jsx
    <Figura figuraID={"myspecialID"}>
        <span>How are you feeling today?</span>
        <FiguraButtonGroup name="buttongroup">
            <FiguraButton>Good</FiguraButton>
            <FiguraButton>Okay</FiguraButton>
            <FiguraButton>Bad</FiguraButton>
        </FiguraButtonGroup>
    </Figura>
```

___

These components: (`FiguraEmail`, `FiguraPassword`, `FiguraPhone`, `FiguraTimeMilitary`, `FiguraSelect`, `FiguraTextArea`, `FiguraCheckBox`, `FiguraRadio`, `FiguraConfirmPassword`, `FiguraRange`, `FiguraTime`, `FiguraNumber`, `FiguraDate`, `FiguraDateLocal`, `FiguraColor`, `FiguraWeek`, `FiguraMonth`, `FiguraFile`, `FiguraUrl`) display form input fields, and each have unique validation described in the table above. All of these components require a 'name' prop. You can use the 'wrapper' prop to customize the div container around the input field, error message, and label.

Example usage:

```jsx
    <FiguraText 
        name="yourname"
        wrapper="flex flex-col mb-1" 
        inputStyle="bg-black text-white p-2 outline-none rounded-3xl" 
        errorStyle="text-rose-500" 
        placeholder="What is your name?..."
    >
        <FiguraLabel>Name:</FiguraLabel>
    </FiguraText>
```

___

> **_Style TIP 1._** By default the input components are ordered as label -> input -> error top to bottom. To reverse the direction of the components you can use css's 'flex-direction: column-reverse' or tailwind 'flex-col-reverse' on the wrapper prop and then you will have error -> input -> label.

> **_Style TIP 2._** Anytime you use custom styling it will totally overwrite Figuras styling.

> **_Style TIP 3._** By default Figura styles all of the children in a flex column. If you'd like to have multiple input fields next to each other use css grid. Heres an example of how you can pass your formStyle prop with styling to create a grid `formStyle="grid grid-cols-2 gap-4 w-96 m-4 mt-20 p-2 overflow-hidden"` then make your title span the grid with `titleStyle="col-span-2 text-center h-10 text-3xl overflow-hidden"`

## Custom Validation

If you need to create custom validation logic for an input field pass the prop 'validator' in to the component with your custom validation function.

Example usage:

```jsx
function customNameValidation(value: any) {
    if (value.trim() === "") {
        return { hasError: true, error: "Custom Name validation" };
    }
    return { hasError: false, error: "" };
}

return (
    <FiguraText name="firstname" validator={customNameValidation}>
        <FiguraLabel>First Name:</FiguraLabel>
    </FiguraText>
)
```

> **_NOTE:_** This will totally override Figuras built in validation (i.e. your function replaces Figuras). You must return an object with {hasError: boolean, error: string}

## License 

- Copyright 2023-present react-figura
- Licensed under the Apache License, Version 2.0 (the "License")
- For more license information check out https://github.com/mbb10324/figura/blob/master/LICENSE

## Feedback

- **If you've made it this far; thank you and enjoy the library!**
- **If you have any feedback and would like to see things added/removed/changed create a new issue @ https://github.com/mbb10324/figura/issues**
- **Figura is an open-source library, feel free to contribute @ https://github.com/mbb10324/figura/**



