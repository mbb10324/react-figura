/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/styles.css":
/*!****************************!*\
  !*** ./src/lib/styles.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-figura/./src/lib/styles.css?");

/***/ }),

/***/ "./src/lib/Figura.tsx":
/*!****************************!*\
  !*** ./src/lib/Figura.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar FiguraContext_1 = __webpack_require__(/*! ./FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar Validation_1 = __webpack_require__(/*! ./FiguraUtils/Validation */ \"./src/lib/FiguraUtils/Validation.tsx\");\nvar FormSubmitHandler_1 = __webpack_require__(/*! ./FiguraUtils/FormSubmitHandler */ \"./src/lib/FiguraUtils/FormSubmitHandler.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./styles.css */ \"./src/lib/styles.css\");\nfunction Figura(props) {\n    var children = props.children, figuraID = props.figuraID, formStyle = props.formStyle;\n    var form = (0, Validation_1.useFormValidation)();\n    var submit = (0, FormSubmitHandler_1.useSubmit)();\n    var formID = figuraID;\n    return (react_1.default.createElement(FiguraContext_1.FiguraContext.Provider, { value: { form: form, submit: submit, formID: formID } },\n        react_1.default.createElement(\"form\", { noValidate: true, className: \"\".concat(formStyle ? formStyle : 'w-80 m-4 pt-20 overflow-hidden'), onSubmit: function (e) { return submit.formSubmitHandler(e, form.formState, form.dispatch, \"Some api call for the sign up\", formID); } }, children)));\n}\nexports[\"default\"] = Figura;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/Figura.tsx?");

/***/ }),

/***/ "./src/lib/FiguraContext.tsx":
/*!***********************************!*\
  !*** ./src/lib/FiguraContext.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ParentContext = exports.FiguraContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.FiguraContext = react_1.default.createContext(null);\nexports.ParentContext = react_1.default.createContext('');\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraContext.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraCheckBox.tsx":
/*!**********************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraCheckBox.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraCheckBox(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'check' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-row mb-1') },\n                react_1.default.createElement(\"input\", { className: \"\".concat(inputStyle ? inputStyle : 'mr-2'), type: \"checkbox\", name: \"check\", id: \"check\", checked: context.form.formState.check.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"check\", e.target.checked, context.form.dispatch, context.form.formState, context.formID); } }),\n                props.children),\n            context.form.formState.check.touched && context.form.formState.check.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.check.error)))); })));\n}\nexports[\"default\"] = FiguraCheckBox;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraCheckBox.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraEmail.tsx":
/*!*******************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraEmail.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraEmail(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'email' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"input\", { type: \"email\", name: \"email\", id: \"email\", autoComplete: \"email\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.email.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"email\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"email\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.email.touched && context.form.formState.email.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.email.error)))); })));\n}\nexports[\"default\"] = FiguraEmail;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraEmail.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraName.tsx":
/*!******************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraName.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraName(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'name' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"name\", id: \"name\", autoComplete: \"name\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.name.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"name\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"name\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.name.touched && context.form.formState.name.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.name.error)))); })));\n}\nexports[\"default\"] = FiguraName;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraName.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraNotes.tsx":
/*!*******************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraNotes.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraNotes(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'notes' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"textarea\", { name: \"notes\", id: \"notes\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.notes.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"notes\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"notes\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.notes.touched && context.form.formState.notes.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.notes.error)))); })));\n}\nexports[\"default\"] = FiguraNotes;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraNotes.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraPassword.tsx":
/*!**********************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraPassword.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraPassword(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'password' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"input\", { type: \"password\", name: \"password\", id: \"password\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.password.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"password\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"password\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.password.touched && context.form.formState.password.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.password.error)))); })));\n}\nexports[\"default\"] = FiguraPassword;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraPassword.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraPhone.tsx":
/*!*******************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraPhone.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraPhone(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'mobile' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"mobile\", id: \"mobile\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.mobile.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"mobile\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"mobile\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.mobile.touched && context.form.formState.mobile.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.mobile.error)))); })));\n}\nexports[\"default\"] = FiguraPhone;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraPhone.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraSelect.tsx":
/*!********************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraSelect.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraSelect(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    var childrenArray = react_1.default.Children.toArray(props.children);\n    var label = childrenArray.find(function (child) { return !isLabel(child); });\n    var options = childrenArray.filter(function (child) { return isLabel(child); });\n    function isLabel(child) {\n        if (child.type === 'option') {\n            return child;\n        }\n    }\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'select' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n                label,\n                react_1.default.createElement(\"select\", { name: \"select\", id: \"select\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.select.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"select\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"select\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }, options)),\n            context.form.formState.select.touched && context.form.formState.select.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.select.error)))); })));\n}\nexports[\"default\"] = FiguraSelect;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraSelect.tsx?");

/***/ }),

/***/ "./src/lib/FiguraInputComponents/FiguraTime.tsx":
/*!******************************************************!*\
  !*** ./src/lib/FiguraInputComponents/FiguraTime.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ValidationUtils_1 = __webpack_require__(/*! ../FiguraUtils/ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraTime(props) {\n    var wrapper = props.wrapper, inputStyle = props.inputStyle, errorStyle = props.errorStyle;\n    return (react_1.default.createElement(FiguraContext_1.ParentContext.Provider, { value: 'time' },\n        react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1') },\n            props.children,\n            react_1.default.createElement(\"input\", { type: \"text\", name: \"time\", id: \"time\", className: \"\".concat(inputStyle ? inputStyle : 'text-black'), value: context.form.formState.time.value, onChange: function (e) { (0, ValidationUtils_1.checkForErrors)(false, \"time\", e.target.value, context.form.dispatch, context.form.formState, context.formID); }, onBlur: function (e) { (0, ValidationUtils_1.checkForErrors)(true, \"time\", e.target.value, context.form.dispatch, context.form.formState, context.formID); } }),\n            context.form.formState.time.touched && context.form.formState.time.hasError && (react_1.default.createElement(\"div\", { className: \"\".concat(errorStyle ? errorStyle : 'mt-1 text-[#F65157]') }, context.form.formState.time.error)))); })));\n}\nexports[\"default\"] = FiguraTime;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraInputComponents/FiguraTime.tsx?");

/***/ }),

/***/ "./src/lib/FiguraSupportingComponents/FiguraBigError.tsx":
/*!***************************************************************!*\
  !*** ./src/lib/FiguraSupportingComponents/FiguraBigError.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraPhone(props) {\n    var bigErrorStyle = props.bigErrorStyle;\n    return (react_1.default.createElement(FiguraContext_1.FiguraContext.Consumer, null, function (context) { return (react_1.default.createElement(react_1.default.Fragment, null, context.submit.showError.bool && context.submit.showError.formID === context.formID && !context.form.formState.isFormValid && (react_1.default.createElement(\"div\", { className: \"\".concat(bigErrorStyle ? bigErrorStyle : 'text-[#721c24] bg-[#F8D7DA] border-[#F5C6CB] p-2 border-1') }, props.children)))); }));\n}\nexports[\"default\"] = FiguraPhone;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraSupportingComponents/FiguraBigError.tsx?");

/***/ }),

/***/ "./src/lib/FiguraSupportingComponents/FiguraLabel.tsx":
/*!************************************************************!*\
  !*** ./src/lib/FiguraSupportingComponents/FiguraLabel.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar FiguraContext_1 = __webpack_require__(/*! ../FiguraContext */ \"./src/lib/FiguraContext.tsx\");\nvar react_2 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraLabel(props) {\n    var children = props.children, labelStyle = props.labelStyle;\n    var parent = (0, react_1.useContext)(FiguraContext_1.ParentContext);\n    return (react_2.default.createElement(\"label\", { htmlFor: parent, className: \"\".concat(labelStyle ? labelStyle : '') }, children));\n}\nexports[\"default\"] = FiguraLabel;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraSupportingComponents/FiguraLabel.tsx?");

/***/ }),

/***/ "./src/lib/FiguraSupportingComponents/FiguraSubmitBtn.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/FiguraSupportingComponents/FiguraSubmitBtn.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraSubmitBtn(props) {\n    var children = props.children, wrapper = props.wrapper, buttonStyle = props.buttonStyle;\n    return (react_1.default.createElement(\"div\", { className: \"\".concat(wrapper ? wrapper : 'flex flex-col mb-1 mt-1') },\n        react_1.default.createElement(\"button\", { className: \"\".concat(buttonStyle ? buttonStyle : 'border-[1px] hover:text-black hover:bg-[#FFF7EE] transition-all ease-in-out'), type: \"submit\" }, children)));\n}\nexports[\"default\"] = FiguraSubmitBtn;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraSupportingComponents/FiguraSubmitBtn.tsx?");

/***/ }),

/***/ "./src/lib/FiguraSupportingComponents/FiguraTitle.tsx":
/*!************************************************************!*\
  !*** ./src/lib/FiguraSupportingComponents/FiguraTitle.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction FiguraTitle(props) {\n    var children = props.children, titleStyle = props.titleStyle;\n    return (react_1.default.createElement(\"h1\", { className: \"\".concat(titleStyle ? titleStyle : 'text-center h-10 text-3xl overflow-hidden') }, children));\n}\nexports[\"default\"] = FiguraTitle;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraSupportingComponents/FiguraTitle.tsx?");

/***/ }),

/***/ "./src/lib/FiguraUtils/FormSubmitHandler.tsx":
/*!***************************************************!*\
  !*** ./src/lib/FiguraUtils/FormSubmitHandler.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useSubmit = void 0;\nvar ValidationChecker_1 = __webpack_require__(/*! ./ValidationChecker */ \"./src/lib/FiguraUtils/ValidationChecker.tsx\");\nvar ValidationUtils_1 = __webpack_require__(/*! ./ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar react_1 = __webpack_require__(/*! react */ \"react\");\n//custom hook to handle all of our form submissions\nfunction useSubmit() {\n    var _a = (0, react_1.useState)({ bool: false, formID: '' }), showError = _a[0], setShowError = _a[1];\n    function formSubmitHandler(e, formState, dispatch, endpoint, submittedFormID) {\n        e.preventDefault();\n        var isFormValid = true;\n        //decipher if we have errors\n        for (var name_1 in formState) {\n            var item = formState[name_1];\n            var value = item.value, formID = item.formID;\n            var _a = (0, ValidationChecker_1.validationChecker)(name_1, value), hasError = _a.hasError, error = _a.error;\n            if (hasError) {\n                isFormValid = false;\n            }\n            if (formID) {\n                dispatch({\n                    type: ValidationUtils_1.UPDATE_FORM,\n                    data: { name: name_1, value: value, hasError: hasError, error: error, touched: true, formID: formID, isFormValid: isFormValid },\n                });\n            }\n        }\n        if (!formState.isFormValid) {\n            setShowError({ bool: true, formID: submittedFormID });\n        }\n        else {\n            //this is where you would make your api call, for example (api.createSoldierAccount)\n            console.log(endpoint);\n            console.log(formState);\n        }\n        //show the big popup for 5 seconds (this is subjective)\n        setTimeout(function () {\n            setShowError({ bool: false, formID: submittedFormID });\n        }, 5000);\n    }\n    return {\n        showError: showError,\n        formSubmitHandler: formSubmitHandler\n    };\n}\nexports.useSubmit = useSubmit;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraUtils/FormSubmitHandler.tsx?");

/***/ }),

/***/ "./src/lib/FiguraUtils/Validation.tsx":
/*!********************************************!*\
  !*** ./src/lib/FiguraUtils/Validation.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useFormValidation = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar ValidationUtils_1 = __webpack_require__(/*! ./ValidationUtils */ \"./src/lib/FiguraUtils/ValidationUtils.tsx\");\nvar initialFormState = {\n    name: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    email: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    password: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    mobile: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    check: { value: false, touched: false, hasError: false, error: \"\", formID: \"\" },\n    select: { value: false, touched: false, hasError: false, error: \"\", formID: \"\" },\n    time: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    notes: { value: \"\", touched: false, hasError: false, error: \"\", formID: \"\" },\n    isFormValid: false,\n};\n//reducer handler that will make the call to update state for each field and retain state of any previously updated fields\nfunction formsReducer(state, action) {\n    var _a;\n    switch (action.type) {\n        case ValidationUtils_1.UPDATE_FORM:\n            var _b = action.data, name_1 = _b.name, value = _b.value, hasError = _b.hasError, error = _b.error, touched = _b.touched, formID = _b.formID, isFormValid = _b.isFormValid;\n            return __assign(__assign({}, state), (_a = {}, _a[name_1] = __assign(__assign({}, state[name_1]), { value: value, hasError: hasError, error: error, touched: touched, formID: formID }), _a.isFormValid = isFormValid, _a));\n        default:\n            return state;\n    }\n}\n//this is where our useReducer is defined\nfunction useFormValidation() {\n    var _a = (0, react_1.useReducer)(formsReducer, initialFormState), formState = _a[0], dispatch = _a[1];\n    return {\n        formState: formState,\n        dispatch: dispatch\n    };\n}\nexports.useFormValidation = useFormValidation;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraUtils/Validation.tsx?");

/***/ }),

/***/ "./src/lib/FiguraUtils/ValidationChecker.tsx":
/*!***************************************************!*\
  !*** ./src/lib/FiguraUtils/ValidationChecker.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validationChecker = void 0;\n//the function that actually checks if we have errors and displays corresponding message.\nfunction validationChecker(name, value) {\n    var hasError = false;\n    var error = \"\";\n    switch (name) {\n        case \"name\":\n            return validateName(value);\n        case \"email\":\n            return validateEmail(value);\n        case \"password\":\n            return validatePassword(value);\n        case \"mobile\":\n            return validateMobile(value);\n        case \"check\":\n            return validateCheck(value);\n        case \"select\":\n            return validateSelect(value);\n        case \"time\":\n            return validateTime(value);\n        case \"notes\":\n            return validateNotes(value);\n        default:\n            break;\n    }\n    return { hasError: hasError, error: error };\n}\nexports.validationChecker = validationChecker;\n//validates a name\nfunction validateName(value) {\n    if (value.trim() === \"\") {\n        return { hasError: true, error: \"Name cannot be empty\" };\n    }\n    else if (!/^[a-zA-Z ]+$/.test(value)) {\n        return { hasError: true, error: \"Invalid Name. Avoid Special characters\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a email\nfunction validateEmail(value) {\n    if (value.trim() === \"\") {\n        return { hasError: true, error: \"Email cannot be empty\" };\n    }\n    else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) {\n        return { hasError: true, error: \"Invalid Email\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a password\nfunction validatePassword(value) {\n    if (value.trim() === \"\") {\n        return { hasError: true, error: \"Password cannot be empty\" };\n    }\n    else if (value.trim().length < 8) {\n        return { hasError: true, error: \"Password must have at least 8 characters\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a phone number\nfunction validateMobile(value) {\n    if (value.trim() === \"\") {\n        return { hasError: true, error: \"Phone cannot be empty\" };\n    }\n    else if (!/^[0-9]{10}$/.test(value)) {\n        return { hasError: true, error: \"Invalid Phone Number. Use 10 digits only\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a checkbox\nfunction validateCheck(value) {\n    if (!value) {\n        return { hasError: true, error: \"You must check this box.\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a select field\nfunction validateSelect(value) {\n    if (!value) {\n        return { hasError: true, error: \"Please choose an option\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates time format\nfunction validateTime(value) {\n    if (value.trim() === \"\") {\n        return { hasError: true, error: \"Time cannot be empty\" };\n    }\n    else if (!/(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {\n        return { hasError: true, error: \"Invalid Time Format. Use 12:34\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n//validates a text area\nfunction validateNotes(value) {\n    if (value.length > 200) {\n        return { hasError: true, error: \"Notes cannot be longer than 200 characters\" };\n    }\n    return { hasError: false, error: \"\" };\n}\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraUtils/ValidationChecker.tsx?");

/***/ }),

/***/ "./src/lib/FiguraUtils/ValidationUtils.tsx":
/*!*************************************************!*\
  !*** ./src/lib/FiguraUtils/ValidationUtils.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkForErrors = exports.UPDATE_FORM = void 0;\nvar ValidationChecker_1 = __webpack_require__(/*! ./ValidationChecker */ \"./src/lib/FiguraUtils/ValidationChecker.tsx\");\nexports.UPDATE_FORM = \"UPDATE_FORM\";\nfunction checkForErrors(wasTouched, name, value, dispatch, formState, formID) {\n    var _a = (0, ValidationChecker_1.validationChecker)(name, value), hasError = _a.hasError, error = _a.error;\n    var isFormValid = true;\n    for (var key in formState) {\n        var item = formState[key];\n        // Check if the current field has error\n        if (key === name && hasError) {\n            isFormValid = false;\n            break;\n            // Check if any other field has error\n        }\n        else if (key !== name && item.hasError) {\n            isFormValid = false;\n            break;\n        }\n    }\n    dispatch({\n        type: exports.UPDATE_FORM,\n        data: { name: name, value: value, hasError: hasError, error: error, touched: wasTouched, formID: formID, isFormValid: isFormValid },\n    });\n}\nexports.checkForErrors = checkForErrors;\n\n\n//# sourceURL=webpack://react-figura/./src/lib/FiguraUtils/ValidationUtils.tsx?");

/***/ }),

/***/ "./src/lib/index.tsx":
/*!***************************!*\
  !*** ./src/lib/index.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FiguraNotes = exports.FiguraTime = exports.FiguraSelect = exports.FiguraName = exports.FiguraTitle = exports.FiguraLabel = exports.FiguraEmail = exports.FiguraPhone = exports.FiguraPassword = exports.FiguraSubmitBtn = exports.FiguraCheckBox = exports.FiguraBigError = exports.Figura = void 0;\nvar Figura_1 = __importDefault(__webpack_require__(/*! ./Figura */ \"./src/lib/Figura.tsx\"));\nexports.Figura = Figura_1.default;\nvar FiguraCheckBox_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraCheckBox */ \"./src/lib/FiguraInputComponents/FiguraCheckBox.tsx\"));\nexports.FiguraCheckBox = FiguraCheckBox_1.default;\nvar FiguraSubmitBtn_1 = __importDefault(__webpack_require__(/*! ./FiguraSupportingComponents/FiguraSubmitBtn */ \"./src/lib/FiguraSupportingComponents/FiguraSubmitBtn.tsx\"));\nexports.FiguraSubmitBtn = FiguraSubmitBtn_1.default;\nvar FiguraBigError_1 = __importDefault(__webpack_require__(/*! ./FiguraSupportingComponents/FiguraBigError */ \"./src/lib/FiguraSupportingComponents/FiguraBigError.tsx\"));\nexports.FiguraBigError = FiguraBigError_1.default;\nvar FiguraPassword_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraPassword */ \"./src/lib/FiguraInputComponents/FiguraPassword.tsx\"));\nexports.FiguraPassword = FiguraPassword_1.default;\nvar FiguraPhone_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraPhone */ \"./src/lib/FiguraInputComponents/FiguraPhone.tsx\"));\nexports.FiguraPhone = FiguraPhone_1.default;\nvar FiguraEmail_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraEmail */ \"./src/lib/FiguraInputComponents/FiguraEmail.tsx\"));\nexports.FiguraEmail = FiguraEmail_1.default;\nvar FiguraLabel_1 = __importDefault(__webpack_require__(/*! ./FiguraSupportingComponents/FiguraLabel */ \"./src/lib/FiguraSupportingComponents/FiguraLabel.tsx\"));\nexports.FiguraLabel = FiguraLabel_1.default;\nvar FiguraTitle_1 = __importDefault(__webpack_require__(/*! ./FiguraSupportingComponents/FiguraTitle */ \"./src/lib/FiguraSupportingComponents/FiguraTitle.tsx\"));\nexports.FiguraTitle = FiguraTitle_1.default;\nvar FiguraName_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraName */ \"./src/lib/FiguraInputComponents/FiguraName.tsx\"));\nexports.FiguraName = FiguraName_1.default;\nvar FiguraSelect_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraSelect */ \"./src/lib/FiguraInputComponents/FiguraSelect.tsx\"));\nexports.FiguraSelect = FiguraSelect_1.default;\nvar FiguraTime_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraTime */ \"./src/lib/FiguraInputComponents/FiguraTime.tsx\"));\nexports.FiguraTime = FiguraTime_1.default;\nvar FiguraNotes_1 = __importDefault(__webpack_require__(/*! ./FiguraInputComponents/FiguraNotes */ \"./src/lib/FiguraInputComponents/FiguraNotes.tsx\"));\nexports.FiguraNotes = FiguraNotes_1.default;\n__webpack_require__(/*! ./styles.css */ \"./src/lib/styles.css\");\n\n\n//# sourceURL=webpack://react-figura/./src/lib/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lib/index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});