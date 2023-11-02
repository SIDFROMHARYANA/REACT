import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Service = () => {
  return (
    <div>
        <h2>Our Services</h2>    
        <div className="list">
          <ul>            
            <li><Link to="Amazon">Custom software developement</Link></li>
            <li><Link to="Microsoft">Coding</Link></li>
          </ul>
          <Outlet/>{ /* <Outlet/>  is used within the parent route element to indicate where a child route element should be rendered. */}
        </div>   
    </div>
  )
}


export default Service