import { InputBase as MUIInputBase } from '@mui/material'
import { styled } from '@mui/system'

import { colors } from '~/styles/theme'

export const InputBase = styled(MUIInputBase)(({ theme }) => ({
  width: '100%',
  borderWidth: 0.6,
  borderRadius: 2.2,
  borderColor: colors.grey,
  padding: theme.spacing(3),
  backgroundColor: colors.white,
}))
