import { createBrowserRouter } from 'react-router-dom'
import configs from '~/configs'
import AuthGuard from '~/guards/AuthGuard'
import GuestGuard from '~/guards/GuestGuard'
import Root from '~/layouts/Root'
import Home from '~/pages/Home'
import NotFound from '~/pages/NotFound'
import SignIn from '~/pages/SignIn'
import User from '~/pages/User'

export const router = createBrowserRouter([
  {
    path: configs.routes.home,
    element: (
      <AuthGuard>
        <Root />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: configs.routes.user,
        element: <User />
      }
    ]
  },
  {
    path: configs.routes.signIn,
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
