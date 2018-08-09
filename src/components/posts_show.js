import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        // the match here is the top level property
        // the params property that is inside of match is an object that lists all the different wildcard tokens that exist inside the URL
        const { id } = this.props.match.params; // provided directly by react-router
        this.props.fetchPost(id);
    }

    render() {
        // posts[this.props.match.params.id]; //the post we want to show
        const { post } = this.props;

        // when we render this component, when a post has not yet been fetched corretly
        // will show the loading div
        if(!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// props object that is headed or going to this components
function mapStateToProps({ posts }, ownProps) {
    // return { post };
    // with these, our component will only receive single post that we care about and not big list
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);