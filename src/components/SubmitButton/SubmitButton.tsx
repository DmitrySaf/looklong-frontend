import classNames from 'classnames'

import './SubmitButton.scss'

type Props = {
  text: string
  disabled: boolean
}

function SubmitButton({ text, disabled }: Props) {
  const buttonClassnames = classNames({
    'submit-button': true,
    'submit-button_disabled': disabled
  })

  return (
    <button className={buttonClassnames} type="submit">
      {text}
    </button>
  )
}

export default SubmitButton
