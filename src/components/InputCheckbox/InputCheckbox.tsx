import { ReactNode } from 'react'
import classNames from 'classnames'

import { FieldTooltip } from '@/components/FieldTooltip'

import './InputCheckbox.scss'

type Props = {
  children: ReactNode
  errorMessage?: string
  value?: string
  required?: boolean
}

function InputCheckbox({ children, required, errorMessage, ...props }: Props) {
  const inputTextClassnames = classNames({
    'input-checkbox__text': true,
    'input-checkbox__text_required': required
  })

  return (
    <FieldTooltip text={errorMessage}>
      <div className="input-checkbox">
        <input type="checkbox" className="input-checkbox__input" {...props} />
        <span className={inputTextClassnames}>{children}</span>
      </div>
    </FieldTooltip>
  )
}

export default InputCheckbox
