import { string, ref, boolean, object } from 'yup'

const REQUIRED_MESSAGE = 'Required Field'

// USERNAME

const USERNAME_REGEX = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g
const USERNAME_MESSAGE = 'Invalid Username'

const MIN_USERNAME_LENGTH = 2
const MIN_USERNAME_LENGTH_MESSAGE = `Username length cannot be less than ${MIN_USERNAME_LENGTH} characters`

const MAX_USERNAME_LENGTH = 18
const MAX_USERNAME_LENGTH_MESSAGE = `Username length cannot be more than ${MAX_USERNAME_LENGTH} characters`

export function usernameValidation() {
  return string()
    .matches(USERNAME_REGEX, USERNAME_MESSAGE)
    .min(MIN_USERNAME_LENGTH, MIN_USERNAME_LENGTH_MESSAGE)
    .max(MAX_USERNAME_LENGTH, MAX_USERNAME_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE)
}

// EMAIL

const EMAIL_MESSAGE = 'Invalid E-Mail'

export function emailValidation() {
  return string().email(EMAIL_MESSAGE).required(REQUIRED_MESSAGE)
}

// PASSWORD

const MIN_PASSWORD_LENGTH = 6
const MIN_PASSWORD_LENGTH_MESSAGE = `Password length cannot be less than ${MIN_PASSWORD_LENGTH} characters`

export function passwordValidation() {
  return string().min(MIN_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH_MESSAGE).required(REQUIRED_MESSAGE)
}

// CONFIRM PASSWORD

const UNMATCHING_PASSWORD_MESSAGE = 'No match'

export function confirmPasswordValidation() {
  return string()
    .oneOf([ref('password'), null], UNMATCHING_PASSWORD_MESSAGE)
    .required(REQUIRED_MESSAGE)
}

// POLITICS

export function politicsValidation() {
  return boolean().oneOf([true], REQUIRED_MESSAGE)
}

export function createValidationSchema(obj: any) {
  return object(obj)
}
