import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import { RESET_FORM } from "../FiguraUtils/FiguraReducer";
import React, { useContext } from "react";

export default function FiguraResetBtn(props) {
    const { children, buttonStyle } = props;
    const resetContext = useContext(ResetContext);

    function resetForm(dispatch) {
        resetContext.setSelected("");
        resetContext.setReset(true);
        dispatch({ type: RESET_FORM });
    }

    return (
        <FiguraContext.Consumer>
            {(figContext) => (
                <button
                    type="reset"
                    onClick={() => { resetForm(figContext.dispatch); }}
                    className={`${buttonStyle ? buttonStyle : "reset-button"}`}>
                    {children}
                </button>
            )}
        </FiguraContext.Consumer>
    );
};

FiguraResetBtn.displayName = "FiguraResetBtn";