import { PagerProps } from '@progress/kendo-react-data-tools'

export interface IPagerProps extends PagerProps {
  onTakeChange?: (e: number) => void
  isPageChangeAble?: boolean
}
