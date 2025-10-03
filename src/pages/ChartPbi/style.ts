import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
`

export const Column = styled.div<IProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ left }) => left ? 'flex-start' : 'flex-end'};
  flex: ${({ left }) => left ? 3 : 1};
`

export const Work = styled.div`
  flex: 3;
  color: #202020;
  font-size: 0.9vw;
  @media only screen and (max-width: 1280px) {
    font-size: 1vw;
  }
`

export const Location = styled.div`
  flex: 3;
  color: #202020;
  font-size: 0.9vw;
  @media only screen and (max-width: 1280px) {
    font-size: 1vw;
  }
`

export const Calendar = styled.div`
`

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 93%;
  margin-top: 1rem;
  @media only screen and (max-width: 1280px) {
    height: 94.25%!important;
  }
  @media (min-width: 800px) {
    height: 91%;
  }
  @media (min-width: 1360px) {
    height: 91.5%;
  }
  @media (min-width: 1440px) {
    height: 93%;
  }
  @media (min-width: 1600px) {
    height: 93%;
  }
  @media (min-width: 1920px) {
    height: 95%;
  }
`

export const ContentLeft = styled.div`
  flex: 1.5;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 1em;
  padding: 1.5%;
  height: 100%;
`

export const TextNone = styled.div`
  color: #424242;
  font-size: 0.9vw;
  font-weight: 600;
  @media only screen and (max-width: 1280px) {
    font-size: 1vw;
  }
`

export const Context = styled.div`
  color: #0E1B42;
  font-size: 1.1vw;
  font-weight: 600;
  @media only screen and (max-width: 1280px) {
    font-size: 1.3vw;
  }
`

export const Contexts = styled.div`
  color: #0E1B42;
  font-size: 0.9vw;
  font-weight: 600;
  @media only screen and (max-width: 1280px) {
    font-size: 1.1vw!important;
    margin-top: 2rem!important;
  }
`

export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  margin: 1em 0;
  padding: 1em;
  height: 15vh;
`

export const Box = styled.div`
  width: auto;
  height: 9vh;
  background-color: #212E66;
  color: ${colors.white};
  border-radius: 8px;
  font-size: 2.5vw;
  font-weight: 800;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-right: 1rem;
  padding: 0 0.5rem;
  padding-top: 0.25rem;
  @media only screen and (max-width: 1280px) {
    padding-top: 1.25rem;
  }
`

export const DaysText = styled.div`
  color: #212E66;
  font-size: 2vw;
  font-weight: 500;
`

export const PlanText1 = styled.div`
  color: #212E66;
  font-size: 0.75vw;
  font-weight: 600;
  @media only screen and (max-width: 1280px) {
    font-size: 0.85vw;
  }
`

export const PlanText2 = styled.div`
  color: #212E66;
  font-size: 0.75vw;
  font-weight: 400;
  @media only screen and (max-width: 1280px) {
    font-size: 0.85vw;
  }
`

export const Break = styled.div`
  border-left: 3px solid #F2F2F2;
  align-self: stretch;
  height: auto;
  width: 1%;
  margin-left: 2%;
  margin-right: 2%;
`

export const Title = styled.div`
  float: right;
  width: 40%;
  position: relative;
  ::before {
    width: 3px;
    position: absolute;
    border-left: 3px solid transparent;
    background: linear-gradient(to left, #4ca2cd, #67B26F);
  }
`

export const Line1 = styled.hr`
  border: 1px solid #F2F2F2;
  margin: 0.5rem 0;
  margin-top: -0.75rem;
  @media only screen and (max-width: 1280px) {
    border: none;
    height: 3rem;
  }
`

export const Line2 = styled.hr`
  border: 1px solid #F2F2F2;
  margin: 0.5rem 0;
`

export const Doughnut = styled.div`
  /* margin: 0.5vh 0;
  height: 32.5%; */
  display: inline;
  position: relative;
  @media (min-width: 800px) {
    margin: 0.5vh 0;
    height: 23vh;
    /* position: absolute;
    top: 60%;
    width: 25%; */
  }
  @media (min-width: 1360px) {
    margin: 0.5vh 0;
    height: 23vh;
    position: relative;
  }
  @media (min-width: 1440px) {
    margin: 0.5vh 0;
    height: 23vh;
    position: relative;
  }
  @media (min-width: 1600px) {
    margin: 0.5vh 0;
    height: 32.5%;
    position: relative;
  }
  @media (min-width: 1920px) {
    margin: 0.5vh 0;
    height: 32.5%;
    position: relative;
  }
`

export const DoughnutWrapperText = styled.div`
  position: absolute;
  text-align: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  line-height: 80%;
`

export const DoughnutInnerText1 = styled.p`
  color: #212E66;
  font-size: 1.5vw;
  font-weight: 700;
`

export const DoughnutInnerText2 = styled.p`
  color: #212E66;
  font-size: 1.1vw;
  font-weight: 700;
`

export const ContentRight = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 1em;
  margin-left: 2%;
  padding: 1.5%;
  background-color: ${colors.white};
`

export const DivChart = styled.div`
  width: 100%;
  height: 30vh;
  @media only screen and (max-width: 1280px) {
    height: 32.5vh;
    width: 99.5%;
  }
`

export const ChartTitle = styled.div`
  color: #0E1B42;
  font-size: 1.1vw;
  font-weight: 600;
  @media only screen and (max-width: 1280px) {
    font-size: 1.2vw;
  }
`

export const ChartSpace = styled.div`
  margin-bottom: 0.5em;
`

export const ChartGraph = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`

export const Image = styled.img`
  @media only screen and (width: 1280px) {
    height: 80%;
  }
  @media (min-width: 800px) {
    height: 90%;
  }
  @media (min-width: 1360px) {
    height: 90%;
  }
  @media (min-width: 1440px) {
    height: 90%;
  }
  @media (min-width: 1600px) {
    height: 90%;
  }
  @media (min-width: 1920px) {
    height: 90%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 100%;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
`