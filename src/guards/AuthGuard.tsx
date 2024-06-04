import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import configs from '~/configs'
import { AuthContext } from '~/context/AuthContext'

type AuthGuardProps = {
  children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user } = useContext(AuthContext)

  if (!user) return <Navigate to={`/${configs.routes.signIn}`} replace />

  return <>{children}</>
}

export default AuthGuard
