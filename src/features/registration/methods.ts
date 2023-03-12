import { type RegistrationForm } from './types'

export const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  politics: false,
  notifications: false
}

export function createRegistrationFormPayload(form: RegistrationForm) {
  const { username, email, password } = form

  return {
    username,
    email,
    password
  }
}
