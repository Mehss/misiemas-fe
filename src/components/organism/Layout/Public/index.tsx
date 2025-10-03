import React, { Suspense } from 'react'
import {
  Switch, Route, Redirect,
} from 'react-router-dom'

import publicRoute from '~/routes/publicRoute'
import useAuth from '~/utils/auth/useAuth'


const PublicLayout = () => {

  const { isLoggedIn } = useAuth()

  return isLoggedIn
    ? null
    : (
      <>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {
              publicRoute.map(({ id, path, component: Component }) => 
              <Route key={id} path={path} component={Component} exact />
              )
            }
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    )
}

export default PublicLayout
