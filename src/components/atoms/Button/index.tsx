import React, { memo } from 'react'

import { Button as Btn } from './style'
import { IButtonProps } from './types'

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, types, sizes } = props
  return (
    <Btn
      {...props}
      sizes={sizes}
      types={types}
      id="m_comp_button"
    >
      {children}
    </Btn>
  )
}

Button.defaultProps = ({
  types: 'primary',
  sizes: 'medium',
})

export default memo(Button)
