import React from 'react'

import { colors } from '~/styles/theme'
import Text from '~/components/atoms/Text'
import Icon from '~/components/atoms/Icon'
import Button from '~/components/atoms/Button'
import TextInput from '~/components/atoms/TextInput'
import AutoComplete from '~/components/atoms/AutoComplete'

import { Wrapper } from './style'
import { IHeaderGridProps } from './types'

const HeaderGrid:React.FC<IHeaderGridProps> = (props:IHeaderGridProps) => {
  const {
    title,
    option,
    optionText,
    leftButtonLabel,
    optionValueKey,
    rightButtonLabel,
    onClickLeftButton,
    onClickRightButton,
  } = props
  return (
    <Wrapper>
      <Text
        types="h4"
        color={colors.neutral.n800}
      >
        {title}
      </Text>
      <div style={{ display: 'flex' }}>
        <TextInput
          sizes="large"
          types="suffix"
          placeholder="search"
          icon={<Icon.SearchIcon color={colors.blues.b400} />}
        />
        &nbsp;&nbsp;
        <AutoComplete
          helper={false}
          types="normal"
          sizes="compact"
          options={option}
          placeholder="Choice"
          optionText={optionText}
          optionValueKey={optionValueKey}
        />
        &nbsp;&nbsp;
        <Button
          sizes="medium"
          types="secondary"
          onClick={onClickLeftButton}
        >
          {leftButtonLabel}
        </Button>
        &nbsp;&nbsp;
        <Button
          sizes="medium"
          types="primary"
          onClick={onClickRightButton}
        >
          {rightButtonLabel}
        </Button>
      </div>
    </Wrapper>
  )
}

export default HeaderGrid
