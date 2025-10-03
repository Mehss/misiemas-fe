import { withStyles } from '@mui/styles'

import { colors } from '~/styles/theme'

const GlobalStyle = withStyles((theme) => ({
  '@global': {
    '*': {
      fontFamily: 'Open Sans, sans-serif',
    },
    html: {
      height: '100%',
      fontSize: '16px',
      '@media (max-width: 1680px)': {
        fontSize: '12px',
      },
      // '@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait)':
      //   {
      //     transform: 'rotate(-90deg)',
      //     transformOrigin: 'left top',
      //     width: '100vh',
      //     height: '100vw',
      //     overflowX: 'hidden',
      //     position: 'absolute',
      //     top: '100%',
      //     left: 0,
      //   },
    },
    body: {
      height: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Open Sans, sans-serif',
      backgroundColor: colors.blue,
    },
    '#root': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    '.wrapper': {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 1367px)': {
        height: '100vh',
      },
      '@media (min-width: 1367px) and (max-height: 768px)': {
        minHeight: '850px',
      },
      '@media (min-width: 1681px) and (max-height: 940px)': {
        minHeight: '1000px',
      },
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7),
    },
    '.container': {
      position: 'relative',
      flexGrow: 1,
    },
    '.fill-screen-content': {
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
      '@media (min-width: 1367px)': {
        height: '100%',
        display: 'flex',
      },
    },
  },
}))(() => null)

export default GlobalStyle
