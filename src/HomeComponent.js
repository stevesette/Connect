import React from "react"
import {Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import UserService from "./UserService"
library.add(faStroopwafel)


class HomeComponent extends React.Component {
  state = {
    currentUser: {},
    loggedIn: false
  }

  componentDidMount() {
    UserService.getCurrentUser()
      .then(actualUser => this.setState({currentUser: actualUser}))
      .then(() => {
        console.log(this.state.currentUser)
        this.setState({loggedIn: Object.keys(this.state.currentUser).length !== 0})
        }
      )
  }

  render() {
    return (
      <div>
        <div id="featured-image"></div>
        <div id="top"></div>
        <div id="bottom">

          <aside>
            <div id="peachy">
                <span class="th th-peach-o"></span>
            </div>
            {
              !this.state.loggedIn &&
              <nav>
                <Link to='/login'>login</Link>
                <Link to='/register'>register</Link>
                <Link to='/privacy'>privacy</Link>
              </nav>
            }
            {
              this.state.loggedIn &&
              <nav>
                <Link to={"/profile/" + this.state.currentUser.username}>profile</Link>
                <Link to='/privacy'>privacy</Link>
              </nav>
            }
          </aside>

          <div id="main-content">
            <h1>Connect</h1>
            {
              !this.state.loggedIn &&
              <div id="bio">
                
                <Link to="/login">
                  Login
                </Link>
                <Link id ="ok" to="/register">
                  Register
                </Link>
                

                <p>The goal of our platform is to give influencers a better means of discovering advertiser pages whose interests match theirs.</p>
                
                <p>
                  A goal of both influencers and advertisers would be to expand their connections with one another 
                  and fill out their profiles to increase outreach from the other party.
                </p>
                
              </div>
            }
            {
              this.state.loggedIn &&
              <div>
                <h5>Logged in as {this.state.currentUser.username}</h5>
                <h6>{this.state.currentUser.type}</h6>
                <Link to="/connect">
                  Connect
                </Link>
                <br></br>
                <button onClick={() => {
                  UserService.logout()
                  this.setState({currentUser: {}, loggedIn: false})
                }}>
                  Logout
                </button>
              </div>
            }
          </div>
          
        </div>
      </div>
    )
  }
} 
  

export default HomeComponent
