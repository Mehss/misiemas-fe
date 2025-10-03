import React from 'react'
// import { useHistory } from 'react-router-dom'

import {
  Popover,
  Tooltip,
  ListItemIcon,
  MenuItem,
  Icon,
  Box,
  IconButton
} from '@mui/material'
import clsx from 'classnames'

import useAuth from '~/utils/auth/useAuth'

import useCustom from './hooks'
import useStyles from './style'

const MenuPopover = () => {
  const {
    anchorEl,
    handleClose,
    handlePopoverShown,
    popoverShown
  } = useCustom()
  const classes = useStyles({ isOpen: popoverShown })
  const { handleLogout } = useAuth()
  // const history = useHistory()

  return (
    <>
      <Tooltip title="User">
        <IconButton onClick={handlePopoverShown(!popoverShown)}>
          <Icon
            fontSize="small"
            className={clsx('fas fa-user', classes.logo)}
          />
        </IconButton>
      </Tooltip>
      <Popover
        id={popoverShown ? 'simple-popover' : undefined}
        open={popoverShown}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box px={2} py={3}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Icon className="fas fa-sign-out-alt" fontSize="small" />
            </ListItemIcon>
            <span>Logout</span>
          </MenuItem>
        </Box>
      </Popover>
    </>
  )
}

export default MenuPopover