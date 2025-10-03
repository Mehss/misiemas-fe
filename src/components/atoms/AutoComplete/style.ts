/* eslint-disable no-unexpected-multiline */

import { styled } from '@mui/material/styles'

import { Autocomplete as MUIAutoComplete } from '@mui/lab'
import { AutoCompleteTheme } from '~/styles/components'

import {
  colors,
  radius,
  fontSizes,
  fontWeight,
  borderSize,
  height,
} from '~/styles/theme'

import { IAutoCompleteStyleProps } from './types'

export const Autocomplete = styled(MUIAutoComplete)
<IAutoCompleteStyleProps>(({ sizes, types, errors }) => ({
  '& .MuiInputBase-input': {
    height: 0,
  },
  '& .MuiAutoComplete-inputRoot': {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: fontSizes.medium,
    fontWeight: fontWeight.normal,
    color: AutoCompleteTheme[types]?.textColor,
    height: `${AutoCompleteTheme.size[sizes]?.height}px`,
  },
  '&.MuiAutoComplete-root': {
    borderRadius: radius.small,
    backgroundColor: AutoCompleteTheme[types].backgroundColor,
    border: errors ? `solid ${colors.reds.r400} ${borderSize.xsmall}px` : 'unset',
    '&:hover': {
      borderRadius: radius.small,
      border: errors ? `solid ${colors.reds.r400} ${borderSize.xsmall}px` : 'unset',
    },
    '&:focus': {
      borderRadius: radius.small,
      border: errors ? `solid ${colors.reds.r400} ${borderSize.xsmall}px`
        : 'solid IColor.blue.b100} IBorderSize.xsmall}px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'unset',
  },
  '&:hover': {
    borderRadius: radius.small,
    color: AutoCompleteTheme[types].hover.textColor,
    backgroundColor: AutoCompleteTheme[types]?.hover.backgroundColor,
    border: 'unset',
  },
  '& .Mui-focused': {
    color: AutoCompleteTheme[types]?.focus.textColor,
    backgroundColor: AutoCompleteTheme[types]?.focus.backgroundColor,
  },
  '&:disabled': {
    color: AutoCompleteTheme[types]?.disable.textColor,
    backgroundColor: AutoCompleteTheme[types]?.disable.backgroundColor,
  },
}))

export const Helper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: height.xsmall * 1.25,
})

export const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const Form = styled('div')({
  width: '100%',
})

export const Row = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
})
