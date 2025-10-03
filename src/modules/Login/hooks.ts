import { useCallback, useState } from 'react'
import { useAuthLogin } from '~/api/dct/auth/auth'

import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { handleLogin } = useAuth()
  const [error, setError] = useState(false)

  const handleSubmitLogin = useCallback(
    async (values) => {
      setError(false)
      if (values.username) {
        // const data = await useAuthLogin(values.username, values.password).catch(e => setError(true))
        const data = {data: "9108301293.19239123.9123013"}
        if(data){
          const token = data.data
          if (token) {
            handleLogin(token)
          } else {
            setError(true)
          }
        }
      }
    },
    [handleLogin]
  )

  const handleDirectSSO = useCallback((link) => {
    window.location.href = `${link}?redirect_url=${process.env.BASE_URL}/sso/login`
  }, [])

  return {
    data: {
      error,
    },
    error,
    methods: {
      handleDirectSSO,
      handleSubmitLogin,
    },
  }
}

export default useCustom
