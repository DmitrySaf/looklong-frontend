import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 85px 0 30px;
`

export const SexSwitcher = styled.div`
  display: flex;
  gap: 12px;

  & > span {
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    cursor: pointer;
  }
`

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.large};
  text-align: center;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  justify-self: flex-end;
`

export const HeaderIcon = styled.img`
  height: 18px;
  cursor: pointer;
  opacity: 0.6;
  transition: ${({ theme }) => theme.transitionDurations.main} linear;

  &:hover {
    opacity: 1;
  }
`

export const ProfileName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOpacity};
  transition: ${({ theme }) => theme.transitionDurations.main} linear;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ProfileIconWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 36px;
  height: 36px;
`

export const ProfileIcon = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`
