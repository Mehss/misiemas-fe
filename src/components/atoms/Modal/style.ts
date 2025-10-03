import { styled } from '@mui/system'

import { colors } from '~/styles/theme'

export const Overlay = styled('div')`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Wrapper = styled('div')`
  display: block;
  border-radius: 1rem;
  background: ${colors.white};
  width: 25%;
  padding: 1rem;
  @media only screen and (max-width: 1280px) {
    width: 35%;
    height: 80%;
  }
  @media (min-width: 800px) {
    height: 80%;
  }
  @media (min-width: 1360px) {
    height: 80%;
  }
  @media (min-width: 1440px) {
    height: 80%;
  }
  @media (min-width: 1600px) {
    height: 80%;
  }
  @media (min-width: 1920px) {
    height: 80%;
  }
`