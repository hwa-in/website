import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

const NewProductsPure = () => {
  return <div>Pure Component</div>
}

const NewProducts = () => {
  // console.log(data)
  return (
    <Fragment>
      <NewProductsPure />
    </Fragment>
  )
}

export default NewProducts
