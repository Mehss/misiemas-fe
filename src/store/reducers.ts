import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import history from '~/utils/history'

import state from './state'

const createReducer = () => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    state: state,
  })

  return rootReducer
}

export default createReducer
