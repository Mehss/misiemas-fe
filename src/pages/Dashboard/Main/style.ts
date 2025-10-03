import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const CardList = styled.ul`
  list-style-type: none;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto;
  height: 65vh;
  width: auto;
  padding: 0;
  gap: 3vmin;
  @media only screen and (max-width: 1280px) {
    height: 67.5vh;
  }
  @media (min-width: 1360px) {
    height: 66vh;
  }
  margin-top: 2vh;
`

export const CardWrapper = styled.li``

export const CardContainer = styled.div`
  background: #f0f0f0 url('/public/images/logo-misi-emas-white.png') no-repeat center center;
  border: 0.1em #e8f0fc solid;
  border-radius: 1vmin;
  // margin-bottom: 2.5vh;
  // margin-right: 2.5vw;
  height: 20vh;
  width: 20vw;
  padding: 2vmin;
  &:hover {
    cursor: pointer;
    background: ${colors.white};
  }
  @media only screen and (max-width: 1280px) {
    height: 30vh;
  }
`

export const CardLogo = styled.img`
  height: 3.5vh;
  width: auto;
  margin: auto;
  margin-left: 0;
`
export const CardActive = styled.div`
  background: linear-gradient(0deg, #10ab3c, #10ab3c),
    linear-gradient(0deg, #69e08b, #69e08b);
  width: 2.5vmin;
  height: 2.5vmin;
  border-radius: 10vmin;
  gap: 1vmin;
  border: 0.3vmin solid #69e08b;
  box-shadow: 0 0.4vmin 0.4vmin 0 #00000014;
`

export const CardInactive = styled.div`
  background: #B20A0A;
  width: 2.5vmin;
  height: 2.5vmin;
  border-radius: 10vmin;
  gap: 1vmin;
  border: 0.3vmin solid #b27d0a;
  box-shadow: 0 0.4vmin 0.4vmin 0 #00000014;
`

export const CardTimeRemaining = styled.div<IProps>`
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: max-content;
  padding-right: 1.5vw;
  @media only screen and (max-width: 1280px) {
    margin-top: 0.5em;
  }
`

export const CardIcon = styled.img`
  height: 3vh;
  width: auto;
  margin: auto;
  margin-right: 0.75em;
  margin-top: -0.25em;
  float: left;
  @media only screen and (max-width: 1280px) {
    height: 3.5vh !important;
    margin-top: -0.5em;
  }
`

export const CardText = styled.p<IProps>`
  color: ${(props) => props.textColor};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 0;
  width: 100%;
  font-size: 1.5vmin;
`

export const CardTitle = styled.p`
  color: #001f4d;
  font-size: 1.8vmin;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: auto;
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardText2 = styled.p`
  color: #3a4569;
  font-weight: 400;
  text-align: left;
  align-items: center;
  justify-content: center;
  max-height: 1vh;
  width: 100%;
  font-size: 1.5vmin;
`
