import styled from 'styled-components'

import { IProps } from './types'

export const Column = styled.div<IProps>`
  flex-basis: ${({ custom }) => (custom ? '30%' : '40%')};
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;
`

export const Name = styled.div<IProps>`
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 40%;
  font-weight: 400;
  color: #3a4569;
  @media (min-width: 800px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1280px) {
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

export const Content = styled.div<IProps>`
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 60%;
  font-weight: 600;
  color: #ffffffff;
  margin-left: ${({ briefscope }) => (briefscope ? '-5em' : undefined)};
  @media (min-width: 800px) {
    font-size: 0.7vw;
  }
  @media (min-width: 1280px) {
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

export const OverviewCard = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 39vh;
  padding-top: 1vh;
`

export const OverviewTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  height: 100%;
  max-width: 15%;
  margin: auto 0;
  justify-content: flex-start;
`

export const Image = styled.img<IProps>`
  margin: 0.15rem 2rem;
  width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  height: ${({ logo }) => (logo ? '3vh' : '1.75rem')};
  padding-right: ${({ logo }) => (logo ? undefined : '0.5rem')};
  left: ${({ logo }) => (logo ? undefined : 0)};
  // @media (min-width: 800px) {
  //   margin: 0.15rem 2rem;
  //   width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  //   height: ${({ logo }) => (logo ? '2rem' : '1.75rem')};
  //   padding-right: ${({ logo }) => (logo ? undefined : '0.5rem')};
  //   left: ${({ logo }) => (logo ? undefined : 0)};
  // }
  // /* @media (min-width: 1280px) {
  //   margin: 0.15rem 2rem;
  //   width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  //   height: ${({ logo }) => (logo ? '2rem' : '1.75rem')};
  // } */
  // @media (min-width: 1440px) {
  //   margin: 0.15rem 2rem;
  //   width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  //   height: ${({ logo }) => (logo ? '2rem' : '1.75rem')};
  //   padding-right: ${({ logo }) => (logo ? undefined : '0.5rem')};
  //   left: ${({ logo }) => (logo ? undefined : 0)};
  // }
  // @media (min-width: 1600px) {
  //   margin: 0.15rem 2rem;
  //   width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  //   height: ${({ logo }) => (logo ? '2rem' : '1.75rem')};
  //   padding-right: ${({ logo }) => (logo ? undefined : '0.5rem')};
  //   left: ${({ logo }) => (logo ? undefined : 0)};
  // }
  // @media (min-width: 1920px) {
  //   margin: 0.15rem 2rem;
  //   width: ${({ logo }) => (logo ? 'auto' : 'auto')};
  //   height: ${({ logo }) => (logo ? '2rem' : '1.75rem')};
  //   padding-right: ${({ logo }) => (logo ? undefined : '0.5rem')};
  //   left: ${({ logo }) => (logo ? undefined : 0)};
  // }
`

export const Title = styled.p<IProps>`
  color: #001f4d;
  font-weight: 700;
  width: 70%;
  margin-left: 5%;
  font-size: 1vw;
`

export const Export = styled.div`
  height: auto;
  max-width: 15%;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  margin-left: 10%;
`

export const Icon = styled.img`
  left: 0;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-top: 0.5vh;
  @media (min-width: 800px) {
    width: 1.2vw;
    height: auto;
  }
  /* @media (min-width: 1280px) {
    width: 1.2vw;
    height: auto;
  } */
  @media (min-width: 1440px) {
    width: 1.2vw;
    height: auto;
  }
  @media (min-width: 1600px) {
    width: 1.2vw;
    height: 1.2vw;
  }
  @media (min-width: 1920px) {
    width: 1.2vw;
    height: auto;
  }
`

export const Text = styled.div`
  color: #001f4d;
  font-weight: 600;
  margin-left: 0.25em;
  left: 25%;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media (min-width: 800px) {
    font-size: 0.8vw;
  }
  /* @media (min-width: 1280px) {
    font-size: 0.8vw;
  } */
  @media (min-width: 1440px) {
    font-size: 0.8vw;
  }
  @media (min-width: 1600px) {
    font-size: 0.8vw;
  }
  @media (min-width: 1920px) {
    font-size: 0.8vw;
  }
`

export const OverviewBottom = styled.div`
  display: flex;
  padding: 0.25em 2em;
  font-size: 1.3vmin
`
