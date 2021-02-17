import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PostForm from '../PostForm';
import Post from '../Post'
import * as postActions from '../../../actions/post';
import * as selectors from '../../../reducers';
import styles from './wall.module.css';

export const customPropTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    dateCreated: PropTypes.string,
    created_by: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  })),
  fetchPosts: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  enabledPost: PropTypes.bool,
  loading: PropTypes.bool,
}


class Wall extends Component {

  static propTypes = customPropTypes;

  componentDidMount(){
    const {
      fetchPosts
    } = this.props;
    fetchPosts({
      clean: true,
    });
  }

  render() {
    const {
      posts,
      createPost,
      enabledPost,
      loading,
      fetchPosts,
      next,
      postErrors,
    } = this.props
    return (
      <div className={styles.wall} data-test="wallComponent">
        {
          enabledPost && (
            <PostForm data-test="postFormComponent" onSubmit={createPost}/>
          )
        }
        {
          posts && posts.length && postErrors === undefined ? (
            <>
              {
                posts.map((post) => (
                  <Post
                    key={post.id}
                    postId={post.id}
                    content={post.content}
                    dateCreated={post.dateCreated}
                    comments={post.comments}
                    createdBy={post.createdBy}
                    enableComments
                  />
                ))
              }
            </>
          ) : (
            <>
              {
                !loading && (
                  <p data-test="postPlaceholderComponent">
                    {postErrors ? postErrors  : "No posts to display"}
                  </p>
                )
              }
            </>
          )
        }
        {
          loading ? (
            <h3 className={styles.loading} data-test="postLoadingComponent">
              Loading...
            </h3>
          ) : (
            <>
              {
                next && (
                  <button className={styles.more} onClick={() => fetchPosts()}>
                    more
                  </button>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    postErrors: selectors.getPostErrors(state),
    next: selectors.getIfNextPage(state),
  }),
  (dispatch) => ({
    createPost(values){
      dispatch(postActions.createPost({
        content: values.content
      }))
    }
  }),
)(Wall);
