import styled from 'styled-components'

import Button from '~/components/atoms/Button'
import { Modal } from '~/components/atoms/Modal'
import { colors } from '~/styles/theme'

import { IProps } from './types'

export const SidebarWrapper = styled.div`
  background: #b89c30;
  border-radius: 1vmin;
  border-width: 0.1em;
  margin: 1%;
  width: 15%;
  height: 96vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1280px) {
    width: 15.5%;
    height: 96vh;
    margin-right: 0.5%;
  }
`

export const SidebarBox = styled.div`
  background-color: ${colors.white};
  border-radius: 1em;
  width: 100%;
  height: 8vh;
  display: flex;
  vertical-align: middle;
  justify-content: space-evenly;
`

export const SidebarContainerTop = styled.div`
  margin: 10%;
  @media (min-width: 800px) {
    width: 100;
    height: max-content;
    margin-bottom: 1rem;
  }
  @media (min-width: 1360px) {
    width: 100;
    height: max-content;
    margin-bottom: 1rem;
  }
  @media (min-width: 1440px) {
    width: 100;
    height: max-content;
    margin-bottom: 1rem;
  }
  @media (min-width: 1600px) {
    width: 100;
    height: max-content;
    margin-bottom: 1rem;
  }
  @media (min-width: 1920px) {
    width: 100;
    height: max-content;
    margin-bottom: 1rem;
  }
`

export const SidebarContainerMiddle = styled.div`
  border-top: 0.1em solid #d1d1d1;
  margin-bottom: 1em;
  padding: 10%;
  width: 100;
  height: auto;
`

export const SidebarBrands = styled.img`;
  height: 4.5vh;
  margin-bottom: 2vh;
`

export const SidebarIcon = styled.img<IProps>`
  cursor: pointer;
  width: auto !important;
  height: 2.5vh !important;
  float: ${({ signout }) => (signout ? 'right' : 'none')};
  margin: ${({ signout }) => (signout ? 'auto' : '0 0.4em 0 0.1em')};
  @media only screen and (max-width: 1280px) {
    width: auto !important;
    height: 2.5vh !important;
    margin: ${({ signout }) => (signout ? 'auto' : '0 0.4em 0 0.1em')};
  }
  @media (min-width: 800px) {
    width: auto;
    height: 3vh;
  }
  @media (min-width: 1360px) {
    width: auto;
    height: 3vh;
  }
  @media (min-width: 1440px) {
    width: auto;
    height: 3vh;
  }
  @media (min-width: 1600px) {
    width: auto;
    height: 3vh;
  }
  @media (min-width: 1920px) {
    width: auto;
    height: 3vh;
  }
`

export const SidebarNavigation = styled(Button)<{ isselected?: Number }>`
  justify-content: left !important;
  font-weight: 600 !important;
  color: #776621ff !important;
  background-color: #eef1ff !important;
  &:hover {
    background-color: #776621ff !important;
    color: #eef1ff !important;
  }
  width: 12vw !important;
  height: 5vh !important;
  font-size: 2vmin !important;
  margin-bottom: 0.5rem !important;
  padding: 1vmin !important;
  min-width: 1vmin !important;
  border-radius: 0.5vmin !important;
`

export const SidebarContent = styled(Button)<{ isselected?: Number }>`
  /* This is for the buttons in the sidebar that shows the different content */
  /* The selected button is colored blue and has a white background */
  /* The unselected buttons are gray and have a transparent background */
  /* On hover, the background changes to blue and the text changes to white */
  justify-content: left !important;
  font-weight: 600 !important;
  color: ${(props) =>
    props.isselected === 1 ? '#776621ff' : '#D1D1D1'} !important;
  background-color: ${(props) =>
    props.isselected ? '#EEF1FF' : 'transparent'} !important;
  &:hover {
    background-color: #776621ff !important;
    color: #eef1ff !important;
  }
  width: 100% !important;
  height: 5vh !important;
  font-size: 0.6vw !important;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem !important;
  &:first-child {
    margin-bottom: 0 !important;
  }
  @media only screen and (max-width: 900px) {
    font-size: 7px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media (min-width: 800px) {
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1360px) {
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1440px) {
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1600px) {
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1920px) {
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const SidebarCategory = styled.div`
  font-size: 1vw;
  font-weight: 600;
  color: #d1d1d1;
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

export const SidebarContext = styled(Button)<{ isselected?: Number }>`
  justify-content: left !important;
  font-weight: 600 !important;
  color: ${(props) =>
    props.isselected === 1 ? '#FFFFFF' : '#D1D1D1'} !important;
  background-color: ${(props) =>
    props.isselected ? '#7DBE32' : 'transparent'} !important;
  &:hover {
    background-color: #776621ff !important;
  }
  border-bottom-left-radius: unset !important;
  border-bottom-right-radius: unset !important;
  @media (min-width: 800px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
    margin-top: 0.5rem !important;
  }
  @media (min-width: 1360px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
    margin-top: 0.5rem !important;
  }
  @media (min-width: 1440px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
    margin-top: 0.5rem !important;
  }
  @media (min-width: 1600px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
    margin-top: 0.5rem !important;
  }
  @media (min-width: 1920px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
    margin-top: 0.5rem !important;
  }
`

export const SidebarContexts = styled(Button)<{ isselected?: Number }>`
  justify-content: left !important;
  font-weight: 600 !important;
  color: ${(props) =>
    props.isselected === 1 ? '#FFFFFF' : '#212D66'} !important;
  background-color: ${(props) =>
    props.isselected ? '#858DB3' : '#EEF1FF'} !important;
  &:hover {
    background-color: #776621ff !important;
  }
  border-radius: unset !important;
  /* &:last-of-type {
    border-bottom-left-radius: 5px!important;
    border-bottom-right-radius: 5px!important;
  } */
  /* margin-top: 0.5em!important; */
  @media (min-width: 800px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
  }
  @media (min-width: 1360px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
  }
  @media (min-width: 1440px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
  }
  @media (min-width: 1600px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
  }
  @media (min-width: 1920px) {
    width: 100% !important;
    height: 5vh !important;
    font-size: 0.9vw !important;
  }
`

export const SidebarContextss = styled(SidebarContexts)`
  border-bottom-left-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
`

export const SidebarContainerBottom = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10vh;
  margin-top: auto;
  @media only screen and (max-width: 1280px) {
    height: 16vh;
  }
  @media (min-width: 1360px) {
    height: 17vh;
  }
  @media (min-width: 1440px) {
    height: 17vh;
  }
`

export const SidebarContactPerson = styled(Button)`
  background: #7dbe32 !important;
  justify-content: space-between !important;
  width: 80% !important;
  height: 7.5vh !important;
  margin: 0 10% !important;
  @media (min-width: 800px) {
    width: 80% !important;
    height: 7.5vh !important;
    margin: 0 10% !important;
  }
  @media (min-width: 1360px) {
    width: 75% !important;
    height: 7.5vh !important;
    margin: 0 12.5% !important;
  }
  @media (min-width: 1440px) {
    width: 75% !important;
    height: 7.5vh !important;
    margin: 0 12.5% !important;
  }
  @media (min-width: 1600px) {
    width: 75% !important;
    height: 7.5vh !important;
    margin: 0 12.5% !important;
  }
  @media (min-width: 1920px) {
    width: 75% !important;
    height: 7.5vh !important;
    margin: 0 12.5% !important;
  }
`

export const SidebarCPText = styled.a`
  color: ${colors.white};
  font-weight: 800;
  text-align: left;
  float: left;
  line-height: 1.25em;
  margin-left: 0.5rem;
  font-size: 1vw;
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

export const SidebarCPIcon = styled.img`
  width: auto;
  color: #776621ff !important;
  font-weight: 600 !important;
  justify-content: left !important;
  float: right;
  height: 6vh !important;
  @media only screen and (max-width: 1280px) {
    height: 6vh !important;
  }
  @media (min-width: 800px) {
    height: 7.5vh;
  }
  @media (min-width: 1360px) {
    height: 7.5vh;
  }
  @media (min-width: 1440px) {
    height: 7.5vh;
  }
  @media (min-width: 1600px) {
    height: 7.5vh;
  }
  @media (min-width: 1920px) {
    height: 7.5vh;
  }
`

export const SidebarCPModal = styled(Modal)`
  display: block;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 9999;
`

export const SidebarCPModalClose = styled.button`
  background: ${colors.white};
  border: none;
  float: right;
  cursor: pointer;
  @media (min-width: 800px) {
    width: 2vw !important;
    height: 2vw !important;
  }
  @media (min-width: 1360px) {
    width: 2vw !important;
    height: 2vw !important;
  }
  @media (min-width: 1440px) {
    width: 2vw !important;
    height: 2vw !important;
  }
  @media (min-width: 1600px) {
    width: 2vw !important;
    height: 2vw !important;
  }
  @media (min-width: 1920px) {
    width: 2vw !important;
    height: 2vw !important;
  }
`

export const SidebarCPModalIcon = styled.img<IProps>`
  display: inline;
  width: auto;
  @media (min-width: 800px) {
    font-size: 0.75vw;
    height: ${({ close }) => (close ? '75%' : '2vw')};
  }
  @media (min-width: 1360px) {
    font-size: 0.75vw;
    height: ${({ close }) => (close ? '75%' : '2vw')};
  }
  @media (min-width: 1440px) {
    font-size: 0.75vw;
    height: ${({ close }) => (close ? '75%' : '2vw')};
  }
  @media (min-width: 1600px) {
    font-size: 0.75vw;
    height: ${({ close }) => (close ? '75%' : '2vw')};
  }
  @media (min-width: 1920px) {
    font-size: 0.75vw;
    height: ${({ close }) => (close ? '75%' : '2vw')};
  }
`

export const SidebarCPModalButton = styled(Button)`
  color: ${colors.white}!important;
  background: #10ab3c !important;
  width: 20% !important;
  margin: 0 !important;
  float: right !important;
  @media (min-width: 800px) {
    font-size: 0.75vw;
    height: 5vh !important;
  }
  @media (min-width: 1360px) {
    font-size: 0.75vw;
    height: 5vh !important;
  }
  @media (min-width: 1440px) {
    font-size: 0.75vw;
    height: 5vh !important;
  }
  @media (min-width: 1600px) {
    font-size: 0.75vw;
    height: 5vh !important;
  }
  @media (min-width: 1920px) {
    font-size: 0.75vw;
    height: 5vh !important;
  }
`

export const SidebarCPModalText = styled.p<IProps>`
  color: ${colors.white};
  font-weight: 800;
  width: ${({ list }) => (list ? '60%' : '100%')};
  float: ${({ list }) => (list ? 'left' : 'none')};
  margin: ${({ list }) => (list ? 0 : '1em 0')};
  padding: 0;
  @media (min-width: 800px) {
    font-size: ${({ list }) => (list ? '1vw' : '1.25vw')};
    margin-bottom: ${({ list }) => (list ? 0 : '5vh')};
  }
  @media (min-width: 1360px) {
    font-size: ${({ list }) => (list ? '1vw' : '1.25vw')};
    margin-bottom: ${({ list }) => (list ? 0 : '5vh')};
  }
  @media (min-width: 1440px) {
    font-size: ${({ list }) => (list ? '1vw' : '1.25vw')};
    margin-bottom: ${({ list }) => (list ? 0 : '5vh')};
  }
  @media (min-width: 1600px) {
    font-size: ${({ list }) => (list ? '1vw' : '1.25vw')};
    margin-bottom: ${({ list }) => (list ? 0 : '5vh')};
  }
  @media (min-width: 1920px) {
    font-size: ${({ list }) => (list ? '1vw' : '1.25vw')};
    margin-bottom: ${({ list }) => (list ? 0 : '5vh')};
  }
`

export const SidebarCPModalMapping = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const SidebarCPModalListing = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75em 0;
`

export const SidebarInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0;
  height: 10vh !important;
  @media only screen and (max-width: 1280px) {
    height: 10vh !important;
  }
  @media (min-width: 800px) {
    height: 3.5em;
  }
  @media (min-width: 1360px) {
    height: 3.5em;
  }
  @media (min-width: 1440px) {
    height: 3.5em;
  }
  @media (min-width: 1600px) {
    height: 3.5em;
  }
  @media (min-width: 1920px) {
    height: 3.5em;
  }
`

export const SidebarUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  float: left;
  margin-left: 2vw;
  cursor: pointer;
  margin-bottom: 0;
  height: 5vh !important;
  @media only screen and (max-width: 1280px) {
    width: 65%;
    height: 80% !important;
  }
  @media (min-width: 800px) {
    width: 65%;
    height: 75%;
  }
  @media (min-width: 1360px) {
    width: 65%;
    height: 100%;
  }
  @media (min-width: 1440px) {
    width: 65%;
    height: 100%;
  }
  @media (min-width: 1600px) {
    width: 65%;
    height: 100%;
  }
  @media (min-width: 1920px) {
    width: 65%;
    height: 100%;
  }
`

export const SidebarUserSignature = styled.p`
  background: ${colors.white};
  border-radius: 0.25em;
  color: ${colors.white};
  font-weight: 700;
  padding: 0.1em 0.5em 0.1em 0.5em;
  float: left;
  font-size: 1vw !important;
  padding-top: 1vh !important;
  justify-content: center !important;
  @media only screen and (max-width: 1280px) {
    font-size: 1vw !important;
    padding-top: 1vh !important;
    justify-content: center !important;
  }
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
  @media only screen and (max-width: 1280px) {
    font-size: 1vw !important;
  }
  @media (min-width: 800px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1360px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1440px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1600px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1920px) {
    font-size: 0.7vw;
  }
`
export const PageText = styled.div`
  font-size: 1.1vmin;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-line-clamp: unset;
  -webkit-box-orient: unset;
  line-height: 1.5em;
  @media only screen and (max-width: 900px) {
    font-size: 7px;
  }
`

export const PageTextJust = styled.div`
  text-align: left;
  font-size: 1.1vmin;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-line-clamp: unset;
  -webkit-box-orient: unset;
  line-height: 1.5em;
  @media only screen and (max-width: 900px) {
    font-size: 7px;
  }
`
