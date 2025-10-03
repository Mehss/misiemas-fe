import { useMemo } from 'react'

import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { userData } = useAuth()

  const profileName = useMemo(() => userData?.userName || 'Admin', [userData])

  return {
    profileName,
  }
}

export default useCustom
