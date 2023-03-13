import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryOpacity};
  padding: 0 10px 18px;
`

export const NavigationLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: ${({ theme }) => theme.fontWeights.heavy};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryOpacity};
  transition: ${({ theme }) => theme.transitionDurations.main} color;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
