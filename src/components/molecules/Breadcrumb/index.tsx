import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  //   / {crumbs[0].path}
  if (crumbs.length <= 1) {
    if (crumbs[0].title === 'Dashboard') {
      return <Link to="/dashboard">Welcome, User! <br/> This is dgagdsajhg </Link>
    }
    return <div>{crumbs[0].title}</div>
  }

  return (
    <div>
      {/* Link back to any previous steps of the breadcrumb. */}
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>{name}</span>
        ) : (
            <div>{name} / {path}</div>
        //   <Link key={key} to={path}>
        //     {name} / {' '}
        //   </Link>
        ),
      )}
    </div>
  )
}

export default Breadcrumbs