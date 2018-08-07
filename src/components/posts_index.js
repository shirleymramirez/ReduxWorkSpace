import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
    // react life cycle method
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log("stateprops", this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex); 
// export default connect(null, { fetchPosts })(PostsIndex);
// instead of using mapDispatchToProps, for fetching post(this line here is completely identical in nature)
// connect is doing the same as mapDispatchToProps
