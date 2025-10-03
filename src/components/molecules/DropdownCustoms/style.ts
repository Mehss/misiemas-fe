import { Menu as MenuProps } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

export const StyledMenu = styled((MenuProps))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiButton-root': {
      '@media (min-width: 800px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 1360px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 1440px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 1600px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 1920px)': {
        fontSize: '1rem',
      },
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))