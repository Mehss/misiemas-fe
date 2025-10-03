import { memo } from 'react'
import React from 'react'

import Box from '@mui/material/Box'

import { colors } from '~/styles/theme'
import { fontSize as themeFontSize } from '~/styles/theme'

import useStyle from './style'

interface Props {
  disabled?: boolean
  fontColor?: string
  fontSize?: string | number
  fontWeight?: string
  required?: boolean
  text: string | number
}
const Label = ({
  disabled = false,
  fontColor = colors.neutral.n100,
  fontSize = themeFontSize[12],
  fontWeight = '',
  required,
  text,
}: Props) => {
  const { classes } = useStyle({ disabled, fontColor })

  return (
    <Box className={classes.text}>
      <Box data-testid="label-text" fontSize={fontSize} fontWeight={fontWeight}>
        {text}
        {required && (
          <span className={classes.required} data-testid="required">
            *
          </span>
        )}
      </Box>
    </Box>
  )
}

export default memo(Label)
