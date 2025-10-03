import React, { memo } from 'react'

import Box from '@mui/material/Box'

import { colors } from '~/styles/theme'
import { fontSize as themeFontSize } from '~/styles/theme'

import FormLabel from '../Label'

interface Props {
  alignItems?: 'center' | 'flex-start'
  disabled?: boolean
  fontColor?: string
  fontSize?: string
  renderInput: React.ReactNode
  required?: boolean
  text?: string
}

const LabelControl = ({
  alignItems = 'flex-start',
  disabled = false,
  fontColor = colors.neutral.n0,
  fontSize = themeFontSize[12],
  renderInput,
  required = false,
  text = '',
}: Props) => {
  return (
    <Box
      alignItems={alignItems}
      data-testid="wrapper-label-control"
      display="flex"
      flexDirection="column"
    >
      <Box mb={1}>
        {text && (
          <FormLabel
            disabled={disabled}
            fontColor={fontColor}
            fontSize={fontSize}
            fontWeight="bold"
            required={required}
            text={text}
          />
        )}
      </Box>
      <Box width="100%">{renderInput}</Box>
    </Box>
  )
}

export default memo(LabelControl)
