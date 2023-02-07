import { ReactNode } from 'react'
import classNames from 'classnames'

import './FieldTooltip.scss'

type Props = {
  children: ReactNode
  text?: string
  color?: ColorCfg
}

export enum ColorCfg {
  Red = 'red',
  Gray = 'gray'
}

function FieldTooltip({ children, text, color = ColorCfg.Red }: Props) {
  const inputTextClassnames = classNames({
    'field-tooltip__tooltip': true,
    'field-tooltip__tooltip_shown': text,
    [`field-tooltip__tooltip_color_${color}`]: color
  })

  return (
    <div className="field-tooltip">
      {children}
      <div className={inputTextClassnames}>{text}</div>
    </div>
  )
}

export default FieldTooltip
