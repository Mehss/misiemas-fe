import axios from 'axios'
import useAuth from '~/utils/auth/useAuth'

export function useAxios() {
  const {handleLogout} = useAuth()
  const axiosGet = (url, options) => axios.get(url, options).catch((e) => {
    if (e) {
      handleLogout()
    }
  })
  return {axiosGet}
}