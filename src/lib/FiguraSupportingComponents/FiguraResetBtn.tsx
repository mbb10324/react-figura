import { FiguraContext, ResetContext } from "../FiguraUtils/FiguraContext";
import React, { PropsWithChildren, useContext } from "react";
import { RESET_FORM } from "../FiguraUtils/Validation";

interface Props extends PropsWithChildren {
    buttonStyle?: string;
};

export default function FiguraResetBtn(props: Props) {
    const { children, buttonStyle } = props;
    const resetContext = useContext(ResetContext);

    function resetForm(dispatch: any) {
        resetContext.setSelected("");
        resetContext.setReset(true);
        dispatch({ type: RESET_FORM });
    }

    return (
        <FiguraContext.Consumer>
            {(figContext) => (
                <button
                    type="reset"
                    onClick={() => { resetForm(figContext.dispatch) }}
                    className={`${buttonStyle ? buttonStyle :
                        `mb-1 mt-7 w-full bg-gray-300 hover:bg-gray-400 outline-none rounded-md 
                                p-2 transition-all duration-500 ease-in-out`}`}
                >
                    {children}
                </button>
            )}
        </FiguraContext.Consumer>
    );
};