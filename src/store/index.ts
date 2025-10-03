import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'

import createReducer from './reducers'

// eslint-disable-next-line @typescript-eslint/default-param-last
export const configureAppStore = (initialState = {}, history) => {
  const store = configureStore({
    reducer: createReducer(),
    preloadedState: initialState,
    middleware: getDefaultMiddleware => [
      routerMiddleware(history),
      ...getDefaultMiddleware(),
    ],
  })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer())
    })
  }

  return store
}

export default configureAppStore
