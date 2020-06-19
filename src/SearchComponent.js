import React from "react"
import {Link} from "react-router-dom";

class SearchComponent extends React.Component {
    state = {
        search_bar_val: ""
    }

    render() {
        return(
                <div>
                   <input onChange={(e) => this.setState({search_bar_val: e.target.value})}/>
                    <Link to={`/profile/${this.state.search_bar_val}`}>Search</Link>
                </div>

        )
    }
}

export default SearchComponent