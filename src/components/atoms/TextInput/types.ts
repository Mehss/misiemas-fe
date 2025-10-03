/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseTextFieldProps } from '@mui/material'

type TInputType = 'none' | 'suffix' | 'preffix'

type TInputSize = 'large' | 'medium'

export interface IInputProps
  extends BaseTextFieldProps {
  errors?: boolean
  icon?: JSX.Element
  sizes: TInputSize
  types: TInputType
  onChange?: (...event: any[]) => void
}

export interface IInputStyleProps {
  errors?: boolean
  sizes: TInputSize
  types: TInputType
}
