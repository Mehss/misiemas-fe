import { styled } from '@mui/system'

import {
  width,
  height,
  colors,
  fontSizes,
  fontWeight,
} from '~/styles/theme'

import { ICellStyleProps } from './types'

export const GridCell = styled('div')({
  cursor: 'pointer',
  userSelect: 'none',
})

export const CodeCell = styled('div')<ICellStyleProps>(({ color }) => ({
  cursor: 'pointer',
  fontSize: fontSizes.medium,
  fontWeight: fontWeight.normal,
  color: color || colors.neutral.n800,
}))

export const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
})

export const IconWrapper = styled('div')({
  cursor: 'pointer',
  userSelect: 'none',
  width: width.xsmall,
  height: height.xsmall,
})
