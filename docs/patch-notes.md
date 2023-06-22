# Patch Notes

This file is intended to keep in line with the npm publish history, and serves as a quick historical reminder of changes throuhgout version updates.

## 2.0.1
6/21/2023<br>

- Updated validateFile function, it was incorrect in mapping statement.
- Added validator and made onEvent, selected, and setSelected optional for input props, certain type checking systems would catch that it was not included and throw an error.
- Added throw error catch if onEvent was not included in the child components that required it.
- Updated validateConfirmPassword function, formSubmitHandler function, and formReducer INPUT_UPDATE case to prevent fall through cases
- Converted most prop types to interfaces and passed propsWithChildren where appropriate
- Updated README

## 2.0.0
6/20/2023<br>

This package marked the official release of react-figura, fully built out with all of the features incorporated that the library was intended to have.

<table align="center">
  <tr> <td> <ul><li>- [x] Pre built components</li></ul> </td>              <td> <ul><li>- [x] Individual input rendering</li></ul>    </td> </tr>
  <tr> <td> <ul><li>- [x] Fully and easily customizable</li></ul> </td>     <td> <ul><li>- [x] Lightweight package</li></ul>           </td> </tr>
  <tr> <td> <ul><li>- [x] Pre built validation</li></ul>  </td>             <td> <ul><li>- [x] Written in typescript</li></ul>         </td> </tr>
  <tr> <td> <ul><li>- [x] Supports custom validation</li></ul> </td>        <td> <ul><li>- [x] Supports all style frameworks</li></ul> </td> </tr>
  <tr> <td> <ul><li>- [x] Simple to use</li></ul> </td>                     <td> <ul><li>- [x] Good docs and support</li></ul>         </td> </tr>
</table>