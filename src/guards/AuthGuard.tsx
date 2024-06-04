import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '~/context/AuthContext'

type AuthGuardProps = {
  children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user } = useContext(AuthContext)

  if (!user) return <Navigate to={`/sign-in`} replace />

  return <>{children}</>
}

export default AuthGuard
