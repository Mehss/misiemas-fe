import React, { memo } from 'react'

import { Box, Button } from '@mui/material'

import { fontSize } from '~/styles/theme'

interface Props {
  buttonLink?: string
  buttonText?: string
  content?: string
  img: string
  title?: string
}

const StateMessage = ({
  buttonLink,
  buttonText,
  content,
  img,
  title
}: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100%"
    textAlign="center"
  >
    <img alt="" src={img} />
    {title && (
      <Box mb={0} mt={9} px={4}>
        <Box fontWeight="bold" fontSize={fontSize[28]}>
          {title}
        </Box>
      </Box>
    )}
    {content && (
      <Box px={4}>
        <Box fontSize={fontSize[12]}>{content}</Box>
      </Box>
    )}
    {buttonText && (
      <Box mt={8}>
        <Button
          data-testid="not-authorized-btn"
          href={buttonLink}
          target="_self"
          variant="contained"
          color="secondary"
        >
          {buttonText}
        </Button>
      </Box>
    )}
  </Box>
)

export default memo(StateMessage)
