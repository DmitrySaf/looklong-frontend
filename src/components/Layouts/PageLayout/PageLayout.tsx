import PageContainer from '../PageContainer/PageContainer'

import './PageLayout.scss'

function PageLayout({ children }: { children: JSX.Element }) {
  return (
    <PageContainer className="page-layout">
      <div className="header" />
      {children}
      <div className="footer" />
    </PageContainer>
  )
}

export default PageLayout
