import React, { memo } from 'react'

import { Overlay, Wrapper } from '../style'
import { IModalProps } from '../types'

const ModalComponent: React.FC<IModalProps> = (props: IModalProps) => {
  const { children, isOpen } = props
  return (
    <>
      {isOpen && (
        <Overlay>
          <Wrapper onClick={(e) => e.stopPropagation}>{children}</Wrapper>
        </Overlay>
      )}
    </>
  )
}

export default memo(ModalComponent)
