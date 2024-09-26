import {
  requiredRule,
  minLengthRule,
  passwordValidate,
  emailValidate,
  requiredSelectRule,
} from "./inputValidationRules.ts";

export const publishForm = {
  product_image: {
    value: "",
    valid: false,
    maxLength: 600,
    errorMessage: "",
    validationRules:[]
  },
  intro_video: {
    value: "",
    valid: false,
    maxLength: 600,
    errorMessage: "",
    validationRules:[]
  },
  price: {
    value: "",
    valid: false,
    maxLength: 10,
    errorMessage: "",
    validationRules: [requiredRule("Course Price")],
  },
  discount: {
    value: "",
    valid: false,
    maxLength: 2,
    errorMessage: "",
    validationRules:[]
  },
  duration: {
    value: "",
    valid: false,
    maxLength: 20,
    errorMessage: "",
    validationRules:[]
  },
  faq: {
    value: "",
    valid: false,
    maxLength: 150,
    errorMessage: "",
    validationRules: [requiredRule("Course faq")],
  },
  deliverable: {
    value: "",
    valid: false,
    maxLength: 100,
    errorMessage: "",
    validationRules:[]
  },
};

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
  name: {
    value: "",
    valid: false,
    validationRules: [requiredRule("username"), minLengthRule("name", 3)],
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

export const courseCreateForm = {
  name: {
    value: "",
    valid: false,
    validationRules: [requiredRule("Course name"), minLengthRule("name", 3)],
    maxLength: 50,
    errorMessage: "",
  },
  description: {
    value: "",
    valid: false,
    validationRules: [requiredRule("Course description")],
    maxLength: 150,
    errorMessage: "",
  },
  category: {
    value: "",
    valid: false,
    validationRules: [requiredSelectRule("Course category")],
    maxLength: 50,
    errorMessage: "",
  },
  sub_category: {
    value: "",
    valid: false,
    validationRules: [requiredSelectRule("Course sub category")],
    maxLength: 50,
    errorMessage: "",
  },
  difficulty: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredSelectRule("Course Difficulty")],
  },
  objectives: {
    value: "",
    valid: false,
    maxLength: 150,
    errorMessage: "",
    validationRules: [requiredRule("Course objectives")],
  },
  pre_requisites: {
    value: "",
    valid: false,
    maxLength: 150,
    errorMessage: "",
    validationRules: [requiredRule("Course pre_requisites")],
  },
};

export const queryForm = {
  name: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredRule("name"), minLengthRule("name", 3)],
  },
  email: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredRule("email"), emailValidate()],
  },
  language: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredSelectRule("Preferred Language")],
  },
  course: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredRule("Course")],
  },
  course_desc: {
    value: "",
    valid: false,
    maxLength: 150,
    errorMessage: "",
    validationRules: [requiredRule("Course description")],
  },
};

export const RevenueCheckForm = {
  product: {
    value: "",
    valid: false,
    maxLength: 50,
    errorMessage: "",
    validationRules: [requiredRule("Product")],
  },
  time: {
    value: "",
    valid: false,
    maxLength: 550,
    errorMessage: "",
    validationRules: [requiredRule("Time frame")],
  },
  date: {
    value: "",
    valid: false,
    maxLength: 550,
    errorMessage: "",
    validationRules: [requiredRule("Date")],
  },
}

export const addChapterForm = {
  name: {
    value: "",
    valid: false,
    validationRules: [requiredRule("Course name")],
    maxLength: 150,
    errorMessage: "",
  },
}