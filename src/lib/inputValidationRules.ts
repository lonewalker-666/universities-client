/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(ruleName:string, errorMessage:string, validateFunc:Function) {
    return {
      name: ruleName,
      message: errorMessage,
      validate: validateFunc
    };
  }
  
  export function requiredRule(inputName:string) {
    return createValidationRule(
      "required",
      `${inputName} required`,
      (inputValue:string, formObj:any) => inputValue.length !== 0
    );
  }

  export const requiredSelectRule = (inputName:string) => {
    return createValidationRule(
      "required",
      `${inputName} required`,
      (inputValue:string, formObj:any) => inputValue != "" && inputValue != null && inputValue != undefined
    );
  }
  
  export function minLengthRule(inputName:string, minCharacters:number) {
    return createValidationRule(
      "minLength",
      `${inputName} should contain atleast ${minCharacters} characters`,
      (inputValue:string, formObj:any) => inputValue.length >= minCharacters
    );
  }
  
  export function maxLengthRule(inputName:string, maxCharacters:number) {
    return createValidationRule(
      "maxLength",
      `${inputName} cannot contain more than ${maxCharacters} characters`,
      (inputValue:string, formObj:any) => {
        return inputValue.length <= maxCharacters
      }
    );
  }
  
  export function passwordMatchRule() {
    return createValidationRule(
      "passwordMatch",
      `passwords do not match`,
      (inputValue:string, formObj:any) => inputValue === formObj.password.value
    );
  }

  export function passwordValidate() {
    const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!%&*_\-])[a-zA-Z\d!%&*_\-]{8,16}$/;
    return createValidationRule(
      "passwordValidate",
      `passwords must contain 1 uppercase and lowercase letters and a number and a special character(!%&*_/-) maxLength:16`,
      (inputValue:string, formObj:any) => passFormat.test(inputValue)
    );
  }

  export function emailValidate() {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return createValidationRule(
      "emailValidate",
      `Invalid email`,
      (inputValue:string, formObj:any) => emailFormat.test(inputValue)
    );
  }
  
  