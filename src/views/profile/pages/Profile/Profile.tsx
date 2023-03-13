import React from 'react'

import PageContainer from '@/components/Layouts/PageContainer/PageContainer'

import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'

export function Profile() {
  return (
    <PageContainer>
      <Header username="AskerLosharovich" icon="" />
      <Navigation />
    </PageContainer>
  )
}
