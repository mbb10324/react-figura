# FIGURA

## Description
Figura is a library of react components intended to streamline forms, form validation, and form submission all in a easy to use fully customizable library.
## Installation
Run the following command:
`npm install react-figura --save`

## Example

```
import { Figura, FiguraName, FiguraLabel, FiguraEmail, FiguraTitle, 
FiguraPassword, FiguraSubmitBtn, FiguraPhone, FiguraBigError } from "react-figura"
import 'react-figura/dist/styles.css';

export default function MyFormComponent() {

    return (
        <div className="w-full h-screen flex justify-center">

            <Figura figuraID={"signup"} endpoint={"api.someApiFunction"}>

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
- You can customize the style of this component by passing down the prop: 'formStyle'.

Here is an example where the form is custom styled using tailwind and passing an api endpoint into Figura.

```
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

> **_NOTE:_** Figura handles the html event for you, and by default calls preventDefault. You can still pass the event if you'd like though.

___


FiguraLabel: This component is used within input components to set a label over the input field.

- You can customize the style of this component by passing down the prop: 'labelStyle'.

Here is an example with a custom styled label.

```
    <FiguraName>
        <FiguraLabel labelStyle="text-2xl text-rose-400">Name:</FiguraLabel>
    </FiguraName>
```

___

FiguraTitle: This component creates a title using htmls h1 for your form. 

- You can customize the style of this component by passing down the prop: 'titleStyle'.

Here is an example.

```
    <FiguraTitle titleStyle="text-center text-4xl text-rose-400">Sign Up Form</FiguraTitle>
```

___

FiguraSubmitBtn: This component is the primary submit button for Figura forms, its html equivalent is button.

- You can customize the style of this component by passing down the prop: 'buttonStyle'.

Here is an example.

```
    <FiguraSubmitBtn buttonStyle="bg-sky-400 border-2 border-black">Sign Up</FiguraSubmitBtn>
```

___

FiguraBigError: This component displays a pop up when clicking submit and the form has not succesfully been validated.

- You can customize the style of this component by passing down the prop: 'bigErrorStyle'.

Here is an example.

```
    <FiguraBigError bigErrorStyle="bg-rose-400 border-2 border-rose-900 text-rose-900">Please fill out the entire form.</FiguraBigError>
```

