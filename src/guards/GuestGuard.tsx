import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import configs from '~/configs'
import { AuthContext } from '~/context/AuthContext'

type GuestGuardProps = {
  children: React.ReactNode
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const { user } = useContext(AuthContext)

  if (user) return <Navigate to={configs.routes.home} replace />

  return <>{children}</>
}

export default GuestGuard
