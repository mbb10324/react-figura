import { validateCheck, validateEmail, validateMobile, validateName, validateNotes, validatePassword, validateSelect, validateTime } from "./FiguraUtils/ValidationChecker";
import FiguraSubmitBtn from "./FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraBigError from "./FiguraSupportingComponents/FiguraBigError";
import FiguraPassword from "./FiguraInputComponents/FiguraPassword";
import FiguraCheckBox from "./FiguraInputComponents/FiguraCheckBox";
import FiguraLabel from "./FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./FiguraSupportingComponents/FiguraTitle";
import FiguraSelect from "./FiguraInputComponents/FiguraSelect";
import FiguraPhone from "./FiguraInputComponents/FiguraPhone";
import FiguraEmail from "./FiguraInputComponents/FiguraEmail";
import FiguraNotes from "./FiguraInputComponents/FiguraNotes";
import FiguraName from "./FiguraInputComponents/FiguraName";
import FiguraTime from "./FiguraInputComponents/FiguraTime";
import Figura from "./Figura";
import "./styles.css";

export { Figura };
export { FiguraBigError };
export { FiguraCheckBox };
export { FiguraSubmitBtn };
export { FiguraPassword };
export { FiguraPhone };
export { FiguraEmail };
export { FiguraLabel };
export { FiguraTitle };
export { FiguraName };
export { FiguraSelect };
export { FiguraTime };
export { FiguraNotes };

export const custom = {
    validateName: validateName,
    validateEmail: validateEmail,
    validatePassword: validatePassword,
    validateMobile: validateMobile,
    validateCheck: validateCheck,
    validateSelect: validateSelect,
    validateTime: validateTime,
    validateNotes: validateNotes,
};