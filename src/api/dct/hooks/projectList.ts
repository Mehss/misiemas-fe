import axios from 'axios'
import Cookies from 'js-cookie'

import { dctHost } from '~/config'
import { useAxios } from './useApi'
import { useState } from 'react'

export function useProjectQuery() {
  const { axiosGet } = useAxios()
  
  const getProjectList = () =>
    axiosGet(`${dctHost}/api/projects`, {
      headers: { Authorization: `Bearer ${Cookies.get('auth')}` },
      withCredentials: false,
    })

  const getProjectDetail = (projectDef) =>
    axiosGet(`${dctHost}/api/projects/${projectDef}`, {
      headers: { Authorization: `Bearer ${Cookies.get('auth')}` },
      withCredentials: false,
    })

  return { getProjectList, getProjectDetail }
}
