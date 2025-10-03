/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseTextFieldProps } from '@mui/material'

type TInputType = 'none' | 'suffix' | 'preffix'

type TInputSize = 'large' | 'medium'

export interface IInputProps
  extends BaseTextFieldProps {
  errors?: boolean
  sizes: TInputSize
  width?: number | string
  onChange?: (...e: any[]) => void
}

export interface IInputStyleProps {
  errors?: boolean
  sizes: TInputSize
  types: TInputType
}

export interface IWrapperStyleProps {
  width?: number | string
}
