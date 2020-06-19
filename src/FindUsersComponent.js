import React from "react"
import service from "./UserService"

class FindUsersComponent extends React.Component {
  state = {
    allUsers: [],
    currentUser: {}
  }

  componentDidMount() {
    service.getAllUsers()
      .then(actualUsers => this.setState({allUsers: actualUsers}))
  }

  render() {
    return(
      <table>
        <thead>
          <h1>Connect with Users</h1>
        </thead>
        <tbody>
          {
            this.state.allUsers.map(user =>
              <tr>
                <td>{user.username}</td>
              </tr>  
            )
          }
        </tbody>
      </table>
    )
  }
}

export default FindUsersComponent