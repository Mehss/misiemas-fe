import React from 'react'

import { Clear } from '@mui/icons-material'

import {
  Container,
  Wrapper,
  Icon,
  Input,
  IconClear,
} from './style'


const SearchBar = ({ inputHandler, inputText, placeholder, clearInput }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Icon
            src='/public/images/icons/search.png'
          />
          <Input
            value={inputText}
            placeholder={placeholder}
            onChange={inputHandler}
          />
          {inputText != '' &&
            <IconClear onClick={clearInput}>
              <Clear style={{ fontSize: '2vmin' }} />
            </IconClear>
          }
        </Wrapper>
      </Container>
    </>
  )
}

export default SearchBar