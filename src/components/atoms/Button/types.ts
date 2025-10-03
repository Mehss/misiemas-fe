import { ButtonProps } from '@mui/material'

export type TButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'subtle'
  | 'danger'
  | 'icon'
  | 'link'

export type TButtonSize = 'small' | 'medium' | 'large'

export interface IButtonProps
  extends ButtonProps {
  types: TButtonType
  sizes: TButtonSize
  children?: React.ReactNode
}
