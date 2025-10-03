import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectors } from '~/store/state'
import useAuth from '~/utils/auth/useAuth'
import useServiceWorker from '~/utils/service-worker'

const useCustom = () => {
  const { isLoggedIn, userData, handleFetchProfile } = useAuth()
  const { isUpdateAvailable, updateApp } = useServiceWorker()
  const [openDialog, setOpenDialog] = useState(isUpdateAvailable)
  const globalState = useSelector(selectors.selectState)
  const expiredToken = useSelector(selectors.selectExpiredToken)

  useEffect(() => {
    // When use is not logged in do nothing
    if (!isLoggedIn) return

    // When useData is already exist do nothing
    if (userData) return

    // fetch new data profile
    handleFetchProfile()
  }, [userData, handleFetchProfile])

  useEffect(() => {
    setOpenDialog(isUpdateAvailable)
  }, [isUpdateAvailable])

  const handleUpdateApp = useCallback(() => {
    updateApp()
  }, [updateApp])

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false)
  }, [])

  return {
    data: {
      isLoggedIn,
      openDialog,
    },
    methods: {
      handleCloseDialog,
      handleUpdateApp,
    },
    globalState,
    expiredToken
  }
}

export default useCustom
