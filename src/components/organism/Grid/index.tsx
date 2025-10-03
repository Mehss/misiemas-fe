/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { memo } from 'react'
import { PagerProps } from '@progress/kendo-react-data-tools'

import Grid from '~/components/molecules/KendoGrid'
import HeaderGrid from '~/components/molecules/HeaderGrid'
import Pagination from '~/components/molecules/Pagination'
import ListingPage from '~/components/molecules/ListingPage'

import { IGridProps } from './types'
import { WrapperGrid, WrapperPager } from './style'

const MasterGrid = (props:IGridProps) => {
  const {
    data,
    total,
    group,
    option,
    pageable,
    dataState,
    gridWidth,
    gridColumn,
    gridHeight,
    filterable,
    selectable,
    optionText,
    onCodeClick,
    headerTitle,
    reorderable,
    expandField,
    onEditClick,
    onPrintClick,
    onPageChange,
    onSortChange,
    onDeleteClick,
    onExpandChange,
    optionValueKey,
    leftButtonLabel,
    rightButtonLabel,
    onColumnReorder,
    onClickLeftButton,
    onSelectionChange,
    onDataStateChange,
    onClickRightButton,
    onHeaderSelectionChange,
  } = props

  const Pager:React.FC<PagerProps> = (pagerProps:PagerProps) => (
    <WrapperPager>
      <ListingPage {...pagerProps} />
      <Pagination {...pagerProps} />
    </WrapperPager>
  )

  return (
    <WrapperGrid>
      <HeaderGrid
        option={option}
        title={headerTitle}
        optionText={optionText}
        leftButtonLabel={leftButtonLabel}
        optionValueKey={optionValueKey}
        rightButtonLabel={rightButtonLabel}
        onClickLeftButton={onClickLeftButton}
        onClickRightButton={onClickRightButton}
      />
      <Grid
        {...props}
        data={data}
        total={total}
        group={group}
        pager={Pager}
        {...dataState}
        pageable={pageable}
        id="m_grid_all_data"
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        gridColumn={gridColumn}
        filterable={filterable}
        selectable={selectable}
        reorderable={reorderable}
        expandField={expandField}
        onCodeClick={onCodeClick}
        onEditClick={onEditClick}
        onPrintClick={onPrintClick}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
        onDeleteClick={onDeleteClick}
        onExpandChange={onExpandChange}
        onColumnReorder={onColumnReorder}
        onSelectionChange={onSelectionChange}
        onDataStateChange={onDataStateChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
      />
    </WrapperGrid>
  )
}

export default memo(MasterGrid)
