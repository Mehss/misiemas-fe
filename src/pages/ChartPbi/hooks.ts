import { useSelector } from 'react-redux'

import { selectors } from '~/store/state'

const useCustom = () => {
  //get project from redux
  const globalState = useSelector(selectors.selectState)

  return {
    globalState
  }
}

export default useCustom