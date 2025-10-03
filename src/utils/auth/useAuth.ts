import { useContext, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Cookies from 'js-cookie'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import { actions } from '~/store/state'
import * as LS from '~/utils/localStorage'

import { AuthContext } from './AuthProvider'
import { useGetUserData } from '~/api/dct/auth/auth'

const useAuth = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } =
    useContext(AuthContext)

  const handleFetchProfile = useCallback(async () => {
    const userMetaData = await useGetUserData()
    const profileData = {
      userID: userMetaData.data.email,
      userName: userMetaData.data.first_name,
    }
    if (userMetaData) {
      setUserData(profileData)
      LS.set(LOCAL_STORAGE_KEY_USER, profileData)
    }
  }, [])

  const handleLogin = useCallback((data) =>{
    Cookies.set('auth', data)
    handleFetchProfile()
    setIsLoggedIn(true)  
  },
    [setIsLoggedIn, setUserData]
  )

  const handleLogout = useCallback(async () => {
    setIsLoggedIn(false)
    setUserData(null)
    Cookies.remove('auth')
    LS.remove(LOCAL_STORAGE_KEY_USER)
    const payload = {
      expiredToken: false,
    }
    dispatch(actions.setExpiredToken(payload))
  }, [setIsLoggedIn])

  const isPermissionGranted = useCallback(
    (permission) => {
      if (permission === 'ALL') return true

      const permissions = userData?.userAccess?.permission

      return permissions?.includes(permission) || false
    },
    [userData]
  )

  const checkCategoryPermission = useCallback(
    (permission) => {
      const permissions = userData?.userAccess?.permission
      const replaceChar = permission?.replace(new RegExp(' ', 'g'), '_')
      const setPermissions = 'TCT_' + replaceChar.toUpperCase()
      return permissions.includes(setPermissions) || false
    },
    [userData]
  )

  return {
    handleFetchProfile,
    handleLogin,
    handleLogout,
    isLoggedIn,
    isPermissionGranted,
    setIsLoggedIn,
    setUserData,
    token: Cookies.get('auth') || '',
    userData,
    checkCategoryPermission,
  }
}

export default useAuth
