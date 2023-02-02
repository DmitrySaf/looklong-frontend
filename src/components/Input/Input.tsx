import { ChangeEvent, useState } from "react"
import classNames from "classnames"

import { validateEmail } from "@/shared/validators"

import './Input.scss'

type Props = {
  placeholder: string
  type?: string
  required?: boolean
  handleValidation?: (a: boolean) => void
}

function Input({ placeholder, required = false, type = 'text', handleValidation }: Props) {
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(false)
  const inputClassnames = classNames({
    'input': true,
    'input_invalid': value === '' ? false : !valid
  })
  const validate = (event: ChangeEvent<HTMLInputElement>) => {
    if (handleValidation === undefined) return

    const { value } = event.target;
    setValue(value)
    const { isValid } = validateEmail(value)
    setValid(isValid)
    
    handleValidation(isValid)
  }

  return (
    <div className={inputClassnames}>
      <input
        className="input__element"
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={validate}
      />
      <div className="input__status">Invalid email</div>
    </div>
  )
}

export default Input
