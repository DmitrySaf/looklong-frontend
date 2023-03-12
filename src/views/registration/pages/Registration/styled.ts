import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => theme.lineHeights.large};
  color: ${({ theme }) => theme.colors.primary};
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 400px 0fr;
  gap: 30px 50px;
  place-content: center;
  height: 100%;
`

export const InputPhotoWrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  align-self: flex-end;
`

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
`

export const Policies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SubmitButtonWrapper = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
`

export const RounterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover > div {
    transform: translateX(-5px);
  }
`

export const RouterLinkArrow = styled.div`
  display: inline-block;
  transition: ${({ theme }) => theme.transitionDurations.main} transform;
`
