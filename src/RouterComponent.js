import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent"
import ProfileContainer from "./ProfileContainer"

class RouterComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            path='/'
            exact={true}
            component={LoginComponent}
          />

          <Route
            path='/profile/:username'
            exact={true}
            component={ProfileContainer}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterComponent