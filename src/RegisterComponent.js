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
        <button onClick={() => {
          if(UserService.addUser(this.state.username)) {
            this.props.history.push('/profile/' + this.state.username)
          } else {
            alert("User " + this.state.username + " already exists. Try logging in")
          }
          }}>
          Register
        </button>
        <Link to='/'>
          Back
        </Link>
      </div>
    )
  }
  
}

export default RegisterComponent