/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

// import { useAppDispatch } from '@stores/redux-hooks'
import React from 'react'
import TextInput from '~/components/atoms/TextInput'

import { TFilterProps } from './types'
// import { setRunFilter } from './_redux/grid-filter.action'

const FilterCell:React.FC<TFilterProps> = (props: TFilterProps) => {
  const {
    onChange, field, value, filterType,
  } = props
  // const dispatch = useAppDispatch()

  const onFilterChange = (event: any) => {
    onChange({
      operator: 'contains',
      value: event?.target?.value,
      syntheticEvent: event?.syntheticEvent,
    })
    // dispatch(setRunFilter(true))
  }

  // const onFilterDateChange = (event: any) => {
  //   onChange({
  //     operator: 'contains',
  //     value: event,
  //     syntheticEvent: event?.syntheticEvent,
  //   })
  //   dispatch(setRunFilter(true))
  // }

  const onKeyPress = (e: any) => {
    // if (e.charCode === 13) { dispatch(setRunFilter(true)) }
  }

  const onKeyDown = (e: any) => {
    // if (e.keyCode === 9) { dispatch(setRunFilter(true)) }
  }

  return (
    <div>
      <TextInput
        types="none"
        sizes="medium"
        value={value || ''}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onChange={onFilterChange}
        id={`m_grid_filter_${field}`}
        type={filterType === 'numeric' ? 'number' : filterType}
      />
    </div>
  )
}

export default FilterCell
