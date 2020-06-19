import React from "react"
import service from "./ProfileService"
import {Link} from "react-router-dom"
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"


class ProfileContainer extends React.Component {
  state = {
    user: [],
    username: this.props.match.params.username,
    followers: 0,
    following: 0,
    posts: [],
    user_found: false
  }
 
  client = new ApolloClient({
    uri: "http://www.instagram.com/" + this.state.username + "?__a=1"
  })


  componentDidMount() {
    service.findUser(this.state.username)
      .then(actualUser =>
      {if (Object.keys(actualUser).length !== 0) {
        this.setState({
          user: actualUser.graphql.user,
          followers: actualUser.graphql.user.edge_followed_by.count,
          following: actualUser.graphql.user.edge_follow.count,
          posts: actualUser.graphql.user.edge_owner_to_timeline_media.edges,
          user_found: true
        })}})
  }

  render() {
    // service for the posts just as the same for the user
    return(
        <div style={{overflowY: "auto"}}>
          <img src={this.state.user.profile_pic_url} alt="profile_picture"/>
          <h1>{this.state.user.full_name}</h1>
          <h3>{this.state.user.biography}</h3>
          <p>
            Followers: {this.state.followers} 
            <br></br> 
            Following: {this.state.following}
          </p>

          <div>
            <h5>Recent Post</h5>
            <ul>
              {this.state.posts.map(post =>
                <div key={post.node.id}>
                    <img src={post.node.display_url} alt={post.node.id} width="300" height="300"/>
                    {/*{post.node.edge_media_to_caption.edges.length !== 0 &&*/}
                     {/*<a>{post.node.edge_media_to_caption.edges[0].node.text}</a>*/}
                    {/*}*/}
                </div>
              )}
            </ul>
            <Link to='/'>
              Back
            </Link>
          </div>
        </div>
      
    )
  }
}

export default ProfileContainer