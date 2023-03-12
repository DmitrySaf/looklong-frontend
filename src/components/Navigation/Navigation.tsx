import React from 'react'

import { NavigationWrapper, NavigationLink } from './styled'

export function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationLink to="/brands">Бренды</NavigationLink>
      <NavigationLink to="/new-goods">Новинки</NavigationLink>
      <NavigationLink to="/clothes">Одежда</NavigationLink>
      <NavigationLink to="/accessories">Аксессуары</NavigationLink>
      <NavigationLink to="/curators">Кураторы</NavigationLink>
      <NavigationLink to="/gift-cards">Подарочные карты</NavigationLink>
      <NavigationLink to="/news">Новости</NavigationLink>
    </NavigationWrapper>
  )
}
