import { validationChecker } from "./Validation";
import { UPDATE_FORM } from "./FiguraReducer";

export async function checkForErrors( wasTouched, name, value, type, dispatch, formState, formID, validator) {
  let tempHasError = false;
  let tempError = "";
  if (validator) {
    const validationResults = await validator(value);
    tempHasError = validationResults.hasError;
    tempError = validationResults.error;
  } else {
    const validationResults = await validationChecker(type, value, formState);
    tempHasError = validationResults.hasError;
    tempError = validationResults.error;
  }
  dispatch({
    type: UPDATE_FORM,
    data: { name, value, type, hasError: tempHasError, error: tempError, touched: wasTouched, formID },
  });
  return tempHasError;
}

export function matchNameAndType(name) {
  if (name === "FiguraTextArea") return "textarea";
  else if (name === "FiguraCheckBox") return "checkbox";
  else if (name === "FiguraEmail") return "email";
  else if (name === "FiguraPassword") return "password";
  else if (name === "FiguraConfirmPassword") return "confirmpassword";
  else if (name === "FiguraPhone") return "tel";
  else if (name === "FiguraSelect") return "select";
  else if (name === "FiguraText") return "text";
  else if (name === "FiguraTime") return "time";
  else if (name === "FiguraTimeMilitary") return "time24";
  else if (name === "FiguraRadio") return "radio";
  else if (name === "FiguraRange") return "range";
  else if (name === "FiguraNumber") return "number";
  else if (name === "FiguraDate") return "date";
  else if (name === "FiguraDateLocal") return "datelocal";
  else if (name === "FiguraHidden") return "hidden";
  else if (name === "FiguraColor") return "color";
  else if (name === "FiguraWeek") return "week";
  else if (name === "FiguraMonth") return "month";
  else if (name === "FiguraFile") return "file";
  else if (name === "FiguraUrl") return "url";
  else if (name === "FiguraButtonGroup") return "buttongroup";
  else return "";
}
