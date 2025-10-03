/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import moment from 'moment'
import React, { memo } from 'react'

import Icon from '~/components/atoms/Icon'
import { colors } from '~/styles/theme'

import {
  Row,
  CodeCell,
  GridCell,
  IconWrapper,
} from './style'
import { IGridCellProps } from './types'

const CustomCell: React.FC<IGridCellProps> = (props: IGridCellProps) => {
  const {
    id,
    field,
    rendering,
    dataItem,
    dataIndex,
    onEditClick,
    onCodeClick,
    onPrintClick,
    onDeleteClick,
  } = props

  const onPrint = () => {
    if (onPrintClick) {
      onPrintClick(props)
    }
  }
  const onEdit = () => {
    if (onEditClick) {
      onEditClick(props)
    }
  }
  const onDelete = () => {
    if (onDeleteClick) {
      onDeleteClick(props)
    }
  }
  const onCode = () => {
    if (onCodeClick) {
      onCodeClick(props)
    }
  }

  switch (rendering?.toLowerCase()) {
    case 'action':
      return (
        <Row>
          <IconWrapper onClick={onPrint}>
            <Icon.DeleteIcon />
          </IconWrapper>
          <IconWrapper onClick={onEdit}>
            <Icon.DeleteIcon />
          </IconWrapper>
          <IconWrapper onClick={onDelete}>
            <Icon.DeleteIcon />
          </IconWrapper>
        </Row>
      )
    case 'code':
      return (
        <CodeCell color={colors.blues.b400} id={id} onClick={onCode}>
          {field && dataItem[field]}
        </CodeCell>
      )
    case 'number':
      return (
        <GridCell id={id}>
          number
        </GridCell>
      )
    case 'date':
      return (
        <GridCell id={id}>
          {field && moment(dataItem[field]).format('DD MMMM YYYY')}
        </GridCell>
      )
    default:
      return (
        <GridCell id={`m_grid_cell_${field}_${dataIndex}`}>
          {field && dataItem[field]}
        </GridCell>
      )
  }
}

export default memo(CustomCell)
