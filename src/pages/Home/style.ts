import styled from 'styled-components'

import { colors } from '~/styles/theme'
interface IProps {
  signout?: boolean
  list?: boolean
  close?: boolean
}

export const Container = styled.div`
  background: url('/public/images/home-background.png');
  height: 100vh;
  background-position: unset;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`
export const ColomnLeft = styled.div`
  color: rgb(255, 255, 255);
  padding: 3vh 0px 0 5vw;
`
export const ColomnRight = styled.div`
  display: grid;
  justify-content: end;
`

export const DesignText = styled.div`
  color: #ffff;
  font-size: 1.5vmin;
`

export const DesignBox = styled.div`
  margin-top: 1vh;
  width: 9vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

export const ImagePMS = styled.img`
`
export const WelcomeText = styled.div`
  color: #FFFFFF;
  font-size: 2.5vmin;
`
export const LiveText = styled.div`
  font-size: 3.5vmin;
  font-weight: bold;
`
export const LpmsText = styled.div`
  font-size: 3.5vmin;
  font-weight: bold;
  margin-bottom: 5vh;
`
export const EnvText = styled.div`
  margin-bottom: 3vh;
  color: #ffffff;
  font-size: 2.2vmin;
`

export const ListContainer = styled.div`
  grid-template-rows: auto auto;
  display: grid;
  row-gap: 3vmin;
  justify-content: start;
  align-content: center;
  margin-bottom: 2vh;
`
export const ListContainerColomn = styled.div`
  grid-template-columns: auto auto;
  display: grid;
  column-gap: 3vmin;
`
export const ListContainerBox = styled.div`
  width: 16vw;
  height: 13vh;
  border-radius: 10px;
  background: #ffffffbf;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2vmin;
  &:hover {
    border: 0.7vmin solid #7dbe32;
  }
`
export const ImageLPMS = styled.img`
  width: 14vw;
`

export const ImageTripatra = styled.img`
  margin: 0vh 4vw 0 0;
  width: 10vw;
  height: 20vh;
`

export const Header = styled.img`
  width: 45vw;
`

export const SidebarInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 10vw;
  margin-bottom: 4vh;
  align-items: center;
  gap: 1vw;
  font-size: 1.5vmin !important;
  min-width: 175px;
`

export const SidebarUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  float: left;
  cursor: pointer;
`

export const SidebarUserSignature = styled.p`
  background: #fff;
  border-radius: 4vmin;
  color: #000;
  font-weight: 700;
  padding: 1.5vmin;
  height: 5vh;
`

export const SidebarUserTitle = styled.p`
  color: ${colors.white};
  font-weight: 600;
  text-align: left;
  margin-left: 1rem;
  float: right;
  span {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const SidebarIcon = styled.img<IProps>`
  cursor: pointer;
  float: ${({ signout }) => (signout ? 'right' : 'none')};
  margin: ${({ signout }) => (signout ? 'auto' : '0 0.4em 0 0.1em')};
`

export const ListContainerInternal = styled.div`
  margin-bottom: 13vh;
`

export const InfoLearning = styled.div`
  display: flex;
  gap: 1vmin;
  margin-bottom: 7vh;
  color: #d0b758;
  font-size: 1.8vmin;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    margin-bottom: 5vh;
  }
`
export const TextLearn = styled.div``
