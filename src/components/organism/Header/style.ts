import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  header: string
}

const style = makeStyles<Theme, IProps>(theme => ({
  appbar: {
    backgroundImage: ({ header }) => `url(${header})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: colors.blue,
    boxShadow: 'none'
  },
  titleLink: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginTop: `-${theme.spacing(1)}`
    }
  },
  logo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5)
  },
  headerTitle: {
    fontSize: fontSize[20],
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  toolbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  toolbarRootOverrides: {
    minHeight: '2.926vw',
    paddingLeft: theme.spacing(9),
    paddingRight: theme.spacing(9)
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1100
  },
  currentDate: {
    marginRight: theme.spacing(5)
  },
  tabs: {
    '& a': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      color: colors.white,
      textTransform: 'none',
      fontSize: fontSize[20],
      fontWeight: 'normal',
      '&.Mui-selected': {
        fontWeight: 'bold'
      }
    },
    '& .MuiTabs-indicator': {
      backgroundColor: colors.white
    }
  },
  popoverContent: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7)
  },
  menu: {
    fontSize: fontSize[14],
    color: colors.red,
    margin: `0 ${theme.spacing(5)}`,
    width: '7vw',
    height: `calc(7vw + ${theme.spacing(5)})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
    textAlign: 'center',
    cursor: 'pointer',
    textTransform: 'uppercase',
    borderRadius: 8,
    border: `1px solid ${colors.cyan}`,
    boxShadow: '0px 2px 20px rgba(128, 128, 128, 0.25)',
    position: 'relative',
    '&.disabled': {
      opacity: 0.3,
      cursor: 'unset'
    },
    '&.active': {
      fontWeight: 'bold'
    },
    '&:not(:last-child)': {
      marginRight: 0
    },
    '& > div': {
      position: 'absolute',
      bottom: theme.spacing(3),
      left: '50%',
      transform: 'translate(-50%, 0)',
      width: `calc(100% - ${theme.spacing(5)})`
    }
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
    transition: '0.3s'
  },
  divider: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(4),
    borderLeft: `solid 1px ${colors.white}`
  }
}))

export default style
