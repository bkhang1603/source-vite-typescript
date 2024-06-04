import { useState, ReactNode } from 'react'
import { AuthContext } from './AuthContext'

interface IUser {
  id: string
  name: string
}

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null)

  const login = (newUser: IUser) => {
    setUser(newUser)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
