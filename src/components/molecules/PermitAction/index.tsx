import React from 'react'
import { useHistory } from 'react-router-dom'

import useAuth from '~/utils/auth/useAuth'

interface Props {
  children: any
  error?: any
  redirectIfError?: boolean
  permission: string
}

const PermitAction = ({
  children,
  error = {},
  permission,
  redirectIfError = false,
}: Props) => {
  const { isPermissionGranted, userData } = useAuth()
  const { push } = useHistory()
  const { message = '' } = error || {}

  if (!userData) return null

  if (
    !isPermissionGranted(permission) ||
    message === 'access denied to this menu'
  ) {
    if (redirectIfError) {
      push('/not-authorized')
    }
    return null
  }

  return <>{children}</>
}

export default PermitAction
