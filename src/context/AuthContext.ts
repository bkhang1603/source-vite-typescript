import { createContext } from 'react'

export interface User {
  id: string
  name: string
}

interface IAuthContext {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => {},
  logout: () => {}
})
