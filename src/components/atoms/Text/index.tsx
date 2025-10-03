import React, { memo } from 'react'

import { colors } from '~/styles/theme'

import { Text } from './style'
import { ITextProps } from './types'

const TextComponent: React.FC<ITextProps> = (props: ITextProps) => {
  const {
    children, types, decoration, color,margin
  } = props

  return (
    <Text
      types={types}
      color={color}
      id="m_comp_text"
      decoration={decoration}
      margin={margin}
    >
      {children}
    </Text>
  )
}

TextComponent.defaultProps = ({
  decoration: 'none',
  color: colors.white,
})

export default memo(TextComponent)
