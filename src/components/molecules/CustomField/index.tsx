import PropTypes from 'prop-types'
import React from 'react'

import { Box } from '@mui/material'

import { InputBase } from './style'

const CustomField = ({
  error,
  name,
  onChange,
  placeholder,
  touch,
  type,
  value,
}) => {
  let isError = false

  if (error && touch) {
    isError = true
  }
  return (
    <Box>
      <Box width={1}>
        <InputBase
          name={name}
          type={type}
          value={value}
          error={isError}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Box>
      <Box width={1} textAlign="left">
        {error && touch && <span>{error}</span>}
      </Box>
    </Box>
  )
}

CustomField.defaultProps = {
  error: '',
  placeholder: '',
  touch: false,
}

CustomField.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  touch: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default CustomField
