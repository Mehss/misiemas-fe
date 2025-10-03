import React, { useMemo, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

import InternalServerError from '~/components/molecules/Error/InternalServerError'
import NotFound from '~/components/molecules/Error/NotFound'
import routes from '~/routes'

import NavBar from '../../NavBar'
import SideBar from '../../SideBar'

import { Wrapper, Box, Container } from './style'

const ProtectedLayout = () => {
  const location = useLocation()
  const routesWithNavbar = useMemo(
    () => routes.filter((route) => route.withNavbar).map((route) => route.path),
    [],
  )
  const routesWithSidebar = useMemo(
    () => routes.filter((route) => route.withSidebar).map((route) => route.path),
    [],
  )

  return (
    <Wrapper>
      <Switch>
        <Route path={routesWithSidebar} >
          <SideBar />
        </Route>
      </Switch>
      <Box custom= {location?.pathname == '/home'}>
      <Switch>
        <Route path={routesWithNavbar}>
          <NavBar />
        </Route>
      </Switch>
      <Container custom full={location?.pathname == '/home'}>
      <InternalServerError>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={!!route.exact}
              />
            ))}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </InternalServerError>
      </Container>
      </Box>
    </Wrapper>
  )
}

export default ProtectedLayout
