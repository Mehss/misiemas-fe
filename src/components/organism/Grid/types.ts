import { SortDescriptor } from '@progress/kendo-data-query'
import { GridCellProps, GridProps as KendoGridProps } from '@progress/kendo-react-grid'
import { MouseEventHandler } from 'react'

type TFilterType = 'text' | 'numeric' | 'boolean' | 'date'
type TOption = 'id' | 'label' | 'value'

type TCellParams =
    MouseEventHandler<HTMLSpanElement>
    | ((e: GridCellProps) => void)
    | undefined
interface IReturnedFilter {
  Field?: string
  Type?: string
  Value?: string
}
export interface IGridProps
  extends KendoGridProps {
  gridColumn: any
  gridWidth?: string
  gridHeight?: string
  dataState: {
    skip: number,
    take: number,
    sort?: Array<SortDescriptor>,
    filters?: Array<IReturnedFilter>
  },
  filterColumn?: TFilterType
  option: any
  optionText: TOption
  headerTitle: string
  leftButtonLabel: string
  optionValueKey: TOption
  rightButtonLabel: string
  onClickLeftButton?: () => void
  onClickRightButton?: () => void
  onCodeClick?: TCellParams
  onPrintClick?: TCellParams
  onEditClick?: TCellParams
  onDeleteClick?: TCellParams
}
