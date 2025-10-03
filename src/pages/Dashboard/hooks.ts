import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import lodash from 'lodash'

import { useProjectQuery } from '~/api/dct/hooks/projectList'
import { actions, selectors } from '~/store/state'

interface Filter {
  [key:string] : string
 }
const useProjectList = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [filters, setFilters] = useState<Filter>({
    archive: 'active',
    order: 'desc',
    filter: '',
    projectCategory: '',
  })

  const handleClickCard = useCallback(
    (val) => {
      const title = val?.projectName
      dispatch(actions.setProject(val))
      history.push({
        pathname: `/dct/${val.projectDefinition}`,
        state: { title },
      })
    },
    [history]
  )
  const [projectDataSet, setProjectDataSet] = useState([])

  const [projectsCategories, setprojectsCategories] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  const globalState = useSelector(selectors.selectState)
  const {getProjectList} = useProjectQuery()

  // useEffect(() => {
  //   getProjectList().then(res => {
  //     if(res){
  //       setProjectDataSet(res.data)
  //       setprojectsCategories([...new Set(res.data.map(i => i.projectGroup))])
  //       setFilteredProjects(res.data)
  //     }
  //     setLoading(false)
  //   })
  // }, [])

  // useEffect (() => {
  //   if (!loading){
  //     var tempData = [...projectDataSet]
  //     tempData = tempData.filter((proj) => {
  //       if (filters.archive == 'all') {
  //         return proj
  //       } else if (filters.archive == 'active') {
  //         return proj.isActive == "True"
  //       } else {
  //         return proj.isActive == "False"
  //       }
  //     })
  //     if (filters.projectCategory) {
  //       tempData = tempData.filter((proj) => proj.projectGroup == filters.projectCategory)
  //     }
  //     if (filters.filter) {
  //       tempData = tempData.filter(proj => proj.projectName.toLowerCase().includes(filters.filter) || proj.projectNo?.includes(filters.filter))
  //     }
  //     if (filters.order) {
  //       tempData = lodash.orderBy(tempData, ['contractEffDate'], [filters.order as any])
  //     }
  //     setFilteredProjects([...tempData])
  //   }
    
  // }, [filters, loading])

  const filteredItem = (curcat) => {
    setFilters({...filters, projectCategory: curcat})
  }

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase()
    actions.setFilters({filter: lowerCase})
    setFilters({...filters, filter: lowerCase})
  }

  const sortHandler = (value) => {
    const type = value.target.value
    setFilters({...filters, order: type})
  }

  const archiveHandler = (value) => {
    const arc = value.target.value
    setFilters({...filters, archive: arc})
  }

  const clearInput = () => {
    setFilters({
      archive: 'active',
      order: 'desc',
      filter: '',
      projectCategory: '',
    })
  }
  console.log(filteredProjects)
  return {
    loading,
    clearInput,
    filteredProjects,
    sortHandler,
    projectsCategories,
    filteredItem,
    inputHandler,
    archiveHandler,
    globalState,
    filters,
    handleClickCard,
  }
}

export default useProjectList