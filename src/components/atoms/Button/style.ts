import { Button as MUIButton } from '@mui/material'
import { styled } from '@mui/system'

import { ButtonTheme } from '~/styles/components'
import { borderSize } from '~/styles/theme'

import { IButtonProps } from './types'

export const Button = styled(MUIButton)<IButtonProps>(({ types, sizes, disabled }) => ({
  width: '100%',
  lineHeight: '0px',
  borderRadius: 5,
  textTransform: 'none',
  color: ButtonTheme[types].textColor,
  height: ButtonTheme[types].size[sizes].size,
  fontSize: ButtonTheme[types].size[sizes].font,
  backgroundColor: ButtonTheme[types].backgroundColor,
  border: types === 'tertiary'
    && `solid ${ButtonTheme[types].borderColor}
      ${borderSize.xsmall * 1.2}px`,
  '&:hover': {
    color: ButtonTheme[types].hover.textColor,
    backgroundColor: ButtonTheme[types].hover.backgroundColor,
    textDecoration: types === 'link' && !disabled && 'underline',
    border: types === 'tertiary'
    && `solid ${ButtonTheme[types].hover.borderColor}
      ${borderSize.xsmall * 1.2}px`,
  },
  '&:active': {
    color: ButtonTheme[types].active.textColor,
    backgroundColor: ButtonTheme[types].active.backgroundColor,
    border: types === 'tertiary'
    && `solid ${ButtonTheme[types].active.borderColor}
      ${borderSize.xsmall * 1.2}px`,
  },
  '&:focus': {
    color: ButtonTheme[types].selected.textColor,
    backgroundColor: ButtonTheme[types].selected.backgroundColor,
    border: types === 'tertiary'
    && `solid ${ButtonTheme[types].selected.borderColor}
      ${borderSize.xsmall * 1.2}px`,
  },
  '&:disabled': {
    color: ButtonTheme[types].disabled.textColor,
    backgroundColor: ButtonTheme[types].disabled.backgroundColor,
    border: types === 'tertiary'
    && `solid ${ButtonTheme[types].disabled.borderColor}
      ${borderSize.xsmall * 1.2}px`,
  },
}))
