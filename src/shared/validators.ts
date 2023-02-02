const EMAIL_REGEX = /[0-9a-z_\-\.]+\@[a-z]{2,}\.[a-z]{2,4}/
//const EMAIL_REGEX = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/g

type ReturnType = {
  isValid: boolean
}

export function validateEmail(value: string): ReturnType {
  return {
    isValid: EMAIL_REGEX.test(value)
  }
}
