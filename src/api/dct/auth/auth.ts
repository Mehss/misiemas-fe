
import axios from 'axios'
import Cookies from 'js-cookie'

import { authHost } from '~/config'

export function useAuthLogin(userName, password) {
  return axios.post(`${authHost}/user/oauth2/user/login/`, {username: userName, password: password}, {withCredentials: false})
}

export type authLoginQueryHookResult = ReturnType<
  typeof useAuthLogin
>

export function useGetUserData() {
  return axios.get(`${authHost}/user/oauth2/user/fetch_user/`, {headers: {'Authorization': `Bearer ${Cookies.get('auth')}`}, withCredentials: false})
}

export type GetUserDataQueryHookResult = ReturnType<
  typeof useGetUserData
>
