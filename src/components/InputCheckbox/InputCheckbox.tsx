import './InputCheckbox.scss'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  required?: boolean
}

function InputCheckbox({ children, required }: Props) {
  return (
    <div className="input-checkbox">
      <input type="checkbox" className="input-checkbox__input" />
      <span className="input-checkbox__text" data-required={required && '*'}>
        {children}
      </span>
    </div>
  )
}

export default InputCheckbox
