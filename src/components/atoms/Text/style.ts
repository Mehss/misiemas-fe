import { styled } from '@mui/system'

import { TextTheme } from '~/styles/components'

import { ITextProps } from './types'

export const Text = styled('div')<ITextProps>(({ color, decoration, types, margin }) => ({
  color,
  textDecoration: decoration,
  fontSize: TextTheme[types].fontSize,
  fontWeight: TextTheme[types].fontWeight,
  lineHeight: `${TextTheme[types].lineHeight}px`,
  margin: margin,
}))
