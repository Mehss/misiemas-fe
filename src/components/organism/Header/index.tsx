import React from 'react'

import {
  AppBar, Grid, Toolbar, Typography,
} from '@mui/material'

import MenuPopover from './AccountPopover'
import useStyles from './style'

const Header = () => {
  const classes = useStyles({ header: '' })
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar classes={{ root: classes.toolbarRootOverrides }} className={classes.toolbarWrapper}>
        <Grid justifyContent="space-between" alignItems="center" container>
          <Grid xs item>
            <div className={classes.headerLogo}>
              <Typography
                variant="h6"
                role="button"
                className={classes.titleLink}
              >
                <span className={classes.headerTitle}>Insight Dashboard</span>
              </Typography>
            </div>
          </Grid>
          <Grid justifyContent="flex-end" xs container item>
            <MenuPopover />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
