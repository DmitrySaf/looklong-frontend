import { ReactNode } from 'react'
import classNames from 'classnames'

import './InputCheckbox.scss'

type Props = {
  children: ReactNode
  value?: string
  required?: boolean
}

function InputCheckbox({ children, required, ...props }: Props) {
  const inputTextClassnames = classNames({
    'input-checkbox__text': true,
    'input-checkbox__text_required': required
  })

  return (
    <div className="input-checkbox">
      <input type="checkbox" className="input-checkbox__input" {...props} />
      <span className={inputTextClassnames}>{children}</span>
    </div>
  )
}

export default InputCheckbox
