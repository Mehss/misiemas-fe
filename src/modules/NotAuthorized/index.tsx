import React, { memo } from 'react'

import StateMessage from '~/components/organism/StateMessage'

import useCustom from './hooks'

const LoginNotAuthorized = () => {
  const { content } = useCustom()
  return (
    <StateMessage
      buttonLink="/"
      buttonText="Try logging in again"
      content={content}
      img="/public/images/not-authorized.svg"
      title="Hmm... We're having trouble logging you in."
    />
  )
}

export default memo(LoginNotAuthorized)
