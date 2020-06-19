import React from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import UserService from "./UserService"

class LoginComponent extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
  }

  componentDidMount() {
    console.log(UserService.users)
  }

  login = (username) => {
    if(UserService.verifyUser(username)) {
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
          className="form-control"
          onChange={(event) => {this.setState({username: event.target.value})}}
          value={this.state.username}
          placeholder="Username"/>
        {/*<button onClick={this.login(this.state.username)}>*/}
        <input
          className="form-control"
          onChange={(event) => {this.setState({password: event.target.value})}}
          value={this.state.password}
          placeholder="Password"/>
        <button
          className="btn btn-primary"
          onClick={() => {
            UserService.loginUser(this.state.username, this.state.password)
              .then(status => this.props.history.push('/'))
          }}>
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