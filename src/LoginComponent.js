import React from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';

class LoginComponent extends React.Component {
  state = {
    username: ''
  }

  render() {
    return (
      <div id= "pie">
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
        <Link id = "ok" to={`/profile/${this.state.username}`}>
          Login
        </Link>
      </div>
    )
  }
  
}

export default LoginComponent