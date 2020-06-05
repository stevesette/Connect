import React from "react"
import service from "./ProfileService"

class ProfileContainer extends React.Component {
  state = {
    user: [],
    username: "nikhil_akenapalli",
    followers: 0,
    following: 0,
    posts: []
  }

  componentDidMount() {
    service.findUser(this.state.username)
      .then(actualUser =>
        this.setState({
          user: actualUser.graphql.user,
          followers: actualUser.graphql.user.edge_followed_by.count,
          following: actualUser.graphql.user.edge_follow.count,
          posts: actualUser.graphql.user.edge_owner_to_timeline_media.edges
        }))
  }

  render() {
    console.log(this.state.posts)
    
    return(
      <div>
        <h1>{this.state.user.full_name}</h1>
        <h3>{this.state.user.biography}</h3>
        <p>
          Followers: {this.state.followers} 
          <br></br> 
          Following: {this.state.following}
        </p>

        <div>
          <h5>Recent Post</h5>
        </div>
      </div>
    )
  }
}

export default ProfileContainer