type TOption = 'id' | 'label' | 'value'
export interface IValueObject {
  label: string | boolean
  id: string | number
  value: string | number | boolean
}
export interface IHeaderGridProps {
  title: string
  optionText: TOption
  optionValueKey: TOption
  leftButtonLabel: string
  rightButtonLabel: string
  onClickLeftButton?: () => void
  onClickRightButton?: () => void
  option: ReadonlyArray<IValueObject>
}
