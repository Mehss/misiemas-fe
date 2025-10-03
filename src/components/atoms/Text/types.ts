type TTextTypes =
'h1' |
'h2' |
'h3' |
'h4' |
'h5' |
'h6' |
'body1' |
'body2' |
'small' |
'label' |
'button1' |
'button2' |
'display1' |
'display2'

type TTextDecoration =
'none' |
'overline' |
'underline' |
'line-through' |
'underline-overline'

export interface ITextProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  color?: string
  types: TTextTypes
  decoration?: TTextDecoration
  children?: React.ReactNode
  margin?: string
}
