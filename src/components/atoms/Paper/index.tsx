import React, { memo } from 'react'

const Paper = (props: any) => {
  const { children, isWhite, padding, margin, height, width, borderRadius } = props
  return (
    <div
      style={{ 
        background: isWhite ? 'white' : 'transparent',
        padding: padding ? '1.5%' : 0,
        marginBottom: margin ? '2%' : undefined,
        height: height || undefined,
        width: width || undefined,
        borderRadius: borderRadius || '0px',
      }}
      >
        {children}
    </div>
  )
}

export default memo(Paper)
