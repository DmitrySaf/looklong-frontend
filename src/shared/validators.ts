import * as Yup from 'yup'

const USERNAME_REGEX = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g

const REQUIRED_MESSAGE = 'Required Field'
const INVALID_USERNAME_MESSAGE = 'Invalid Username'
const INVALID_EMAIL_MESSAGE = 'Invalid E-Mail'
const UNMATCHING_PASSWORD_MESSAGE = 'No match'

export const REGISTRATION_VALIDATION_SCHEMA = Yup.object({
  username: Yup.string()
    .matches(USERNAME_REGEX, INVALID_USERNAME_MESSAGE)
    .required(REQUIRED_MESSAGE),
  email: Yup.string().email(INVALID_EMAIL_MESSAGE).required(REQUIRED_MESSAGE),
  password: Yup.string().required(REQUIRED_MESSAGE),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], UNMATCHING_PASSWORD_MESSAGE)
    .required(REQUIRED_MESSAGE),
  politics: Yup.boolean().oneOf([true]).required(REQUIRED_MESSAGE)
})
