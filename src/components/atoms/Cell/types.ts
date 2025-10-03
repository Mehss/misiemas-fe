import { MouseEventHandler } from 'react'
import { GridCellProps as Props } from '@progress/kendo-react-grid'

type TCellParams =
    MouseEventHandler<HTMLSpanElement>
    | ((e: Props) => void)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | undefined | any
export interface IGridCellProps
extends Props {
    rendering?: string
    onCodeClick?: TCellParams
    onEditClick?: TCellParams
    onPrintClick?: TCellParams
    onDeleteClick?: TCellParams
}

export interface ICellStyleProps {
    color?: string
}
