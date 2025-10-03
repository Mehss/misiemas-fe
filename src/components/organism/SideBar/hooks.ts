import { useMemo, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { authHost } from '~/config'
import { selectors, actions } from '~/store/state'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  //get project from redux
  const globalState = useSelector(selectors.selectState)

  const handleClickCategory = useCallback(
    (url, chart, location) => {
      type LocationState = { title?: string }
      const { title } = location?.state as LocationState
      const path = location.pathname.split('/')
      history.push({
        pathname: `/${path[1]}/${path[2]}/${path[3]}/${chart}`,
        state: {
          title: title,
          category: path[1],
        },
      })
      const payload = {
        url: url,
        chart: chart,
      }
      dispatch(actions.setUrl(payload))
      // dispatch(actions.setWeatherForecast(item.projectDefinition))
    },
    [history]
  )

  const [anchorEl, setAnchorEl] = useState(null)
  // const opened = Boolean(anchorEl)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const { userData, handleLogout } = useAuth()

  const handleDirectProfile = () => {
    window.location.href = `${authHost}/settings/profile`
  }

  const profileName = useMemo(() => userData?.userName || 'Admin', [userData])
  const handleRefectRedux = () => {
    const payload = {
      url: '',
      chart: '',
    }
    dispatch(actions.setUrl(payload))
    dispatch(actions.setPage([]))
  }
  return {
    open,
    anchorEl,
    handleClose,
    handleOpen,
    profileName,
    handleDirectProfile,
    handleLogout,
    globalState,
    handleClickCategory,
    handleRefectRedux,
  }
}

export default useCustom
