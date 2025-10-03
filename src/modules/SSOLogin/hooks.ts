import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'


import { isEmpty } from 'lodash-es'


import useAuth from '~/utils/auth/useAuth'

export const useSSOSearchQueries = () => {
  const searchParams = useLocation().search
  if (searchParams) {
    const et = searchParams.split('et=')[1]
    return {et: et}
  }
  return {}
}

const useCustom = () => {
  const { handleLogin } = useAuth()
  const history = useHistory()
  const search = useSSOSearchQueries()

  useEffect(() => {
    if (isEmpty(search)) {
      history.push('/')
    }
    if (search.et) {
      if (search.et) {
        const redirectUrl = '/'

        handleLogin(search.et)
        history.push(redirectUrl)
      } else {
        history.push('/not-authorized')
      }
    }
   
  }, [])

}

export default useCustom
