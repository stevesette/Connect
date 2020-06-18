import React from "react"
import {Link} from "react-router-dom"

const HomeComponent = () => 
  <div>
    <h1>Home</h1>
    <Link to="/login">
      Login
    </Link>
    <Link to="/register">
      Register
    </Link>
      <Link to="/profile/mica.saan">
          test profile
      </Link>
  </div>

export default HomeComponent