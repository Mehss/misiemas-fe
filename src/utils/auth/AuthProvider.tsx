import React, { useState } from 'react'

import Cookies from 'js-cookie'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import * as Storage from '~/utils/localStorage'

interface AuthContextProps {
  isLoggedIn: boolean
  permissions: any
  userData: any
  setIsLoggedIn: (isLoggin: boolean) => void
  setPermissions: (permissions: any) => void
  setUserData: (userData: any) => void
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(Cookies.get('auth'))
  )
  const [userData, setUserData] = useState(Storage.load(LOCAL_STORAGE_KEY_USER))
  const [permissions, setPermissions] = useState([])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        setPermissions,
        permissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
