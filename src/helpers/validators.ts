import Joi from 'joi'

export const signUpSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required'
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
    )
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.max': 'Password must not exceed 16 characters',
      'string.pattern.base':
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    })
})

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
    )
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.max': 'Password must not exceed 16 characters',
      'string.pattern.base':
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    })
})


export const basicDetailsSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required'
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
  mobile: Joi.string().required().messages({
    'string.empty': 'Mobile number is required'
  }),
  location: Joi.string().required().messages({
    'string.empty': 'Location is required'
  }),
})

export const personalDetailsSchema = Joi.object({
  gender_id: Joi.number().messages({
    'number.empty': 'Please Select any one of the options'
  }),
  race_id: Joi.number().required().messages({
    'number.empty': 'Please Select any one of the options'
  }),
  armed_force_status_id: Joi.number()
    .required()
    .messages({
      'number.empty': 'Please Select any one of the options',
    }),
  citizenship_id: Joi.number().required().messages({
    'number.empty': 'Please Select any one of the options'
  }),
  first_generation_id: Joi.number().required().messages({
    'number.empty': 'Please Select any one of the options'
  }),
  financial_aid_id: Joi.number().required().messages({
    'number.empty': 'Please Select any one of the options'
  }),
})