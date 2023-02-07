import { useState } from 'react'
import classNames from 'classnames'

import { FieldTooltip, ColorCfg } from '@/components/FieldTooltip'

import './SubmitButton.scss'

type Props = {
  text: string
  disabled?: boolean
}

function SubmitButton({ text, disabled }: Props) {
  const [isHoverAcitve, setIsHoverActive] = useState(false)
  const buttonClassnames = classNames({
    'submit-button': true
  })

  return (
    <FieldTooltip
      text={isHoverAcitve ? 'Please complete all fields, if u want next step' : undefined}
      color={ColorCfg.Gray}
    >
      <button
        className={buttonClassnames}
        onPointerEnter={() => setIsHoverActive(true)}
        onPointerLeave={() => setIsHoverActive(false)}
        type="submit"
        disabled={disabled}
      >
        {text}
      </button>
    </FieldTooltip>
  )
}

export default SubmitButton
