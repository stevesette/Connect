import React from "react"
import {Link} from "react-router-dom"
import UserService from "./UserService"

class RegisterComponent extends React.Component {
  state = {
    username: '',
    password: '',
    type: ''
  }

  register = () => {
    if(this.state.username === '' || this.state.password === '' || this.state.type === '') {
      alert("Fill out all of the fields")
    } else {
      UserService.addUser(this.state.username, this.state.password, this.state.type)
        .then(status => this.props.history.push('/'))
    }
  }

  render() {
    return (
      <div id= "pie">
        <h1>Register</h1>
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

        <div onChange={(event) => this.setState({type: event.target.value})}>
          <label>
            <input type="radio" name="user-type" value="influencer"/>
            Influencer
          </label>
          <label>
            <input type="radio" name="user-type" value="advertiser"/>
            Advertiser
          </label>
        </div>
        
        <br></br>
        <button 
          className="btn btn-primary"
          onClick={() => this.register()}>
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
