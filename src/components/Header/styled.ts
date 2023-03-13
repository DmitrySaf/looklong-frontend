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

  & > div {
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    cursor: pointer;
    position: relative;

    &:first-child::after {
      content: '';
      position: absolute;
      top: 18px;
      right: 0;
      background-color: #000000;
      display: block;
      height: 3px;
      width: 0;
      transition: width 0.3s ease-in-out;
    }

    &:hover:first-child::after,
    &:hover:last-child::after {
      width: 100%;
    }

    &:last-child::after {
      content: '';
      position: absolute;
      top: 18px;
      background-color: #000000;
      display: block;
      height: 3px;
      width: 0%;
      transition: width 0.3s ease-in-out;
    }
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
