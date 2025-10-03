import React from 'react'
import { memo } from 'react'


import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'

import LabelControl from '../LabelControl'

import { BaseProps, fieldToTextField } from './helper'
import { Container } from './style'

interface CustomTextFieldProps extends BaseProps {
  children: React.ReactNode
  className?: string
  'data-testid': string
  'data-testid-helpertext'?: string
  isRequired?: boolean
  labelText?: string
}

const IconLabel = (labelText: string) => {
  if (labelText == "Email") {
    return (
      <InputAdornment position="start">
        <PersonIcon style={{ fontSize: '2vmin' }} />
      </InputAdornment>
    )
  }
  if (labelText == "Password") {
    return (
      <InputAdornment position="start">
        <LockIcon style={{ fontSize: '2vmin' }} />
      </InputAdornment>
    )
  }
  return null
}

const CustomTextField = ({
  children,
  className,
  'data-testid-helpertext': dataTestIdHelperText = '',
  'data-testid': dataTestId,
  isRequired,
  labelText,
  ...props
}: CustomTextFieldProps) => {
  return (
    <Container>
      <LabelControl
        renderInput={
          <TextField
            sx={{
              "& fieldset": { border: 'none' },
            }}
            FormHelperTextProps={
              {
                'data-testid': dataTestIdHelperText,
              } as any
            }
            inputProps={{
              'data-testid': dataTestId,
            }}
            className={`${className} main-textfield`}
            size="small"
            {...fieldToTextField(props)}
            InputProps={{
              startAdornment: (
                IconLabel(labelText)
              ),
              style: {
                borderBottom: '1px solid #DEE0E5'
              },
            }}
          >
            {children}
          </TextField>
        }
        required={isRequired}
        text={labelText}
      />
    </Container>
  )
}
export default memo(CustomTextField)
