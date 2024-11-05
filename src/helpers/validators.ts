import Joi from "joi";

export const signUpSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "First name is required"
      }),
      lastName: Joi.string().required().messages({
        "string.empty": "Last name is required"
      }),
      email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email"
      }),
      password: Joi.string()
      .min(8)
      .max(16)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/)
      .required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters",
        "string.max": "Password must not exceed 16 characters",
        "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      }),
  })