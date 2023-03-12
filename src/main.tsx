import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { Registration } from './views/registration/pages/Registration/Registration'

import { theme } from './assets/styles/Theme'
import { Global } from './assets/styles/Global'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 style={{ textAlign: 'center', marginTop: '400px' }}>404 NOT FOUND DEBIL</h1>
  },
  {
    path: '/registration',
    element: <Registration />
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
