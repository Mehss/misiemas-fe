import { Pagination } from '@material-ui/lab'
import styled from 'styled-components'

import { colors, radius } from '~/styles/theme'

export const Paginate = styled(Pagination)`
  .MuiPaginationItem-page.Mui-selected {
    color: ${colors.neutral.n20};
    border-radius: calc(${radius.small} - 0.0625rem);
    background-color: ${colors.neutral.n700};
  }
  .MuiPaginationItem-root {
    height: 2rem;
    margin: 0 0.1875rem;
    padding: 0 0.375rem;
    font-size: 0.875rem;
    min-width: 2rem;
    &:active {
      color: ${colors.neutral.n500};
      border-radius: calc(${radius.small} - 0.0625rem);
      background-color: ${colors.neutralAlpha.n30A};
    }
    &:hover {
      color: ${colors.blues.b400};
      background-color: ${colors.blues.b75};
      border-radius: calc(${radius.small} - 0.0625rem);
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;
  border-top: 0.0625rem solid #f0f0f0;
  justify-content: space-between;
  background-color: ${colors.neutral.n0};
`
export const LeftContent = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: flex-start;
`
export const RightContent = styled.div``

export const WrapperShownItem = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperDropDown = styled.div`
  width: 5rem;
  display: flex;
  align-items: center;
`
export const Divider = styled.div`
  width: 0.0625rem;
  height: 100%;
  background-color: #f2f2f2;
`
