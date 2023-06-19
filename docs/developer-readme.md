# Figura Developer Readme

Welcome Figura developer!

## Introduction

Figura is a powerful component library designed to simplify form management and validation in your web applications. It provides a set of reusable components and utilities that enable developers to quickly build dynamic and user-friendly forms. It was created using create-react-app with typescript.

## Getting Started

To run the application, follow these steps: 

1. Clone the repository onto your local machine.
2. Navigate to the figura root directory using the terminal.
3. Run `npm install` to install the necessary dependencies.
4. Start the example application by running `npm start`.
5. The application should start on localhost:3000 (or the next available port if 3000 is taken).
6. Upon launching the application, you will be directed to the home/splash page. From there, you can navigate to the simple form example or the huge form example to explore the functionality of the forms.

The files to build the example live within the `/example` folder. 

## The Library
Within the /lib folder, you will find the necessary files to build our component library:

Table of contents:

1. index.tsx
2. styles.css
3. Figura.tsx
4. /FiguraUtils
5. /FiguraSupportingComponents
6. /FiguraInputComponents

### index.tsx
This file serves as the entry point for the library, containing the exported members that users can import.

### styles.css
This is the main stylesheet that defines the styling for all components in our library.

### Figura.tsx
This is a crucial file that manages the entire library. It incorporates the `useFormValidation` reducer to handle state management for the components. Additionally, it acts as the context provider for `FiguraContext` and `ResetContext`. When children are passed into this component, their display names are extracted, and the initial dispatch is fired with the name, type, and validation function for each child. This dispatch dynamically sets the state of the useReducer with the children nested within the Figura component.

### FiguraUtils
The utils folder essentially contains our functions that are not necesseraly components. Within this folder you will find:

- `FiguraContext.tsx`: Defines the context passed around the components.
- `FiguraReducer.tsx`:  Defines the useReducer used for state management. The `initialFormState` starts as an empty object, and the reducer dynamically populates the form state with only the children of the Figura component when the `INITIAL_FORM` type is called. The `UPDATE_FORM` type accepts changes from the checkForErrors function and updates the state accordingly. The `RESET_FORM` is triggered by the FiguraResetBtn and resets the form state to an empty object.
- `FiguraTypes.tsx`: This file contains global type definitons that are used in more then one location.
- `FiguraSubmitHandler.js`: Contains an asynchronous function that is called when the FiguraSubmitBtn is clicked. It handles the event's prevent default behavior, maps over each item in the form state, and runs the checkForErrors function on each item. If an error is returned, the noErrors variable is set to false. If there are no errors, the data object is updated with the name-value pairs from the form state items. After the loop, it checks if noErrors is true and, if so, fires the onSubmit function provided by the user with the data object as a parameter.
- `Validation.tsx`: Contains the validation functions.
- `ValidationUtils.tsx`:
    - checkForErros function:  Maps the name passed into it with the associated validation stored alongside it and executes the validation function. The UPDATE_FORM dispatch is then fired to update the useReducer state. The function returns a boolean indicating the presence of an error.
    - typeMapper function: Used within the Figura component to associate the display name of the child component with a type.
    - validationMapper function: Used within the Figura component to associate the display name of the child component with a validation function.

### FiguraSupportingComponents
This folder contains components that support our form (Figura component). They are classified as supporting components because they are not stored in the useReducer state.

### FiguraInputComponents
This folder includes various input components offered by our library. These components are nested as children under the Figura component and stored in the reducer with an associated name key and value object: `{ value: string, type: string, hasError: false, error: "", touched: false, formID: "", validator: function }`.

___

This documentation provides an overview of the library's functionality. As development progresses and the library matures, we aim to make this documentation more detailed while keeping it simple and easy to understand. Developers can refer to this document for quick and concise explanations of various aspects of our library. When writing documentation, if it becomes overly complex, focus on the overarching mechanism of the function being documented. If the function itself seems too complex, consider refactoring it. At Figura, we prioritize simple, concise, and effective code over unnecessary complexity. While keeping our build size small, we encourage innovative thinking to strike a balance between simplicity and a compact build.


