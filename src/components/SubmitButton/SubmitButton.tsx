import { useState } from 'react'

import { FieldTooltip, ColorCfg } from '@/components/FieldTooltip'
import { Loader } from '../Loader'

import './SubmitButton.scss'

type Props = {
  text: string
  disabled?: boolean
  loading?: boolean
}

function SubmitButton({ text, disabled, loading }: Props) {
  const [isHoverAcitve, setIsHoverActive] = useState(false)

  return (
    <FieldTooltip
      text={
        isHoverAcitve && disabled ? 'Please complete all fields, if you want next step' : undefined
      }
      color={ColorCfg.Gray}
    >
      <button
        className="submit-button"
        onPointerEnter={() => setIsHoverActive(true)}
        onPointerLeave={() => setIsHoverActive(false)}
        type="submit"
        disabled={disabled}
      >
        {loading ? <Loader /> : text}
      </button>
    </FieldTooltip>
  )
}

export default SubmitButton
