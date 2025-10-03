/* eslint-disable no-nested-ternary */
import React, { memo } from 'react'
import { PagerProps } from '@progress/kendo-react-data-tools'

import { colors } from '~/styles/theme'
import Text from '~/components/atoms/Text'
import Icon from '~/components/atoms/Icon'
import NumericInput from '~/components/atoms/NumericInput'

import { Wrapper } from './style'

const Pager: React.FC<PagerProps> = (props:PagerProps) => {
  const { skip, take, total /* onPageChange */ } = props
  return (
    <Wrapper>
      <Text color={colors.neutral.n70} types="small">
        {`Showing ${skip + total === 0 ? 0 : skip === 0 ? 1 : skip + 1} - ${
          skip + take < total ? skip + take : total
        } of ${total}`}
      </Text>
      &nbsp;
      &nbsp;
      <Icon.DividerIcon color={colors.neutral.n30} />
      &nbsp;
      &nbsp;
      <Text color={colors.neutral.n800} types="small">
        Listing per Page
      </Text>
      &nbsp;
      &nbsp;
      <NumericInput width="90px" sizes="medium" />
      &nbsp;
      &nbsp;
    </Wrapper>
  )
}

export default memo(Pager)
