import React from "react"
import service from "./ProfileService"

class ProfileContainer extends React.Component {
  state = {
    user: [],
    username: "nikhil_akenapalli"
  }

  componentDidMount() {
    service.findUser(this.state.username)
      .then(actualUser =>
        this.setState({
          user: actualUser.graphql.user
        }))
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default ProfileContainer