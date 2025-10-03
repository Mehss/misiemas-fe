import React, { useEffect, useState } from 'react'

import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material'

import { ModalExpiredToken } from '~/components/atoms/Modal'
import ProtectedLayout from '~/components/organism/Layout/Protected'
import PublicLayout from '~/components/organism/Layout/Public'
import useAuth from '~/utils/auth/useAuth'

import useCustom from './hooks'


const IndexPage = () => {
  const { data, methods, expiredToken } = useCustom()
  const { handleLogout } = useAuth()
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleOrientationChange = async () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("orientationchange", handleOrientationChange)
    window.addEventListener('resize', handleOrientationChange)

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
    }

  }, [])
  return (
    <>
      {data.isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}
      <ModalExpiredToken isOpen={expiredToken} toggle={handleLogout} />
      <Dialog
        open={data.openDialog}
        aria-labelledby="update-app-dialog-title"
        aria-describedby="update-app-dialog-description"
      >
        <DialogTitle>
          Update Application
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="update-app-dialog-description">
            There is a new version available. Do you want to reload page to update?
            <br />
            If you choose Update Later, the application will
            automatically update if you close the window.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={methods.handleCloseDialog}>
            Update Later
          </Button>
          <Button onClick={methods.handleUpdateApp} color="primary" variant="contained">
            Update Now
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={windowWidth < 900 ? isPortrait ? true : false: false}
        aria-labelledby="update-app-dialog-title"
        aria-describedby="update-app-dialog-description"
      >
        <DialogTitle style={{ display: 'flex', textAlign: 'center', width: 200 }}>
          For better experience please set your orintation to landscape
        </DialogTitle>
      </Dialog>
    </>
  )
}

export default IndexPage
