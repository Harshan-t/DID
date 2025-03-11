import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from './routes/routes.jsx'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <Outlet />,
  children: routes
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserProvider> */}
      <RouterProvider router={router} />
    {/* </UserProvider> */}
  </StrictMode>
)
