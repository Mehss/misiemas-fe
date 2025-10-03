
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

import { load } from '~/utils/localStorage'

const BreadcrumbCustom = ({ breadcrumbs }) => {
  const history = useHistory()
  const location = useLocation()

  //get project from LocalStorage
  const localStorageGlobalState = load("CURRENT_SELECTED_PROJECT")
  const [projectName, setProjectName] = useState(localStorageGlobalState?.projectName)

  useEffect(() => {
    setProjectName(localStorageGlobalState?.projectDefinition)
  }, [localStorageGlobalState])

  const redir = (url) => {
    if (!url.endsWith('erection') && (!url.endsWith('piping')) && (!url.endsWith('rotating'))) {
      history.push({
        pathname: url,
        state: location?.state
      })
    }
  }

    return (
      <div style={{display: 'flex', flexDirection: 'row', cursor: 'pointer'}}>
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div onClick={()=>{redir(match.url)}} key={index} style={{marginRight: index !== 0 && 5}}>
            {(index === 0 || index === 1) ? '' : index === 2 ? projectName : breadcrumb} {(index !== breadcrumbs.length-1 && index !== 0 && index !== 1 ) && '/'}
          </div>
        ))}
      </div>
    )
}

export default withBreadcrumbs()(BreadcrumbCustom)