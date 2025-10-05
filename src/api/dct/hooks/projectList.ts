import axios from 'axios'
import Cookies from 'js-cookie'

import { dctHost } from '~/config'
import { useAxios } from './useApi'
import { useState } from 'react'

export function useProjectQuery() {
  const { axiosGet } = useAxios()
  
  const getProjectList = () =>
    axiosGet(`http://172.188.1.113:8080/api/projects`, {
      headers: { Authorization: `Bearer ${Cookies.get('auth')}` },
      withCredentials: false,
    })

  const getProjectDetail = (projectDef) =>
    axiosGet(`http://172.188.1.113:8080/api/projects/${projectDef}`, {
      headers: { Authorization: `Bearer ${Cookies.get('auth')}` },
      withCredentials: false,
    })

  return { getProjectList, getProjectDetail }
}
