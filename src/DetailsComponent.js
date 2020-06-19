import React from "react"
import service from "./ProfileService"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'

export default class DetailsComponent extends React.Component {
    state = {
        user: [],
        username: this.props.match.params.username,
        posts: [],
        user_found: false,
        postid: this.props.match.params.postid
    }

    componentDidMount() {
        service.findUser(this.state.username)
            .then(actualUser =>

                      this.setState({
                                        user: actualUser.graphql.user,
                                        posts: actualUser.graphql.user.edge_owner_to_timeline_media.edges
                                            .filter(
                                            post => post.node.id === this.state.postid)
                                    }))

    }
    render() {
        return <div>
            {this.state.posts.map(post =>
                <Card id={post.node.id}>
                    <Card.Header>
                        <Link className="h1" to={`/profile/${this.state.username}`}>
                            {this.state.username}
                        </Link>
                    </Card.Header>
                    <Card.Body>{post.node.edge_media_to_caption.edges[0].node.text}</Card.Body>
                    <Card.Img src={post.node.display_url} alt={post.node.id}/>
                </Card>)}
               </div>
    }
}