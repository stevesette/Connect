import React from "react"
import service from "./UserService"
import {Link} from "react-router-dom"

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
          <Link to='/'>Back</Link>
        </thead>
        <tbody>
          {
            this.state.allUsers.map(user =>
              <tr>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => service.connect(this.state.currentUser.id, user.id)}>
                    Connect
                  </button>
                </td>
              </tr>  
            )
          }
        </tbody>
      </table>
    )
  }
}

export default FindUsersComponent