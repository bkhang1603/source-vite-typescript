import { createBrowserRouter } from 'react-router-dom'
import AuthGuard from '~/guards/AuthGuard'
import GuestGuard from '~/guards/GuestGuard'
import Root from '~/layouts/Root'
import Home from '~/pages/Home'
import NotFound from '~/pages/NotFound'
import SignIn from '~/pages/SignIn'
import User from '~/pages/User'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <Root />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: '/user',
        element: <User />
      }
    ]
  },
  {
    path: '/sign-in',
    element: (
      <GuestGuard>
        <SignIn />
      </GuestGuard>
    )
  },
  {
    path: '*',
    element: <NotFound />
  }
])
