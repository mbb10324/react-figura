<div align="center">
    <a href="https://github.com/mbb10324/figura/">
        <img src="https://raw.githubusercontent.com/mbb10324/figura/master/docs/logo.png" alt="react-figura" width="60%" />
    </a>
    
How to install? run `npm install react-figura --save`<br>
Issues? let us know @ https://github.com/mbb10324/figura/issues
</div>

<table align="center">
  <tr> <td> <ul><li>- [x] Pre built components</li></ul> </td>              <td> <ul><li>- [x] Individual input rendering</li></ul>    </td> </tr>
  <tr> <td> <ul><li>- [x] Fully and easily customizable</li></ul> </td>     <td> <ul><li>- [x] Lightweight package</li></ul>           </td> </tr>
  <tr> <td> <ul><li>- [x] Pre built validation</li></ul>  </td>             <td> <ul><li>- [x] Written in typescript</li></ul>         </td> </tr>
  <tr> <td> <ul><li>- [x] Supports custom validation</li></ul> </td>        <td> <ul><li>- [x] Supports all style frameworks</li></ul> </td> </tr>
  <tr> <td> <ul><li>- [x] Simple to use</li></ul> </td>                     <td> <ul><li>- [x] Good docs and support</li></ul>         </td> </tr>
</table>

## Overview
Figura is a powerful yet lightweight library of React components designed to simplify form handling, validation, and submission. It offers an easy-to-use and fully customizable solution for managing forms in your applications. With Figura, you don't have to reinvent the wheel. Our library can make the process of form creation more efficient, allowing developers to deliver better experiences faster. Whether you're a beginner looking to grasp the basics of form creation, or an experienced developer seeking to streamline your workflow, Figura is designed with you in mind. 

## Example

```jsx
import { Figura, FiguraText, FiguraLabel, FiguraEmail, FiguraTitle, FiguraPassword, 
FiguraSubmitBtn, FiguraResetBtn, FiguraPhone } from "react-figura"

export default function MyFormComponent() {

    function formSubmission(data) {
        console.log(data)
    }   

    return (
        <div className="w-full h-screen flex justify-center">

            <Figura formID="signup" onSubmit={formSubmission}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText name="name">
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
                <FiguraResetBtn>Sign Up</FiguraResetBtn>

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
| Figura | N/A | formID(required), onSubmit, formStyle | `<form>` |
| FiguraLabel | N/A | labelStyle | `<label>` |
| FiguraTitle | N/A | titleStyle | `<h1>` |
| FiguraSubmitBtn | N/A | buttonStyle | `<button type="submit">` |
| FiguraResetBtn | N/A | buttonStyle | `<button type="reset">` |
| FiguraButton | N/A(must be used as a child of FiguraButtonGroup) | buttonStyle | `<input type="button">` |
| FiguraHidden | must NOT be filled | N/A | `<input type="hidden">` |
| FiguraButtonGroup | must choose an option | wrapper, errorStyle, validator, name | `<div>` |
| FiguraText | must be filled and must not contain any special characters | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="text">` |
| FiguraEmail | must be filled and must be in a valid email address format | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="email">` |
| FiguraPassword | must be filled and must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="password">` |
| FiguraConfirmPassword | must be filled (must have 1 corresponding FiguraPassword) and must match password | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="password">` |
| FiguraPhone | must be filled and must be a valid 10 digit phone number | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="tel">` |
| FiguraTimeMilitary | must be filled and must be in a valid 24h format ex: 12:34 | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="time24">` |
| FiguraTime | must be filled | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="time">` |
| FiguraNumber | must be filled and must be between -1 million and 1 million | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="number">` |
| FiguraWeek | must be filled | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="week">` |
| FiguraMonth | must be filled | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="month">` |
| FiguraDate | must be filled and must be a valid date | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="date">` |
| FiguraDateLocal | must be filled and must be a valid date and time | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="datetime-local">` |
| FiguraCheckBox | must be checked | wrapper, inputStyle, errorStyle, validator, name | `<input type="checkbox">` |
| FiguraRadio | must be clicked | wrapper, inputStyle, errorStyle, validator, name | `<input type="radio">` |
| FiguraRange | must choose a range | wrapper, inputStyle, errorStyle, validator, name | `<input type="range">` |
| FiguraColor | must choose a color | wrapper, inputStyle, errorStyle, validator, name | `<input type="color">` |
| FiguraFile | must select a file | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<input type="file">` |
| FiguraUrl | must be filled and must be a valid url | onChange, wrapper, inputStyle, errorStyle, validator, name | `<input type="url">` |
| FiguraSelect | must have a value | onChange, wrapper, inputStyle, errorStyle, validator, name | `<select>` |
| FiguraTextArea | cannot exceed 250 characters | onChange, wrapper, inputStyle, errorStyle, validator, placeholder, name | `<textarea>` |

> **_NOTE:_** Some components accept an `onChange` prop. By default Figura validates input fields only `onBlur`. If you would like to validate fields on change, just pass the prop to the specified fields that accept it in the chart above as `onChange={true}`

___

`Figura`: This is the primary component of our library.

- The Figura component is the main wrapper for all other Figura components. It requires a unique formID prop, which should be unique when using multiple Figura forms in your application. This ID identifies the form that the user is interacting with, ensuring a single source of truth for form state throughout your application.
- This component accepts an onSubmit prop, similar to the HTML variant, to handle form submission. You can provide a custom function to handle form submission with this prop.

Example usage:

```jsx
function formSubmission(data) {
    console.log(data)
}

return (
    <Figura formID="myspecialID" onSubmit={formSubmission} formStyle="w-80 m-4 p-2 bg-gray-400 overflow-hidden">

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
    <Figura formID="myspecialID">

        <FiguraText name="yourname">
            <FiguraLabel>Name:</FiguraLabel>
        </FiguraText>

         <FiguraPassword name="password">
            <FiguraLabel>Password:</FiguraLabel>
        </FiguraPassword>

        <FiguraSubmitBtn>Log In</FiguraSubmitBtn>

        <FiguraHidden /> 

    </Figura>
```

___

`FiguraButtonGroup` & `FiguraButton`: These two components are used in concert to create a group of buttons to choose from. FiguraButtonGroup ONLY accepts FiguraButton as a child. FiguraButton can ONLY be used as a child of FiguraButtonGroup. The resulting value that you recieve will be the child of FiguraButton. So in the example below if you click 'Okay' FiguraButtonGroup's value will be 'Okay'. To give the button group a label see the example below. The buttongroup also requires a name.

Example usage:

```jsx
    <Figura formID="myspecialID">
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

## Why Choose Figura?

Individual Input Rendering: The true strength of Figura lies in its smart utilization of React's built-in useCallback and memoization. This efficient implementation ensures each input field is rendered individually, boosting performance and ensuring your forms are not just effective, but also efficient.

Customizability: Figura provides a simple and effective way to customize form components. Out of the box, Figura components come pre styled however, we highly recommend customizing the components using the pre-defined style props. You can utilize Tailwind CSS classes or regular CSS class names to achieve the desired styling.

Single Form State: Figura leverages React's built-in useReducer hook to manage form state. It stores the state of forms in a single reducer, eliminating unexpected re-renders and simplifying state management. With Figura, developers can use the components without worrying about complex state management, as it is handled seamlessly by the library.

Custom Validation: While vanilla HTML provides basic form validation, Figura takes it a step further by offering custom syntax and styling for error messages. Figura implements industry standards for form validation and error handling, allowing developers to create professional applications with beautiful and user-friendly form validation.

Lightweight and Efficient: Since its inception Figura went through hundreds(if not thousands) of iterations, constantly tweaking, testing, and reconfiguring to achieve maximum performance in the smallest build size possible, while also maintaining feature parity.

## License 

- Copyright 2023-present react-figura
- Licensed under the Apache License, Version 2.0 (the "License")
- For more license information check out https://github.com/mbb10324/figura/blob/master/LICENSE

## Feedback

- **If you've made it this far; thank you and enjoy the library!**
- **If you have any feedback and would like to see things added/removed/changed create a new issue @ https://github.com/mbb10324/figura/issues**

## Contributing

Figura is an open-source library, and we welcome contributions from the developer community. If you're interested in contributing, we recommend following these steps located within the `/docs` folder to get started:

1. Read the **Code of Conduct**: Before contributing, please familiarize yourself with our Code of Conduct, which outlines the expected behavior and guidelines for interaction within the Figura community.

2. Review the **Developer Guidelines**: Take some time to read our Developer Guidelines, which provide helpful information and best practices for contributing code, reporting issues, and proposing new features.

3. Explore the **Developer Readme**: The Developer Readme, serves as a comprehensive guide for developers working with the Figura library. It provides detailed information about the library's architecture, key components, and usage instructions.

Once you have gone through these resources and feel comfortable with the guidelines and documentation, you can start contributing to Figura @ https://github.com/mbb10324/figura!

We greatly appreciate your contributions and look forward to building an inclusive and collaborative developer community around Figura!
