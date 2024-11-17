import Joi from "joi";
import { RACE } from "../lib/constants";

export const signUpSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must not exceed 16 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must not exceed 16 characters",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});

export const basicDetailsSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),
  mobile: Joi.string().required().min(8).max(17).messages({
    "string.empty": "Mobile number is required",
  }),
  location: Joi.string().required().messages({
    "string.empty": "Location is required",
  }),
});

export const personalDetailsSchema = Joi.object({
  gender_id: Joi.number().messages({
    "number.empty": "Please Select any one of the options",
  }),
  race_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  armed_force_status_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  citizenship_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  first_generation_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  financial_aid_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
});

export const AcademicDetailsSchema = Joi.object({
  high_school_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  class_rank: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  gpa: Joi.number()
    .required()
    .messages({
      "number.empty": "Please Select any one of the options",
    })
    .max(10),
  college_start_date: Joi.date().required().messages({
    "date.empty": "Please Select any one of the options",
  }),
  graduation_date: Joi.date().required().messages({
    "date.empty": "Please Select any one of the options",
  }),
  grade_level_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
});

export const createEssayDataSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string()
    .required()
    .custom((value, helpers) => {
      // Check that non-whitespace text is placed inside tags
      const contentInsideTagsPattern = /<[^>]+>\s*([^<>\s]+)\s*<\/[^>]+>/;
      if (!contentInsideTagsPattern.test(value)) {
        return helpers.message({ en: "Essays should not be empty." });
      }

      return value;
    }),
});

export const CreateProfileSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  mobile: Joi.string().required().min(8).max(17).messages({
    "string.empty": "Mobile number is required",
  }),
  gender_id: Joi.string().valid("1", "2", "3").required().messages({
    "string.empty": "Gender is required",
  }),
  dob: Joi.date().iso().required().messages({
    "date.base": "Selected date must be a valid date",
    "any.required": "Date is required",
  }),
  profileEmojiId: Joi.number().required().default(1).messages({
    "number.empty": "profileid req",
  }),
  location: Joi.string().required().messages({
    "string.empty": "location is required",
  }),
});

export const createPersonalInfoSchema = Joi.object({
  race_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  armed_force_status_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  citizenship_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  first_generation_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  about: Joi.string().required().messages({
    "string.empty": "About is required",
  }),
});

export const CreateAcademicSchema = Joi.object({
  high_school_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  class_rank: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
  gpa: Joi.number()
    .required()
    .messages({
      "number.empty": "Please Select any one of the options",
    })
    .max(10),
  college_start_date: Joi.date().required().messages({
    "date.empty": "Please Select any one of the options",
  }),
  graduation_date: Joi.date().required().messages({
    "date.empty": "Please Select any one of the options",
  }),
  grade_level_id: Joi.number().required().messages({
    "number.empty": "Please Select any one of the options",
  }),
});

export const actTestSchema = Joi.object({});
