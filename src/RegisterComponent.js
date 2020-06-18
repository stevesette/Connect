import React from "react"
import {Link} from "react-router-dom"
import UserService from "./UserService"

class RegisterComponent extends React.Component {
  state = {
    username: ''
  }

  componentDidMount() {
    console.log(UserService.users)
  }

  render() {
    return (
      <div id= "pie">
        <h1>Register</h1>
        <input 
          onChange={(event) => {
            const userInput = event.target.value
            this.setState({
              username: userInput
            })
          }}
          value={this.state.username}
          placeholder="Username"/>
        <button onClick={UserService.addUser(this.state.username)}>
          Register
        </button>
        <Link  id = "ok" to='/'>
          Back
        </Link>
      </div>
    )
  }
  
}

export default RegisterComponent