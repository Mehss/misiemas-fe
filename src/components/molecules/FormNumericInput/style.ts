import { styled } from '@mui/system'

import { height } from '~/styles/theme'

export const Helper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: height.xsmall * 1.25,
})

export const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const Form = styled('div')({
  width: '100%',
})

export const Row = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
})
