import * as Yup from 'yup'

const USERNAME_REGEX = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g

const MIN_USERNAME_LENGTH = 2
const MAX_USERNAME_LENGTH = 18
const MIN_PASSWORD_LENGTH = 6

const REQUIRED_MESSAGE = 'Required Field'
const INVALID_USERNAME_MESSAGE = 'Invalid Username'
const INVALID_EMAIL_MESSAGE = 'Invalid E-Mail'
const UNMATCHING_PASSWORD_MESSAGE = 'No match'

export const REGISTRATION_VALIDATION_SCHEMA = Yup.object({
  username: Yup.string()
    .matches(USERNAME_REGEX, INVALID_USERNAME_MESSAGE)
    .min(MIN_USERNAME_LENGTH)
    .max(MAX_USERNAME_LENGTH)
    .required(REQUIRED_MESSAGE),
  email: Yup.string().email(INVALID_EMAIL_MESSAGE).required(REQUIRED_MESSAGE),
  password: Yup.string().min(MIN_PASSWORD_LENGTH).required(REQUIRED_MESSAGE),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], UNMATCHING_PASSWORD_MESSAGE)
    .required(REQUIRED_MESSAGE),
  politics: Yup.boolean().oneOf([true], REQUIRED_MESSAGE)
})
