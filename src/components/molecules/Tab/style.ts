import styled from 'styled-components'

import { colors } from '~/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.2vmin;
`

export const List = styled('button')<{ isSelected: boolean }>`
  background: ${(props) =>  props.disabled ? colors.white : props.isSelected ? '#7DBE32' : colors.white};
  border: 0.25px solid lightgrey;
  color: ${(props) => props.isSelected ? 'white' : '#212E66'};
  font-weight: 600;
  padding: 0 1vw;
  height: 5vh;
  border-radius: 0.5vmin;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 1.5vmin;
`