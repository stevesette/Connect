import React from "react"
import {Link} from "react-router-dom"

class LoginComponent extends React.Component {
  state = {
    username: ''
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          onChange={(event) => {
            const userInput = event.target.value
            this.setState({
              username: userInput
            })
          }}
          value={this.state.username}
          placeholder="Username"/>
        <Link to={`/profile/${this.state.username}`}>
          Login
        </Link>
      </div>
    )
  }
  
}

export default LoginComponent