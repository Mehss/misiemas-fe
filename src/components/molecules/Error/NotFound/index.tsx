import React from 'react'

import {
  Wrapper,
  ContainerLeft,
  ContainerRight,
  Logo,
  Image,
  Text,
  Button,
} from './style'

const NotFound = () => {
  return (
        <Wrapper>
          <ContainerLeft>
            <Logo src='/public/images/tripatra.png' />
            <Text notes>
              UNDER CONSTRUCTION
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere blandit nibh nec tincidunt. Nulla eget tellus sed nunc euismod auctor sed vel erat. Vivamus at elit imperdiet, auctor mauris id, interdum leo.
            </Text>
            <Button onClick={() => history.back()}>
              Go Back
            </Button>
          </ContainerLeft>
          <ContainerRight>
              <Image src='/public/images/not-found.png' />
          </ContainerRight>
        </Wrapper>
  )
}

export default NotFound
