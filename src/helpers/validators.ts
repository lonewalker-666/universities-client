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
  about: Joi.string().required().messages({
    "string.empty": "about is required",
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
  financial_aid_id: Joi.string().required().messages({
    "string.empty": "Financialaid  is required",
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

export const updateActTestScoreSchema = Joi.array()
  .items(
    Joi.object({
      subject_id: Joi.number()
        .integer()
        .valid(1, 2, 3, 4, 5) // Validates that id is in validSubjectIds array
        .required()
        .messages({
          "any.only": "Invalid subject id",
          "number.base": "Subject id must be a number",
        }),
      score: Joi.number()
        .integer()
        .min(0)
        .max(36) // Score limit validation
        .required()
        .messages({
          "number.base": "Score must be a number",
          "number.min": "Score cannot be less than 0",
          "number.max": "Score cannot be more than 36",
        }),
    })
  )
  .custom((value, helpers: any) => {
    const requiredIds = [1, 2, 3, 4, 5];
    const providedIds = value.map((item: any) => item.subject_id);
    // Check if all required IDs are present
    const missingIds = requiredIds.filter((id) => !providedIds.includes(id));
    if (missingIds.length > 0) {
      return helpers.message(
        `Missing required subject_id(s): ${missingIds.join(", ")}`
      );
    }

    return value; // If validation passed, return the validated value
  });

export const updateSatTestScoreSchema = Joi.array()
  .items(
    Joi.object({
      subject_id: Joi.number()
        .integer()
        .valid(6, 7) // Validates that id is in validSubjectIds array
        .required()
        .messages({
          "any.only": "Invalid subject id",
          "number.base": "Subject id must be a number",
        }),
      score: Joi.number()
        .integer()
        .min(0)
        .max(800) // Score limit validation
        .required()
        .messages({
          "number.base": "Score must be a number",
          "number.min": "Score cannot be less than 0",
          "number.max": "Score cannot be more than 800",
        }),
    })
  )
  .custom((value, helpers: any) => {
    const requiredIds = [6, 7];
    const providedIds = value.map((item: any) => item.subject_id);

    // Check if all required IDs are present
    const missingIds = requiredIds.filter((id) => !providedIds.includes(id));
    if (missingIds.length > 0) {
      return helpers.message(
        `Missing required subject_id(s): ${missingIds.join(", ")}`
      );
    }

    return value; // If validation passed, return the validated value
  });

export const updateTOEFLTestScoreSchema = Joi.array()
  .items(
    Joi.object({
      subject_id: Joi.number()
        .integer()
        .valid(46, 47, 48, 49) // Validates that id is in validSubjectIds array
        .required()
        .messages({
          "any.only": "Invalid subject id",
          "number.base": "Subject id must be a number",
        }),
      score: Joi.number()
        .integer()
        .min(0)
        .max(30) // Score limit validation
        .required()
        .messages({
          "number.base": "Score must be a number",
          "number.min": "Score cannot be less than 0",
          "number.max": "Score cannot be more than 30",
        }),
    })
  )
  .custom((value, helpers: any) => {
    const requiredIds = [46, 47, 48, 49];
    const providedIds = value.map((item: any) => item.subject_id);

    // Check if all required IDs are present
    const missingIds = requiredIds.filter((id) => !providedIds.includes(id));
    if (missingIds.length > 0) {
      return helpers.message(
        `Missing required subject_id(s): ${missingIds.join(", ")}`
      );
    }

    return value; // If validation passed, return the validated value
  });

export const updateIELTSTestScoreSchema = Joi.array()
  .items(
    Joi.object({
      subject_id: Joi.number()
        .integer()
        .valid(50, 51, 52, 53) // Validates that id is in validSubjectIds array
        .required()
        .messages({
          "any.only": "Invalid subject id",
          "number.base": "Subject id must be a number",
        }),
      score: Joi.number()
        .integer()
        .min(0)
        .max(9) // Score limit validation
        .required()
        .messages({
          "number.base": "Score must be a number",
          "number.min": "Score cannot be less than 0",
          "number.max": "Score cannot be more than 9",
        }),
    })
  )
  .custom((value, helpers: any) => {
    const requiredIds = [50, 51, 52, 53];
    const providedIds = value.map((item: any) => item.subject_id);

    // Check if all required IDs are present
    const missingIds = requiredIds.filter((id) => !providedIds.includes(id));
    if (missingIds.length > 0) {
      return helpers.message(
        `Missing required subject_id(s): ${missingIds.join(", ")}`
      );
    }

    return value; // If validation passed, return the validated value
  });

export const updateAPTestScoreSchema = Joi.object({
  subject_id: Joi.number().integer().required().messages({
    "number.base": "Subject id is required",
  }),
  score: Joi.number()
    .integer()
    .min(0)
    .max(5) // Score limit validation
    .required()
    .messages({
      "number.base": "Score must be a number",
      "number.min": "Score cannot be less than 0",
      "number.max": "Score cannot be more than 5",
    }),
});

export const additionalInfoSchema = Joi.object({
  houseHeld: Joi.number().integer().min(1).max(20).required().messages({
    "number.base": "Household size must be a number.",
    "number.integer": "Household size must be an integer.",
    "number.min": "Household size must be at least 1.",
    "number.max": "Household size cannot exceed 20.",
    "any.required": "Household size is required.",
  }),

  physical_disability: Joi.boolean().required().messages({
    "boolean.base": "Physical disability must be true or false.",
    "any.required": "Physical disability is required.",
  }),

  additionalInfo: Joi.string().max(1000).allow("").messages({
    "string.base": "Additional information must be a string.",
    "string.max": "Additional information cannot exceed 1000 characters.",
  }),
});
