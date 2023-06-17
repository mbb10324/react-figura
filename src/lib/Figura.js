import { INITIAL_FORM, useFormValidation } from "./FiguraUtils/FiguraReducer";
import { FiguraContext, ResetContext } from "./FiguraUtils/FiguraContext";
import { formSubmitHandler } from "./FiguraUtils/FormSubmitHandler";
import { matchNameAndType } from "./FiguraUtils/ValidationUtils";
import React, { useEffect, useState } from "react";

export default function Figura(props) {
  const { children, figuraID, formStyle, onSubmit } = props;
  const { formState, dispatch } = useFormValidation();
  const [selected, setSelected] = useState("");
  const [reset, setReset] = useState(false);
  const fieldNames = [];
  const formID = figuraID;

  if (children && Array.isArray(children)) {
    children.forEach((child) => {
      if (child.props.name) {
        const childType = matchNameAndType(child.type.displayName);
        fieldNames.push({ name: child.props.name, type: childType });
      }
    });
  }

  useEffect(() => {
    dispatch({ type: INITIAL_FORM, data: fieldNames });
    setReset(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  return (
    <ResetContext.Provider value={{ selected, setSelected, setReset }}>
      <FiguraContext.Provider value={{ formState, dispatch, formID }}>
        <form
          noValidate
          className={`${formStyle ? formStyle : "form-style"}`}
          onSubmit={(e) => {
            formSubmitHandler(e, dispatch, formState, onSubmit, formID);
          }}
        >
          {children}
        </form>
      </FiguraContext.Provider>
    </ResetContext.Provider>
  );
}
