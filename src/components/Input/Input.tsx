import './Input.scss'

type Props = {
  placeholder: string
  required?: boolean
}

function Input({ placeholder, required = false }: Props) {
  return <input className="input" type="text" placeholder={placeholder} />
}

export default Input
