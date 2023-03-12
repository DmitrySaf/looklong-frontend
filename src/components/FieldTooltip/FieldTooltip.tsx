import { ReactNode } from 'react'
import classNames from 'classnames'

import './FieldTooltip.scss'

import styled from 'styled-components'

const TooltipWrapper = styled.div`
  position: relative;
  width: fit-content;
`

const Tooltip = styled.div<Props>`
  position: absolute;
  left: calc(100% + 10px);
  padding: 7px 12px;
  background-color: $color-red;
  border-radius: 7px;
  color: $color-white;
  width: max-content;
  max-width: 200px;
  transform: translateY(-50%);
  top: 100%;
  opacity: 0;
  visibility: ${({ text }) => (text ? 'visible' : 'hidden')};
  transition: $transition-time opacity, $transition-time top;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -3px;
    width: 6px;
    height: 6px;
    background: inherit;
    border-radius: 1px;
    transform: rotate(-45deg);
  }
`

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
    <TooltipWrapper className="field-tooltip">
      {children}
      <Tooltip text={text} color={color} className={inputTextClassnames}>
        {text}
      </Tooltip>
    </TooltipWrapper>
  )
}

export default FieldTooltip
