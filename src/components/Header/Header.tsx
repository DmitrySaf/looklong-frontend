import React from 'react'

import search from '@/assets/img/search.svg'
import saved from '@/assets/img/saved-goods.svg'
import mockIcon from '@/assets/img/patrick-bateman.webp'

import {
  HeaderTitle,
  HeaderWrapper,
  SexSwitcher,
  HeaderActions,
  HeaderIcon,
  ProfileName,
  ProfileIcon,
  ProfileIconWrapper
} from './styled'

type Props = {
  username: string
  icon: string
}

export function Header({ username }: Props) {
  return (
    <>
      <HeaderWrapper>
        <SexSwitcher>
          <div>Мужское</div>
          <div>Женское</div>
        </SexSwitcher>
        <HeaderTitle>look long</HeaderTitle>
        <HeaderActions>
          <HeaderIcon src={search} />
          <HeaderIcon src={saved} />
          <ProfileName>{username}</ProfileName>
          <ProfileIconWrapper>
            <ProfileIcon src={mockIcon} />
          </ProfileIconWrapper>
        </HeaderActions>
      </HeaderWrapper>
    </>
  )
}
