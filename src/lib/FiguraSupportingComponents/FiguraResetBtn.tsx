import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import { Action, ButtonProps } from "../FiguraUtils/FiguraTypes";
import { RESET_FORM } from "../FiguraUtils/FiguraReducer";
import React, { useContext } from "react";

export default function FiguraResetBtn(props: ButtonProps) {
    const { children, buttonStyle } = props;
    const resetContext = useContext(ResetContext);

    function resetForm(dispatch: React.Dispatch<Action>) {
        //ensure we have context
        if (resetContext) {
            //setSelected for button group back to default
            resetContext.setSelected("");
            //setReset to true which tells Figura component we are reseting
            resetContext.setReset(true);
        }
        //reset reducer back to initial state
        dispatch({ type: RESET_FORM });
    }

    return (
        <FiguraContext.Consumer>
            {(context) => (
                <button
                    type="reset"
                    onClick={() => { context && resetForm(context.dispatch); }}
                    className={`${buttonStyle ? buttonStyle : "reset-button"}`}>
                    {children}
                </button>
            )}
        </FiguraContext.Consumer>
    );
};

FiguraResetBtn.displayName = "FiguraResetBtn"; //we do this because children.name is unstable. Therefore we explicitly define a displayName