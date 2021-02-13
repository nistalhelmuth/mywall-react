import React, { Component } from 'react';
import { connect } from "react-redux";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import FormTextArea from '../FormTextArea';
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
    fetchPosts();
  }

  render() {
    const {
      posts,
      createPost,
      enabledPost,
      loading,
      fetchPosts,
      next,
    } = this.props
    return (
      <div className={styles.wall} data-test="wallComponent">
          {
            enabledPost && (
              <Formik
                  data-test="postFormComponent"
                  initialValues={{
                    content: '',
                  }}
                  onSubmit={(values) => {
                    createPost(values);
                  }}
              > 
                {({
                  values,
                  handleChange,
                  handleSubmit,
                }) => (
                    <form
                      className={styles.form}
                      onSubmit={handleSubmit}
                    >
                      <button type="submit">Post</button>
                      <FormTextArea
                        id="content"
                        name="content"
                        type="text"
                        placeholder="Write something..."
                        onChange={handleChange}
                        value={values.content}
                      />
                    </form>
                  )
                }
              </ Formik>
            )
          }
          {
            posts && posts.length ? (
              <>
                {
                  posts.map((post) => (
                    <Post
                      key={post.id}
                      postId={post.id}
                      content={post.content}
                      dateCreated={post.dateCreated}
                      comments={post.comments}
                      created_by={post.created_by}
                    />
                  ))
                }
              </>
            ) : (
              <>
                {
                  !loading && (
                    <p data-test="postPlaceholderComponent">
                      No posts to display
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
