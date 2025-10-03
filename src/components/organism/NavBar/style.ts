import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const NavbarContainer = styled.div`
  background: linear-gradient(180deg, #b89c30 90%, #000000ff 90%);
  width: 100%;
  height: 14vh;
  margin-bottom: 1%;
  border-radius: 1vmin;
  border-width: 0.1em;
  display: grid;
  grid-template-columns: 40vw auto;
`

export const NavbarWrapperLeft = styled.div<IProps>`
  height: 100%;
  flex-direction: ${({ custom }) => (custom ? 'row' : undefined)};
`

export const NavbarWrapperRight = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 1vh;
`

export const NavbarWrapperRights = styled(NavbarWrapperRight)`
  top: 40%;
  width: 20%;
  justify-content: space-evenly;
`

export const NavbarTitle = styled.p<IProps>`
  color: ${colors.white};
  text-align: left;
  font-weight: 800;
  margin-left: 2%;
  float: ${({ custom }) => (custom ? 'right' : undefined)};
  width: ${({ custom }) => (custom ? '91%' : '100%')};
  @media only screen and (max-width: 1280px) {
    font-size: 1.3vw !important;
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

export const NavbarSubtitle = styled.div<IProps>`
  color: ${colors.white};
  text-align: left;
  font-weight: 600;
  margin-left: 2%;
  display: flex;
  float: ${({ custom }) => (custom ? 'right' : undefined)};
  width: ${({ custom }) => (custom ? '91%' : '100%')};
  @media only screen and (max-width: 1280px) {
    font-size: 1vw !important;
  }
  @media (min-width: 800px) {
    font-size: 0.9vw;
  }
  @media (min-width: 1360px) {
    font-size: 0.9vw;
  }
  @media (min-width: 1440px) {
    font-size: 0.9vw;
  }
  @media (min-width: 1600px) {
    font-size: 0.9vw;
  }
  @media (min-width: 1920px) {
    font-size: 0.9vw;
  }
`

export const NavbarImage = styled.img`
  height: 5vh;
  margin-top: 3vh;
  margin-right: 2vh
`

export const NavbarColumn = styled.div`
  height: 100%;
  max-width: 50%;
  flex-direction: column;
  justify-content: space-around;
`

export const NavbarIcon = styled.img`
  left: 0;
  cursor: pointer;
  @media (min-width: 800px) {
    width: 1vw;
    height: auto;
  }
  @media (min-width: 1360px) {
    width: 1vw;
    height: auto;
  }
  @media (min-width: 1440px) {
    width: 1vw;
    height: auto;
  }
  @media (min-width: 1600px) {
    width: 1vw;
    height: auto;
  }
  @media (min-width: 1920px) {
    width: 1vw;
    height: auto;
  }
`

export const NavbarButton = styled.button`
  color: ${colors.white};
  font-weight: 600;
  margin-left: 0.25em;
  left: 25%;
  background: transparent;
  display: inline;
  outline: none;
  border: none;
  cursor: pointer;
  @media (min-width: 800px) {
    font-size: 1vw;
  }
  @media (min-width: 1360px) {
    font-size: 1vw;
  }
  @media (min-width: 1440px) {
    font-size: 1vw;
  }
  @media (min-width: 1600px) {
    font-size: 1vw;
  }
  @media (min-width: 1920px) {
    font-size: 1vw;
  }
`

export const NavbarBack = styled.img`
  width: auto;
  cursor: pointer;
  float: left;
  padding-left: 1.25em;
  transform: translateY(40%);
  margin: auto 0;
  justify-content: center;
  height: 3vw;
`
