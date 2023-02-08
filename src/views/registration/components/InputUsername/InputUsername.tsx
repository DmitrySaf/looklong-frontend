import { useState, useEffect } from 'react'
import classNames from 'classnames'

import { FieldTooltip } from '@/components/FieldTooltip'
import { useDebounce } from '@/features/debounce'

import './InputUsername.scss'

type Props = {
  placeholder: string
  type?: string
  required?: boolean
  errorMessage?: string
  value?: string
  name?: string
}

enum SearchStatus {
  Searching = 'Searching...',
  Unique = 'Unique',
  NonUnique = 'Non-unique'
}

function InputUsername({ errorMessage, required, value, ...props }: Props) {
  const [status, setStatus] = useState<SearchStatus | undefined>(undefined)

  const debouncedSearchTerm = useDebounce(value ?? '', 500)

  const searchUsers = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(() => {
        if (Math.random() > 0.5) {
          setStatus(SearchStatus.Unique)
        } else {
          setStatus(SearchStatus.NonUnique)
        }
      })
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setStatus(SearchStatus.Searching)
      searchUsers()
    }
  }, [debouncedSearchTerm])

  const inputClassnames = classNames({
    'input-username': true,
    'input-username_required': required && !status
  })

  const statusClassnames = classNames({
    'input-username__status': true,
    'input-username__status_active': status !== undefined,
    'input-username__status_color_grey': status === SearchStatus.Searching,
    'input-username__status_color_green': status === SearchStatus.Unique,
    'input-username__status_color_red': status === SearchStatus.NonUnique
  })

  return (
    <FieldTooltip text={errorMessage}>
      <div className={inputClassnames}>
        <input className="input-username__element" {...props} value={value} />
        <div className={statusClassnames}>{status}</div>
      </div>
    </FieldTooltip>
  )
}

export default InputUsername
