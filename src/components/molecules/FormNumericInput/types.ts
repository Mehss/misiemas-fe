/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseTextFieldProps } from '@mui/material'
import { Control } from 'react-hook-form'

type TTextInputSize = 'large' | 'medium'

interface IErrorMessage { message?: string }
interface IErrors {
  [key: string]: IErrorMessage | any
}
export interface IFormInputProps extends BaseTextFieldProps {
  field: string
  title?: string
  errors?: IErrors
  helper?: boolean
  disabled?: boolean
  istooltip?: boolean
  isrequired?: boolean
  placeholder?: string
  sizes: TTextInputSize
  isoptional?: boolean
  optionalLabel?:string
  control: Control<any>
}
