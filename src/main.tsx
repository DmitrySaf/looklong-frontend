import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Registration from './views/registration/pages/Registration/Registration'

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
    <RouterProvider router={router} />
  </StrictMode>
)
