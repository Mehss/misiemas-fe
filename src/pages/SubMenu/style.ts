import styled from 'styled-components'

import { colors } from '~/styles/theme'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1.5%;
  border-radius: 1em;
  background-color: ${colors.white};
`

export const Row = styled.div`
  width: 100%;
`

export const Title = styled.p`
  color: ${colors.white};
  font-weight: 600;
  width: 80%;
  float: left;
  margin-top: 0;
  @media (min-width: 800px) {
    font-size: 1.2vw;
  }
  @media (min-width: 1360px) {
    font-size: 1.2vw;
  }
  @media (min-width: 1440px) {
    font-size: 1.2vw;
  }
  @media (min-width: 1600px) {
    font-size: 1.2vw;
  }
  @media (min-width: 1920px) {
    font-size: 1.2vw;
  }
`

export const CategoryWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 1em;
`

export const CategoryList = styled.li`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #acb0c3;
  margin: 0.15em 1em;
  width: 10vw;
  &:hover {
    cursor: pointer;
    background: #acb0c3;
    color: #ffffff !important;
  }
`

export const CategoryIcon = styled.img`
  width: 4.23vw;
  height: auto;
`

export const CategoryName = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: -1em;
  font-size: 1.5vmin;
`
