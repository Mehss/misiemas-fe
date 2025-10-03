import styled from 'styled-components'

import { colors } from '~/styles/theme'

import { IProps } from './types'

export const Wrapper = styled.div`
  top:0;
  left:0;
  position: absolute;
  display: flex;
  flex-direction: row;
  background: #F2F2F2;
  padding: 5%;
  width: 100vw;
  height: 100vh;
`

export const ContainerLeft = styled.div`
  padding-right: 5%;
  flex-basis: 50%;
  float: left;
`

export const ContainerRight = styled.div`
  flex-basis: 50%;
  float: right;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: auto;
  height: 17.5%;
  margin-left: 0;
  margin-bottom: 7.5%;
`

export const Text = styled.p<IProps>`
  font-size: ${({ notes }) => notes ? '48px' : '20px'};
  font-weight: ${({ notes }) => notes ? 800 : 500};
  text-transform: ${({ notes }) => notes ? 'capitalize' : undefined};
  color: ${({ notes }) => notes ? `${colors.white}` : '#3A4569'};
  border-bottom: ${({ notes }) => notes ? '0.25em solid #7DBE32' : undefined};
  margin-bottom: 0;
`

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  background: #10AB3C;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  margin-top: 5%;
  padding: 2.5%;
  cursor: pointer;
  &:hover {
    background: #7DBE32;
    color: ${colors.white};
  }
`

export const Image = styled.img`
  height: auto;
  width: 100%;
  margin-top: 12.5%;
`