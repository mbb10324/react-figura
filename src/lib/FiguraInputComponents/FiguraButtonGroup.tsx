import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { PropsWithChildren, useContext } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: string;
    fieldName?: string;
    errorStyle?: string;
    validator?: (value: string) => { hasError: boolean, error: string };
};

export default function FiguraButtonGroup(props: Props) {
    const { wrapper, errorStyle, validator, fieldName, children } = props;
    const resetContext = useContext(ResetContext);

    const childComponents = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                ...child.props,
                selected: resetContext.selected,
                setSelected: resetContext.setSelected,
                key: index,
            });
        }
        return child
    })

    return (
        <FiguraContext.Consumer>
            {(context) => {
                const fieldValue = context.formState[fieldName as string];
                return (
                    <div
                        id={fieldName}
                        className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}
                        onBlur={e => { checkForErrors(true, fieldName, resetContext.selected, "buttongroup", context.dispatch, context.formState, context.formID, validator) }}
                    >
                        {childComponents}
                        <FiguraError fieldValue={fieldValue} errorStyle={errorStyle} />
                    </div>
                )
            }}
        </FiguraContext.Consumer>
    );
};