import { ComponentType } from 'react'

import {
  SortDescriptor,
  CompositeFilterDescriptor,
} from '@progress/kendo-data-query'
import {
  GridCellProps,
  GridFooterCellProps,
  GridProps as KendoGridProps,
} from '@progress/kendo-react-grid'

export interface IGridProps extends KendoGridProps {
  loading?: boolean
  gridWidth?: string
  gridHeight?: string
  onDataTakeChange?: (val: number) => void
  moduleCell?: ComponentType<GridCellProps>
  customPopUpCell?: ComponentType<GridCellProps>
  customToggleCell?: ComponentType<GridCellProps>
  customActionCell?: ComponentType<GridCellProps>
  customDropdownCell?: ComponentType<GridCellProps>
  totalCell?: ComponentType<GridFooterCellProps>
  gridColumn: IColumn[]
  dataState: {
    skip: number
    take: number
    sort?: SortDescriptor[]
    filter?: CompositeFilterDescriptor
  }
}

export interface IContainerGridStyleProps {
  width?: string
}
export interface IGridCellStyleProps {
  color?: string
}
export interface IGridStyleProps {
  gridWidth?: string
  gridHeight?: string
}
export interface IColumn {
  [key: string]: any
}
