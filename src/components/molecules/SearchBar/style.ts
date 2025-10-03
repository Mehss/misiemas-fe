import styled from 'styled-components'

import { IProps } from './types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  float: right;
`

export const Wrapper = styled.div<IProps>`
  width: 100%;
  height: 5vh;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5vh 1vw 0.5vh 1vw;
  background-color: #ffff;
  gap: 0.5vh;
  border: 0.25px solid lightgrey;
  border-radius: 0.5vmin;
`

export const Icon = styled.img<IProps>`
  height: 2.5vh;
`
export const IconClear = styled.div`
  height: 1.5vh;
  cursor: pointer;
`

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '4em',
}))`
  border: none;
  width: ${props => props.value == '' ? '15vmin' : '12.7vmin'};
  height: 4vh;
  font-size: 1.5vmin;
  outline: none;
  &:focus {
    outline: none;
  }   
  
`
