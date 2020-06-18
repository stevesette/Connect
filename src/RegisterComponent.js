import React from "react"
import {Link} from "react-router-dom"
import UserService from "./UserService"

class RegisterComponent extends React.Component {
  state = {
<<<<<<< HEAD
    username: ''
  }

  componentDidMount() {
    console.log(UserService.users)
=======
    username: '',
    password: ''
  }

  componentDidMount() {
>>>>>>> 704fbb55e30139e7225773f1705adaf30673b0d6
  }

  render() {
    return (
      <div id= "pie">
        <h1>Register</h1>
<<<<<<< HEAD
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
=======
        <input
          className="form-control"
          onChange={(event) => {this.setState({username: event.target.value})}}
          value={this.state.username}
          placeholder="Username"/>
        <input
          className="form-control"
          onChange={(event) => {this.setState({password: event.target.value})}}
          value={this.state.password}
          placeholder="Password"/>
        <button 
          className="btn btn-primary"
          onClick={() => {
            UserService.addUser(this.state.username, this.state.password)
            .then(status => this.props.history.push('/profile/' + this.state.username))
          }}>
          Register
        </button>
        <Link to='/'>
>>>>>>> 704fbb55e30139e7225773f1705adaf30673b0d6
          Back
        </Link>
      </div>
    )
  }
  
}

export default RegisterComponent