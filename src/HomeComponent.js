import React from "react"
import {Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import SearchComponent from "./SearchComponent"
library.add(faStroopwafel)


const HomeComponent = () =>
<div>
<div id="featured-image"></div>
<div id="top"></div>
<div id="bottom">

<aside>
<div id="peachy">
    <span className="th th-peach-o"></span>
</div>
<nav>
    <a href="/">home</a>
    <a href="/login">login</a>
    <a href="/register">register</a>
    <a href="/privacy">privacy</a>
</nav>
</aside>
 
<div id="bio">
    <SearchComponent/>
<h1>Connect</h1>

    <Link to="/login">
      Login
    </Link>
    <Link id ="ok" to="/register">
      Register
    </Link>
 

<p>The goal of our platform is to give influencers a better means of discovering advertiser pages whose interests match theirs.</p>
 
<p>A goal of both influencers and advertisers would be to expand their connections with one another and fill out their profiles to increase outreach from the other party.</p>
 
</div>
   
</div>
</div>

export default HomeComponent
