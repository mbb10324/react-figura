import {
    validateText, validateEmail, validatePassword, validateConfirmPassword, validatePhone, validateCheck,
    validateRadio, validateRange, validateSelect, validateTime, validateTimeMilitary, validateTextArea, validateNumber,
    validateDate, validateDateLocal, validateHidden, validateColor, validateWeek, validateMonth, validateFile, validateUrl, validateButtonGroup
} from "../../lib/FiguraUtils/Validation";

describe("Validation Functions", () => {
    test("validateText", () => {
        expect(validateText("John Doe")).toEqual({ hasError: false, error: "" });
        expect(validateText("")).toEqual({ hasError: true, error: "This field cannot be empty" });
        expect(validateText("1")).toEqual({ hasError: true, error: "Invalid Field. Avoid Special characters" });
    });

    test("validateEmail", () => {
        expect(validateEmail("john@example.com")).toEqual({ hasError: false, error: "" });
        expect(validateEmail("john")).toEqual({ hasError: true, error: "Invalid Email" });
        expect(validateEmail("")).toEqual({ hasError: true, error: "Email cannot be empty" });
    });

    test("validatePassword", () => {
        expect(validatePassword("Password123!")).toEqual({ hasError: false, error: "" });
        expect(validatePassword("password")).toEqual({ hasError: true, error: "Password must be at least 8 characters, contain at least one uppercase, one lowercase, one digit, and one special character" });
        expect(validatePassword("")).toEqual({ hasError: true, error: "Password cannot be empty" });
    });

    test("validateConfirmPassword", () => {
        const formState = { FiguraPassword0: { value: "Test123!", type: "password" } };
        expect(validateConfirmPassword("Test123!", formState)).toEqual({ hasError: false, error: "" });
        expect(validateConfirmPassword("Test123$", formState)).toEqual({ hasError: true, error: "Your password does not match" });
        expect(validateConfirmPassword("", formState)).toEqual({ hasError: true, error: "Confirmation cannot be empty" });
    });

    test("validatePhone", () => {
        expect(validatePhone("1234567890")).toEqual({ hasError: false, error: "" });
        expect(validatePhone("123")).toEqual({ hasError: true, error: "Invalid Phone Number. Use 10 digits only" });
        expect(validatePhone("")).toEqual({ hasError: true, error: "Phone cannot be empty" });
    });

    test("validateCheck", () => {
        expect(validateCheck("true")).toEqual({ hasError: false, error: "" });
        expect(validateCheck("false")).toEqual({ hasError: true, error: "You must check this box." });
        expect(validateCheck("")).toEqual({ hasError: true, error: "You must check this box." });
    });

    test("validateRadio", () => {
        expect(validateRadio("true")).toEqual({ hasError: false, error: "" });
        expect(validateRadio("false")).toEqual({ hasError: true, error: "You must click this button." });
        expect(validateRadio("")).toEqual({ hasError: true, error: "You must click this button." });
    });

    test("validateRange", () => {
        expect(validateRange("50")).toEqual({ hasError: false, error: "" });
        expect(() => validateRange("101")).toThrowError("The range must be between 0 and 100");
        expect(validateRange("false")).toEqual({ hasError: true, error: "You must choose a range." });
    });

    test("validateSelect", () => {
        expect(validateSelect("option1")).toEqual({ hasError: false, error: "" });
        expect(validateSelect("")).toEqual({ hasError: true, error: "Please choose an option" });
    });

    test("validateTime", () => {
        expect(validateTime("12:34")).toEqual({ hasError: false, error: "" });
        expect(validateTime("1234")).toEqual({ hasError: true, error: "Invalid Time Format" });
        expect(validateTime("")).toEqual({ hasError: true, error: "Time cannot be empty" });
    });

    test("validateTimeMilitary", () => {
        expect(validateTimeMilitary("12:34")).toEqual({ hasError: false, error: "" });
        expect(validateTimeMilitary("1234")).toEqual({ hasError: true, error: "Invalid Time Format. Use 12:34" });
        expect(validateTimeMilitary("")).toEqual({ hasError: true, error: "Time cannot be empty" });
    });

    test("validateTextArea", () => {
        expect(validateTextArea("")).toEqual({ hasError: false, error: "" });
        expect(validateTextArea("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit nec lectus malesuada efficitur. Fusce tristique turpis nisl, et fermentum massa condimentum euadfadfasfasfadfasdfasdfasfasdfafafasdfasdfasfasdfasdfasdfasdfasdfasdfasdfasfasfadfasdfasfasfasdfasfasd.")).toEqual({ hasError: true, error: "This text field cannot be longer than 250 characters" });
    });

    test("validateNumber", () => {
        expect(validateNumber("42")).toEqual({ hasError: false, error: "" });
        expect(validateNumber("1000001")).toEqual({ hasError: true, error: "The number must be between -1 million and 1 million" });
        expect(validateNumber("")).toEqual({ hasError: true, error: "Provide a number" });
    });

    test("validateDate", () => {
        expect(validateDate("2023-06-13")).toEqual({ hasError: false, error: "" });
        expect(validateDate("2023/06/13")).toEqual({ hasError: true, error: "Provide a valid date format" });
        expect(validateDate("")).toEqual({ hasError: true, error: "Provide a date" });
    });

    test("validateDateLocal", () => {
        expect(validateDateLocal("2023-06-13")).toEqual({ hasError: false, error: "" });
        expect(validateDateLocal("2023/06/13")).toEqual({ hasError: true, error: "Provide a valid date format" });
        expect(validateDateLocal("")).toEqual({ hasError: true, error: "Provide a date and time" });
    });

    test("validateHidden", () => {
        expect(() => validateHidden("ssdfsfs")).toThrowError("WARNING! A hidden field was filled. A bot may be attempting to interject this form.");
        expect(validateHidden("")).toEqual({ hasError: false, error: "" });
    });

    test("validateColor", () => {
        expect(validateColor("#FF0000")).toEqual({ hasError: false, error: "" });
        expect(validateColor("#000000")).toEqual({ hasError: true, error: "Choose a color" });
    });

    test("validateWeek", () => {
        expect(validateWeek("2023-W24")).toEqual({ hasError: false, error: "" });
        expect(validateWeek("")).toEqual({ hasError: true, error: "Provide a week" });
    });

    test("validateMonth", () => {
        expect(validateMonth("2023-06")).toEqual({ hasError: false, error: "" });
        expect(validateMonth("")).toEqual({ hasError: true, error: "Provide a month" });
    });

    test("validateFile", () => {
        expect(validateFile("file.txt")).toEqual({ hasError: false, error: "" });
        expect(validateFile("")).toEqual({ hasError: true, error: "Choose a file" });
    });

    test("validateUrl", () => {
        expect(validateUrl("https://www.example.com")).toEqual({ hasError: false, error: "" });
        expect(validateUrl("")).toEqual({ hasError: true, error: "Provide a url" });
        expect(validateUrl("www.example.com")).toEqual({ hasError: true, error: "Provide a valid url" });
    });

    test("validateButtonGroup", () => {
        expect(validateButtonGroup("Good")).toEqual({ hasError: false, error: "" });
        expect(validateButtonGroup("")).toEqual({ hasError: true, error: "Choose an option" });
    });
})