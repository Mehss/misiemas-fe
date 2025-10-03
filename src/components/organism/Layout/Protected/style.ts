import styled from 'styled-components'

import { IProps } from './types'

export const Wrapper = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Box = styled.div<IProps>`
  flex-direction: column;
  width: ${({ custom }) => (custom ? '100%' : '81%')};
  height: ${({ custom }) => (custom ? '100%' : '96vh')};
  margin: ${({ custom }) => (custom ? '0' : '1%')};
`

export const Row = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: ${({ custom }) => (custom ? '4vh' : '5vh')};
  margin-bottom: ${({ custom }) => (custom ? 0 : '1%')};
`

export const Container = styled.div<IProps>`
  border-radius: 1em;
  border-width: 0.1em;
  height: ${({ custom, full }) =>
    full ? '100vh' : custom ? '80.5vh' : '74vh'};
  width: 100%;
`
