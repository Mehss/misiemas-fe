import { Pagination as MuiPagination } from '@mui/lab'
import { styled } from '@mui/system'

import { colors, radius } from '~/styles/theme'

export const Pagination = styled(MuiPagination)({
  '.MuiPaginationItem-page.Mui-selected': {
    color: colors.neutral.n20,
    borderRadius: radius.xsmall * 1.5,
    backgroundColor: colors.neutral.n700,
  },
  '.MuiPaginationItem-root': {
    '&:active': {
      color: colors.neutral.n500,
      bordeRadius: radius.xsmall * 1.5,
      backgroundColor: colors.neutralAlpha.n30A,
    },
    '&:hover': {
      color: colors.blues.b400,
      backgroundColor: colors.blues.b75,
      borderRadius: radius.xsmall * 1.5,
    },
  },
})
