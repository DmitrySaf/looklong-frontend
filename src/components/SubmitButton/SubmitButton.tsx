import classNames from 'classnames'

import './SubmitButton.scss'

type Props = {
  text: string
  disabled?: boolean
}

function SubmitButton({ text, disabled }: Props) {
  const buttonClassnames = classNames({
    'submit-button': true
  })

  return (
    <button className={buttonClassnames} type="submit" disabled={disabled}>
      {text}
    </button>
  )
}

export default SubmitButton
