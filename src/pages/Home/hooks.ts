import { useCallback, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { idmHost } from '~/config'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const history = useHistory()
  const { userData, handleLogout } = useAuth()

  const handleDirectProfile = () => {
    window.location.href = `${idmHost}/settings/profile`
  }

  const [open, setOpen] = useState(false)
  const profileName = useMemo(() => userData?.userName || 'Admin', [userData])

  const handleHome = useCallback(() => {
    history.push({
      pathname: `/dct`,
      state: {
        title: 'DCT',
      },
    })
  }, [history])

  const [anchorEl, setAnchorEl] = useState(null)
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }
  return {
    open,
    anchorEl,
    userData,
    handleOpen,
    handleHome,
    handleClose,
    profileName,
    handleLogout,
    handleDirectProfile,
  }
}

export default useCustom
