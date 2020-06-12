import React from "react"
import {Link} from "react-router-dom"

const HomeComponent = () => 
  <div id="pie">
    <h1>Home</h1>
    <Link to="/login">
      Login
    </Link>
    <Link id ="ok" to="/register">
      Register
    </Link>
  </div>

export default HomeComponent
