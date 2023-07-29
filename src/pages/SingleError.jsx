import React from 'react'
import { useRouteError } from 'react-router-dom'

const SingleError = () => {
  const error =useRouteError()
  
  return (
    <h2>{error.message}</h2>
  )
}

export default SingleError