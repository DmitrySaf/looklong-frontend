import { ReactNode } from 'react'

import './InputCheckbox.scss'

type Props = {
  children: ReactNode
  value?: string
  required?: boolean
}

function InputCheckbox({ children, ...props }: Props) {
  return (
    <div className="input-checkbox">
      <input type="checkbox" className="input-checkbox__input" {...props} />
      <span className="input-checkbox__text">{children}</span>
    </div>
  )
}

export default InputCheckbox
