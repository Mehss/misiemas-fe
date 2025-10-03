import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { actions, selectors } from '~/store/state'

const useCustom = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  type LocationState = { title?: string; category?: string }
  const { title, category } = location?.state as LocationState
  // get data from redux
  const globalState = useSelector(selectors.selectState)

  // set data to redux
  const handleClickSubcategory = useCallback(
    (subcategory, page) => {
      history.push({
        pathname: `/dct/${globalState?.project?.projectDefinition}/${page[0]?.projectCategory}/${page[0]?.projectSubCategory}/summary`,
        state: {
          title: title,
          category: category,
          subcategory: subcategory?.discipline_name,
        },
      })
      const payload = {
        url:page[0].url,
        chart: page[0].pageName
      }
      dispatch(actions.setUrl(payload))
      dispatch(actions.setProjectUrl(subcategory?.discipline_url))
      dispatch(actions.setPage(page))
    },
    [history]
  )

  const handleRefectRedux = () =>{
    const payload = {
      url:'',
      chart: ''
    }
    dispatch(actions.setUrl(payload))
    dispatch(actions.setPage([])) 
  }
  // get data from redux

  return {
    handleClickSubcategory,
    globalState,
    handleRefectRedux
  }
}

export default useCustom
