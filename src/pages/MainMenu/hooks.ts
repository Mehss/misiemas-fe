import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { useProjectQuery } from '~/api/dct/hooks/projectList'
import { selectors, actions } from '~/store/state'
import useAuth from '~/utils/auth/useAuth'

import { customOrder } from './helper'

const useCustom = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const { isPermissionGranted } = useAuth()
  const [projectPbiDataset, setProjectPbiDataset] = useState([])
  const [dataCategories, setDataCategories] = useState([])
  type LocationState = { title?: string }
  const { title } = location?.state as LocationState

  // get data from redux
  const globalState = useSelector(selectors.selectState)
  const project = useSelector(selectors.selectProject)
  const { getProjectDetail } = useProjectQuery()

  useEffect(() => {
    getProjectDetail(project.projectDefinition).then((res) => {
      if (res) {
        setProjectPbiDataset([...projectPbiDataset, ...res.data])
      }
    })
  }, [])

  useEffect(() => {
    const tempData = [
      ...new Set(projectPbiDataset.map((item) => item.projectCategory)),
    ]
    tempData.sort((a, b) => {
      const indexA = customOrder.indexOf(a)
      const indexB = customOrder.indexOf(b)

      if (indexA === -1 && indexB === -1) {
        return a.localeCompare(b)
      } else if (indexA === -1) {
        return 1
      } else if (indexB === -1) {
        return -1
      } else {
        return indexA - indexB
      }
    })
    setDataCategories(tempData)
  }, [projectPbiDataset])
  // const selectedDetailProject = useSelector(selectors.selectDetailsProject)
  // set data to redux
  const handleClickCategory = useCallback(
    (item, projectDetail) => {
      const subCat = projectDetail?.filter(
        (items) =>
          items?.projectSubCategory !== '' && items?.projectSubCategory !== '-'
      )
      if (subCat.length > 0) {
        history.push({
          pathname: `/dct/${globalState?.project?.projectDefinition}/${item?.discipline_url}`,
          state: {
            title: title,
            category: item?.discipline_name,
          },
        })
        dispatch(actions.setSubCategory(projectDetail))
      } else {
        history.push({
          pathname: `/dct/${globalState?.project?.projectDefinition}/${projectDetail[0]?.projectCategory}/${projectDetail[0]?.pageName}`,
          state: {
            title: title,
            category: item?.discipline_name,
          },
        })
        const payload = {
          url: projectDetail[0].url,
          chart: projectDetail[0].pageName,
        }
        dispatch(actions.setUrl(payload))
        dispatch(actions.setPage(projectDetail))
      }
      dispatch(actions.setProjectUrl(item))
      // dispatch(actions.setWeatherForecast(item.projectDefinition))
    },
    [history]
  )
  const handleRefectRedux = () => {
    const payload = {
      url: '',
      chart: '',
    }
    dispatch(actions.setUrl(payload))
    dispatch(actions.setPage([]))
  }

  return {
    dataCategories,
    globalState,
    projectPbiDataset,
    handleClickCategory,
    isPermissionGranted,
    // selectedDetailProject,
    handleRefectRedux,
  }
}

export default useCustom
