import classNames from 'classnames'

import { FieldTooltip } from '../FieldTooltip'

import './InputText.scss'

type Props = {
  placeholder: string
  type?: string
  required?: boolean
  errorMessage?: string
  field?: {
    name?: string
    value?: string
  }
}

function InputText({ errorMessage, required, field, ...props }: Props) {
  const inputClassnames = classNames({
    'input-text': true,
    'input-text_required': required
  })

  return (
    <FieldTooltip text={errorMessage}>
      <div className={inputClassnames}>
        <input className="input-text__element" {...props} {...field} />
      </div>
    </FieldTooltip>
  )
}

export default InputText
