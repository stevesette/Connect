
import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent"
import ProfileContainer from "./ProfileContainer"
import HomeComponent from "./HomeComponent"
import RegisterComponent from "./RegisterComponent";
import FindUsersComponent from "./FindUsersComponent";

class RouterComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/login'
            exact={true}
            component={LoginComponent}
          />

          <Route
            path='/register'
            exact={true}
            component={RegisterComponent}
          />

          <Route
            path='/profile/:username'
            exact={true}
            component={ProfileContainer}
          />

          <Route
            path='/connect'
            exact={true}
            component={FindUsersComponent}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterComponent