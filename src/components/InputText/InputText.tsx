import classNames from 'classnames'

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

function TextInput({ errorMessage, field, ...props }: Props) {
  const inputClassnames = classNames({
    'input-text': true,
    'input-text_invalid': errorMessage === undefined ? false : true
  })

  return (
    <div className={inputClassnames}>
      <input className="input-text__element" {...props} {...field} />
      <div className="input-text__status">{errorMessage}</div>
    </div>
  )
}

export default TextInput
