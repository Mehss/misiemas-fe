import { styled } from '@mui/system'
import { TextField as MUITextField } from '@mui/material'

import { InputTheme } from '~/styles/components'
import { borderSize, padding, radius } from '~/styles/theme'

import { IInputStyleProps, IWrapperStyleProps } from './types'

export const Wrapper = styled('div')<IWrapperStyleProps>(({ width }) => ({
  width: '100%' || width,
}))

export const TextField = styled(MUITextField)<IInputStyleProps>(({ types, sizes, errors }) => ({
  '& .MuiInputBase-root': {
    borderRadius: radius.small,
    color: InputTheme[types].textColor,
    height: InputTheme[types].size[sizes].size,
    backgroundColor: InputTheme[types].backgroundColor,
    border: errors ? `solid ${InputTheme[types].required.borderColor} ${borderSize.xsmall}px`
      : `solid ${InputTheme[types].borderColor} ${borderSize.xsmall}px`,
    '&:hover': {
      color: InputTheme[types].hover.textColor,
      backgroundColor: InputTheme[types].hover.backgroundColor,
      border: `solid ${InputTheme[types].hover.borderColor}
          ${borderSize.xsmall}px`,
    },
    '&:focus-within': {
      color: InputTheme[types].focused.textColor,
      backgroundColor: InputTheme[types].focused.backgroundColor,
      border: `solid ${InputTheme[types].focused.borderColor}
          ${borderSize.xsmall}px`,
    },
    '&:disabled': {
      color: 'inherit',
      backgroundColor: InputTheme[types].disabled.backgroundColor,
    },
  },
  '& .MuiInputBase-input': {
    border: 'unset',
    padding: `0px ${padding.medium * 1.2}px`,
    height: InputTheme[types].size[sizes].size - 4,
    fontSize: InputTheme[types].size[sizes].font,
    '&:hover': {
      '::placeholder': {
        color: InputTheme[types].hover.placeholderColor,
      },
    },
    '&:focus': {
      '::placeholder': {
        color: InputTheme[types].focused.placeholderColor,
      },
    },
    '&:disabled': {
      '::placeholder': {
        color: InputTheme[types].disabled.placeholderColor,
      },
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'unset',
  },
}))
