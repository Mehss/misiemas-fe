import React from 'react'
import { useHistory } from 'react-router-dom'

import { isEmpty } from '~/utils/string-func'

import useCustom from './hooks'
import { Wrapper } from './style'

const ProgressSummary = () => {
  const history = useHistory()
  const { globalState } = useCustom()

  if (globalState.project == null) {
    history.push(`/`)
  }

  const url = globalState?.url
  return (
    <Wrapper>
      {!isEmpty(url) ?
        < iframe title="Report Section" style={{ width: '100vw', height: '80vh' }} src={url} /> :
        <div style={{
          backgroundImage: `url("/public/images/no-data.svg")`,
          width: '80vw',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '0.5vmin'
        }}></div>
      }
    </Wrapper >
  )
}

export default ProgressSummary
