import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/styles'
import '@progress/kendo-theme-default/dist/all.css'

import IndexPage from '~/pages/index'
import configureStore from '~/store'
import DropdownStyles from '~/styles/dropdown'
import GlobalStyles from '~/styles/global'
import KendoStyles from '~/styles/kendo'
import theme from '~/styles/theme'
import { AuthProvider } from '~/utils/auth/AuthProvider'
// import errorLogger from '~/utils/error-logger'
import history from '~/utils/history'
import { ServiceWorkerProvider } from '~/utils/service-worker'


// init error logger on production env
// if (process.env.NODE_ENV === 'production') {
//   errorLogger.init()
// }

const initialState = {}
const store = configureStore(initialState, history)

const render = () => {
  ReactDOM.render(
    <ServiceWorkerProvider>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <KendoStyles />
            <DropdownStyles />
              <AuthProvider>
                <ConnectedRouter history={history}>
                    <IndexPage />
                </ConnectedRouter>
              </AuthProvider>
          </>
        </ThemeProvider>
      </Provider>
    </ServiceWorkerProvider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
