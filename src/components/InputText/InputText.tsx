import classNames from 'classnames'

import { FieldTooltip } from '../FieldTooltip'

import './InputText.scss'

type Props = {
  placeholder: string
  type?: string
  required?: boolean
  errorMessage?: string
  status: boolean
  field?: {
    name?: string
    value?: string
  }
}

function TextInput({ errorMessage, required, status, field, ...props }: Props) {
  const inputClassnames = classNames({
    'input-text': true,
    'input-text_invalid': errorMessage === undefined ? false : true,
    'input-text_required': required
  })

  return (
    <FieldTooltip text={errorMessage}>
      <div className={inputClassnames}>
        <input className="input-text__element" {...props} {...field} />
        {status && <div className="input-text__status">{errorMessage}</div>}
      </div>
    </FieldTooltip>
  )
}

export default TextInput
