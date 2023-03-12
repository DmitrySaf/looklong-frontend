import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`

export const NavigationLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: ${({ theme }) => theme.fontWeights.heavy};
  padding: 18px;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryOpacity};
  color: ${({ theme }) => theme.colors.primaryOpacity};
  transition: ${({ theme }) => theme.transitionDurations.main} color,
    ${({ theme }) => theme.transitionDurations.main} border-bottom;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`
