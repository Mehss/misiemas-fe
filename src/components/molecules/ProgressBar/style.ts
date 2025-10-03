// import { makeStyles } from '@mui/styles'
// import { Theme } from '@mui/material/styles'
import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const TitleContent = styled.div`
  width: 100%;
  height: 1.6vh;
`

export const DivLeft = styled.div`
  width: 50%;
  float: left;
  font-size: 0.75vw;
  font-weight: 600;
  color: #212E66;
  text-align: left;
  @media only screen and (max-width: 1280px) {
    font-size: 0.9vw;
  }
`

export const DivRight = styled(DivLeft)`
  float: right;
  text-align: right;
`

export const ContentLeft = styled(DivLeft)`
  color: #7A7A7A;
`

export const ContentRight = styled(DivRight)`
  color: #7A7A7A;
`

export const ContentBottom = styled.div`
  font-size: 0.75vw;
  font-weight: 600;
  color: #7A7A7A;
  margin-top: 1rem;
  @media only screen and (max-width: 1280px) {
    font-size: 0.9vw;
  }
`

export const DivParent = styled.div<IProps>`
  height: ${props => props.height};
  background-color: whitesmoke;
  width: 100%;
  margin: 50;
`

export const DivChild = styled.div<IProps>`
  height: 100%;
  width: ${props => props.width};
  background-color: ${props => props.bgColor || colors.grey};
  border-radius: ${props => props.borderRad};
`

export const TextContent = styled.span`
  width: 100%;
`

export const CustomContent = styled.div`
  width: 100%;
  z-index: 9999;
  color: #212E66;
  font-size: 0.75vw;
  font-weight: 600;
  text-align: center;
  top: 58.575%;
  left: -18.5%;
  position: absolute;
  box-sizing: content-box;
  @media only screen and (max-width: 1280px) {
    font-size: 0.9vw;
  }
`
