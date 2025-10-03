/* eslint-disable no-nested-ternary */
import React, { memo } from 'react'

import { TextField, Wrapper } from './style'
import { IInputProps } from './types'

const TextInput: React.FC<IInputProps> = (props: IInputProps) => {
  const {
    errors, sizes, onChange, width,
  } = props

  return (
    <Wrapper width={width}>
      <TextField
        fullWidth
        type="number"
        types="none"
        sizes={sizes}
        errors={errors}
        variant="outlined"
        onChange={onChange}
      />
    </Wrapper>
  )
}

TextInput.defaultProps = {
  sizes: 'medium',
}
export default memo(TextInput)
