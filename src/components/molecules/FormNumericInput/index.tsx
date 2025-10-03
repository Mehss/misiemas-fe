import React from 'react'

import { Controller } from 'react-hook-form'

import Icon from '~/components/atoms/Icon'
import NumericInput from '~/components/atoms/NumericInput'
import Text from '~/components/atoms/Text'
import { colors } from '~/styles/theme'

import { Row, Form, Helper, Column } from './style'
import { IFormInputProps } from './types'

const FormInput: React.FC<IFormInputProps> = (props: IFormInputProps) => {
  const {
    title,
    field,
    errors,
    helper,
    control,
    istooltip,
    isoptional,
    isrequired,
    optionalLabel,
  } = props
  return (
    <Controller
      name={field}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Form>
          <Column>
            <Row>
              {isrequired && (
                <Text types="label" color={colors.reds.r300}>
                  *
                </Text>
              )}
              <Text types="label" color={colors.neutral.n400}>
                {title}
              </Text>
              &nbsp;
              {istooltip && <Icon.TooltipIcon color={colors.neutral.n400} />}
              {isoptional && <Text types="small">({optionalLabel})</Text>}
            </Row>
            <NumericInput
              {...props}
              value={value}
              variant="outlined"
              onChange={onChange}
              required={isrequired}
              id="m_comp_form-input"
              errors={errors && field ? errors[field] !== undefined : false}
            />
            {helper && (
              <Helper>
                {field && errors && errors[field] ? (
                  <Row>
                    <Icon.ValidationErrorIcon />
                    <Text types="small" color={colors.reds.r300}>
                      {errors[field].message}
                    </Text>
                  </Row>
                ) : (
                  value !== '' && (
                    <Row>
                      <Icon.ValidationValidIcon />
                      <Text types="small" color={colors.greens.g400}>
                        Field validation is successful.
                      </Text>
                    </Row>
                  )
                )}
              </Helper>
            )}
          </Column>
        </Form>
      )}
    />
  )
}

FormInput.defaultProps = {
  helper: true,
  disabled: false,
  isrequired: true,
  istooltip: false,
}
export default FormInput
