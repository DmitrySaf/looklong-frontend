import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
#root {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: ${theme.fontFamilies.main};
  font-size: ${theme.fontSizes.medium};
  line-height: ${theme.lineHeights.medium};
}
`
