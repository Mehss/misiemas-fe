import React, { memo } from 'react'

import { Box } from '@mui/material'

import useCustom from './hooks'

const SSOLogin = () => {
  useCustom()

  return (
    <Box px={7} py={4}>
      We&apos;ll be redirecting you in a few seconds...
    </Box>
  )
}

export default memo(SSOLogin)
