import { Grid as KendoGrid } from '@progress/kendo-react-grid'
import styled from 'styled-components'

import { IContainerGridStyleProps, IGridStyleProps } from './types'

export const Container = styled.div<IContainerGridStyleProps>`
  height: 100%;
  position: relative;
  width: ${({ width }) => width};
`

export const Grid = styled(KendoGrid)<IGridStyleProps>`
  width: ${({ gridWidth }) => gridWidth};
  height: ${({ gridHeight }) => gridHeight};
`
export const GridCell = styled.td`
  user-select: none;
`
export const Row = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`
