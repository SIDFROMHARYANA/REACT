import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Page4 = () => {
  const params = useParams();
  const location = useLocation();
  console.log('params', params, location)
  return (
    <div>Page4 {params.id}</div>
  )
}


export default Page4