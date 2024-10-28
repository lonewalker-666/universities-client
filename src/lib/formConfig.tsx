import {
  requiredRule,
  minLengthRule,
  passwordValidate,
  emailValidate,
  requiredSelectRule,
} from "./inputValidationRules.ts";


export const LoginForm = {
  email: {
    value: "",
    valid: false,
    validationRules: [requiredRule("email"), emailValidate()],
    maxLength: 30,
    errorMessage: "",
  },
  password: {
    value: "",
    valid: false,
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 8),
      passwordValidate(),
    ],
    maxLength: 16,
    errorMessage: "",
  },
};

export const signupForm = {
  firstName: {
    value: "",
    valid: false,
    validationRules: [requiredRule("firstName"), minLengthRule("name", 3)],
    maxLength: 30,
    errorMessage: "",
  },
  email: {
    value: "",
    valid: false,
    validationRules: [requiredRule("email"), emailValidate()],
    maxLength: 30,
    errorMessage: "",
  },
  password: {
    value: "",
    valid: false,
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 8),
      passwordValidate(),
    ],
    maxLength: 16,
    errorMessage: "",
  },
};

