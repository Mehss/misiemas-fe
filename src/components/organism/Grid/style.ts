import { styled } from '@mui/system'

import {
  height,
  padding,
  radius,
  boxShadow,
} from '~/styles/theme'

export const WrapperGrid = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: radius.xsmall * 2,
  padding: `0px ${padding.xlarge * 1.2}px`,
  boxShadow: `${boxShadow.xsmall * 0.5}px
  ${boxShadow.xsmall}px
  ${boxShadow.medium * 0.8}px rgba(0, 109, 145, 0.1)`,
})

export const WrapperPager = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: height.xsmall * 2.4,
  justifyContent: 'space-between',
  padding: `${padding.xsmall * 4}px ${padding.medium * 2.4}px`,
})
