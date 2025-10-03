import React, { lazy, Suspense } from 'react'

const loadable = (importFunc, withLoading = false) => {
  const LazyComponent = lazy(importFunc)

  return (props) => (
    <Suspense fallback={withLoading ? <h1>Loading</h1> : null}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
