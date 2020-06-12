import React from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import UserService from "./UserService"

class LoginComponent extends React.Component {
  state = {
    username: ''
  }

  componentDidMount() {
    console.log(UserService.users)
  }

  login = (username) => {
    if(UserService.existingUser(username)) {
      this.props.history.push('/profile/' + username)
    } else {
      console.log("user " + username + " not found")
    }
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
        <button onClick={() => this.login(this.state.username)}>
          Login
        </button>
        <Link to='/'>
          Back
        </Link>
      </div>
    )
  }
  
}

export default LoginComponent