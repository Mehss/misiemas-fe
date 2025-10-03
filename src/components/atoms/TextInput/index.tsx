/* eslint-disable no-nested-ternary */
import React, { memo } from 'react'
import { InputAdornment } from '@mui/material'

import { TextField, Wrapper } from './style'
import { IInputProps } from './types'

const TextInput: React.FC<IInputProps> = (props: IInputProps) => {
  const {
    icon, types, errors, sizes, onChange,
  } = props

  return (
    <Wrapper>
      {types === 'preffix' ? (
        <TextField
          fullWidth
          sizes={sizes}
          types={types}
          errors={errors}
          variant="outlined"
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            ),
          }}
        />
      ) : types === 'suffix' ? (
        <TextField
          fullWidth
          sizes={sizes}
          types={types}
          errors={errors}
          variant="outlined"
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {icon}
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextField
          fullWidth
          sizes={sizes}
          types={types}
          errors={errors}
          variant="outlined"
          onChange={onChange}
        />
      )}
    </Wrapper>
  )
}

TextInput.defaultProps = {
  types: 'none',
  sizes: 'medium',
}
export default memo(TextInput)
