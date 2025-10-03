import { UseAutocompleteProps } from '@mui/material'

type TOption = 'id' | 'label' | 'value'
type TAutoCompleteType = 'subtle' | 'normal'
type TAutoCompleteSize = 'default' | 'compact'
type TAutoCompleteValue = boolean | undefined

interface IErrorMessage { message?: string }
interface IErrors {
  [key: string]: IErrorMessage
}
export interface IValueObject {
  label: string | boolean
  id: string | number
  value: string | number | boolean
}
export interface IAutoCompleteProps
  extends UseAutocompleteProps<
  unknown,
  TAutoCompleteValue,
  TAutoCompleteValue,
  TAutoCompleteValue
  >{
  field?: string
  errors?: IErrors
  helper?: boolean
  disabled?: boolean
  optionText: TOption
  placeholder?: string
  optionValueKey: TOption
  types: TAutoCompleteType
  sizes: TAutoCompleteSize
  options : ReadonlyArray<IValueObject>
  value?: IValueObject | string | number | boolean
}
export interface IAutoCompleteStyleProps {
  errors?: boolean
  types : TAutoCompleteType
  sizes: TAutoCompleteSize
}
