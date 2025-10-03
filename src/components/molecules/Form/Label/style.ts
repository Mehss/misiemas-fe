import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'

interface Props {
  disabled: boolean
  fontColor: string
}

const style = makeStyles<Props>()((theme: Theme, { disabled, fontColor }) => ({
  required: {
    color: theme.palette.error.main,
  },
  text: {
    color: disabled ? theme.palette.text.disabled : fontColor,
  },
}))

export default style
