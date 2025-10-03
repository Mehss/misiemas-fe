import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const Wrapper = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Box = styled.div`
  flex-direction: column;
  width: 81%;
  height: 96vh;
  margin: 1%;
`

export const Row = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: ${({ custom }) => (custom ? '4vh' : '5vh')};
  margin-bottom: ${({ custom }) => (custom ? 0 : '1%')};
`

export const Container = styled.div<IProps>`
  background-color: ${colors.white};
  border-radius: 1vmin;
  border-width: 0.1vmin;
  height: 100%;
  width: 100%;
  padding: 3vmin;
  @media only screen and (max-width: 1280px) {
    width: 100%;
    height: 75vh;
  }
`

export const Select = styled.div`
  top: 0;
  @media only screen and (max-width: 500px) {
    margin-top: -7.7vh !important;
    height: 6vmin;
  }
`
export const SelectActive = styled.div`
  top: 0;
  @media only screen and (max-width: 500px) {
    margin-top: -7.7vh !important;
    height: 6vmin;
  }
`

export const Dropdown = styled.select`
  width: 7.5vw;
  height: 5vh;
  padding: 0 0.5vmin;
  border-radius: 0.5vmin;
  border: 0.25px solid lightgrey;
  background-color: ${colors.white};
  cursor: pointer;
  font-size: 1.5vmin;
`

export const Title = styled.div`
  font-weight: 600;
  color: ${colors.black};
  @media only screen and (max-width: 1280px) {
    font-size: 1.2vw !important;
  }
  @media (min-width: 800px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1360px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1440px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1600px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1920px) {
    font-size: 1.1vw;
  }
`

export const Col2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: -5vh;
  gap: 0.5vw;
`
