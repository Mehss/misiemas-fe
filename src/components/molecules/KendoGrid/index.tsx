/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { memo, useState, useEffect } from 'react'

import { PagerProps } from '@progress/kendo-react-data-tools'
import {
  GridNoRecords,
  GridCellProps,
  GridColumn as Column,
  GridFooterCellProps
} from '@progress/kendo-react-grid'
import { isNil } from 'lodash'

import Pagination from '~/components/molecules/Pagination'

import { Grid, Container, GridCell } from './style'
import { IGridProps, IColumn } from './types'

const CustomCell = (props: GridCellProps) => {
  const { field, dataItem, dataIndex } = props
  return (
    <GridCell id={`m_grid_cell_${field}_${dataIndex}`}>
      {field && dataItem[field]}
    </GridCell>
  )
}

const LockCell = (props: GridCellProps) => {
  const { field, dataItem, dataIndex } = props
  return (
    <GridCell id={`m_grid_cell_${field}_${dataIndex}`}>
      {field && dataItem[field]}
    </GridCell>
  )
}

const checkData = (value:any) =>{
  if (typeof value === 'string') {
    const A = value.replace('.', '')
    const B = A.replace(',','.')
    const C = parseFloat(B)
    return C
  }
  return value
}

const formatHasil = (value:any) =>{
  return (value).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

const totalCell = (props: GridFooterCellProps, data:any) => {
  const field = props.field || ""
  if (field === "activityDate" || field === "dates") {
    return (
    <td colSpan={props.colSpan} style={props.style}>
      Total
    </td>
  )
  } else if (field === "pcwbs" || field === "area") {
    return (
      <td colSpan={props.colSpan} style={props.style}>
      -
    </td>
    )
  }
  else {
    // const total = data.reduce((acc, current) => parseFloat(acc) + parseFloat(current[field]), 0)
    const total = data.reduce((acc, current) => checkData(acc) + checkData(current[field]), 0)
    return (
      <td colSpan={props.colSpan} style={props.style}>
        {(formatHasil(total))}
      </td>
    )
  }
}

const MasterGrid = (props: IGridProps) => {
  const {
    data,
    total,
    group,
    loading,
    pageable,
    dataState,
    gridColumn,
    filterable,
    selectable,
    reorderable,
    expandField,
    onPageChange,
    onSortChange,
    onExpandChange,
    onColumnReorder,
    customActionCell,
    onSelectionChange,
    onDataTakeChange,
    onDataStateChange,
    onHeaderSelectionChange,
    // totalCell,
  } = props

  const [gridData, setGridData] = useState<IColumn[]>()
  const [isRefresh, setIsRefresh] = useState<boolean>(false)
  // const [width, setWidth] = useState(`${window.innerWidth}px`)

  const isOpen = true

  const getTotalWidth = () => {
    const dataGrid = gridColumn
      .filter((dt) => dt.width !== '*')
      .map((dtt) => parseInt((dtt.width as string)?.replace('px', ''), 10))
    return dataGrid.reduce((t: number, ts: number) => t + ts, 0)
  }

  const checkResize = () => {
    const left = isOpen ? 340 : 80
    const minWidth = Math.abs(window.innerWidth - left) - getTotalWidth()
    const dataGrid = gridColumn.map((dt) => {
      if (dt.width === '*') {
        dt.responsive =
          minWidth > parseInt(dt.minWidth as string) ? '*' : `${dt.minWidth}px`
      } else {
        dt.responsive = `${dt.minWidth}px`
      }
      dt.showColumn = !isNil(dt.show) ? dt.show : true
      return dt
    })
    setGridData(dataGrid)
    setIsRefresh(true)
  }

  const PagerComponent = (pagerProps: PagerProps) => (
    <Pagination
      {...pagerProps}
      total={total as number}
      onTakeChange={onDataTakeChange}
    />
  )

  const LoadinGridPanel = ({ pending }: { pending: boolean }) => (
    <>
      {pending && (
        <div className="k-loading-mask">
          <span className="k-loading-text">Loading</span>
          <div className="k-loading-image" />
          <div className="k-loading-color" />
        </div>
      )}
    </>
  )

  useEffect(() => {
    checkResize()
    window.addEventListener('resize', checkResize)
  }, [])
  
  return (
    <div>
      {isRefresh ? (
        <Container>
          <Grid
            {...props}
            data={data}
            group={group}
            {...dataState}
            pageable={pageable}
            id="m_grid_all_data"
            filterable={filterable}
            selectable={selectable}
            selectedField="selected"
            reorderable={reorderable}
            expandField={expandField}
            onPageChange={onPageChange}
            onSortChange={onSortChange}
            onExpandChange={onExpandChange}
            onColumnReorder={onColumnReorder}
            onSelectionChange={onSelectionChange}
            onDataStateChange={onDataStateChange}
            pager={pageable ? PagerComponent : null}
            onHeaderSelectionChange={onHeaderSelectionChange}
            sortable={{
              allowUnsort: true,
              mode: 'multiple', // expected: 'single' or 'multiple'
            }}
          >
            <GridNoRecords>
              <p id="grid-no-records">No records available</p>
            </GridNoRecords>
            {gridData?.length &&
              gridData.map((e) =>
                e?.render?.toLowerCase() === 'action' ? (
                  <Column
                    key={e?.field}
                    title={e?.title}
                    field={e?.field}
                    width={e?.width}
                    filter={e?.filterType}
                    cell={customActionCell}
                    className="e-grid-mid-width"
                    sortable={e?.sortable || false}
                    filterable={e?.filterable || false}
                    reorderable={e?.reorderable || true}
                  />
                ) : 
                  e?.render?.toLowerCase() === 'locked' ? (
                    <Column
                      key={e?.field}
                      title={e?.title}
                      field={e?.field}
                      width={e?.width}
                      filter={e?.filterType}
                      cell={LockCell}
                      className="e-grid-mid-width"
                      sortable={e?.sortable || false}
                      filterable={e?.filterable || false}
                      reorderable={e?.reorderable || true}
                      footerCell={thisProps => totalCell(thisProps, data)}
                      // locked={true}
                    />
                  ) : (
                  <Column
                    key={e?.field}
                    title={e?.title}
                    field={e?.field}
                    width={e?.width}
                    filter={e?.filterType}
                    className="e-grid-mid-width"
                    sortable={e?.sortable || false}
                    filterable={e?.filterable || false}
                    reorderable={e?.reorderable || true}
                    cell={CustomCell}
                  />
                )
              )}
          </Grid>
          <LoadinGridPanel pending={loading || false} />
        </Container>
      ) : null}
    </div>
  )
}

MasterGrid.defaultProps = {
  pageable: true,
  filterable: true,
}

export default memo(MasterGrid)
