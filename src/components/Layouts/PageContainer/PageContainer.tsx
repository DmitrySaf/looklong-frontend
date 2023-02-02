import classNames from 'classnames'

import './PageContainer.scss'

type Props = {
  children: JSX.Element | JSX.Element[]
  className?: string
}

function PageContainer({ children, className }: Props) {
  const containerClasses = classNames({
    'page-container': true,
    className
  })

  return <div className={containerClasses}>{children}</div>
}

export default PageContainer
