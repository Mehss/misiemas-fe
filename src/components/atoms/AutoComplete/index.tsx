/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

import _ from 'lodash'
import * as React from 'react'
import { TextField } from '@mui/material'

import { colors } from '~/styles/theme'
import Icon from '~/components/atoms/Icon'
import Text from '~/components/atoms/Text'

import {
  Row,
  Form,
  Helper,
  Column,
  Autocomplete,
} from './style'
import { IAutoCompleteProps, IValueObject } from './types'

const AutoComplete: React.FC<IAutoCompleteProps> = (props:IAutoCompleteProps) => {
  const {
    field,
    types,
    sizes,
    value,
    errors,
    options,
    disabled,
    onChange,
    helper,
    optionText,
    placeholder,
    optionValueKey,
  } = props

  const optionValue = options
    ? options.find((e) => e[optionValueKey] === (typeof value === 'object'
      ? (value ? value[optionValueKey] : value) : value)) : {}

  const AssertionType = (data: IValueObject) => data
  return (
    <Form>
      <Column>
        <Autocomplete
          types={types}
          sizes={sizes}
          disablePortal
          disabled={disabled}
          onChange={onChange}
          id="m_comp_autocomplete"
          value={optionValue || null}
          loading={options?.length === 0}
          popupIcon={<Icon.PopUpArrowIcon />}
          options={_.orderBy(options, [optionText], ['asc'])}
          errors={(errors && field) ? errors[field] !== undefined : false}
          getOptionLabel={(opt) => {
            const newOption = AssertionType(opt as IValueObject)
            return newOption[optionText]?.toString()
          }}
          // loadingText={<Loader size={20} color={colors.neutral.n500} />}
          renderInput={(params) => <TextField variant="outlined" placeholder={placeholder} {...params} />}
        />
        {helper && (
        <Helper>
          {field && errors && errors[field] ? (
            <Row>
              <Icon.ValidationErrorIcon />
              <Text types="small" color={colors.reds.r300}>{errors[field].message}</Text>
            </Row>
          ) : (
            value && value !== '' && (
            <Row>
              <Icon.ValidationValidIcon />
              <Text types="small" color={colors.greens.g400}>Field validation is successful.</Text>
            </Row>
            )
          )}
        </Helper>
        )}
      </Column>
    </Form>
  )
}

AutoComplete.defaultProps = ({
  helper: true,
})
export default AutoComplete
