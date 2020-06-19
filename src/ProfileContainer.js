import React from "react"
import service from "./ProfileService"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchComponent from "./SearchComponent"


class ProfileContainer extends React.Component {
  state = {
    user: [],
    username: this.props.match.params.username,
    followers: 0,
    following: 0,
    posts: [],
    user_found: false
  }

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
        <div>
          <SearchComponent/>
            {this.state.user_found && <div>
            <img src={this.state.user.profile_pic_url} alt="profile_picture"/>
            <h1>{this.state.user.full_name}</h1>
            <h3>{this.state.user.biography}</h3>
            <p>
              Followers: {this.state.followers}
              <br></br>
              Following: {this.state.following}
            </p>
            <div>
              <h5>Recent Posts</h5>
              <CardColumns>
                {this.state.posts.map(post =>
                  <Card xl={6} lg={4} md={3} s={2} xs={1}
                      key={post.node.id}>
                    <Link to={`/profile/${this.state.username}/${post.node.id}`}>
                      <Card.Img src={post.node.display_url}
                           alt={post.node.id}/>
                      {/*{post.node.edge_media_to_caption.edges.length !== 0 &&*/}
                       {/*<a>{post.node.edge_media_to_caption.edges[0].node.text}</a>*/}
                      {/*}*/}
                    </Link>
                  </Card>
                )}
              </CardColumns>
              <Link to='/'>
                Back
              </Link>
            </div>
            </div>}
            {
              !this.state.user_found &&
              <div>
                <a>We are sorry! We couldn't find who you were looking for when you searched "{this.state.username}"</a>
                <br/>
                  <a>Please make sure that the username is correct</a>
                <br/>
                <a>Note that we can only use full usernames and not the start of one</a>
              </div>
            }
        </div>
      
    )
  }
}

export default ProfileContainer