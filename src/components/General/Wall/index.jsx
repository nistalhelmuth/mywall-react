import React from 'react';
import { connect } from "react-redux";
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import FormTextArea from '../FormTextArea';
import Post from '../Post'
import * as postActions from '../../../actions/post';
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
  createPost: PropTypes.func.isRequired,
  enabledPost: PropTypes.bool,
  loading: PropTypes.bool,
}

const Wall = ({
  posts,
  createPost,
  enabledPost,
  loading,
}) => {
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: values => {
      createPost(values);
    },
  });
  return(
    <div className={styles.wall} data-test="wallComponent">
      {
        enabledPost && (
          <form
            data-test="postFormComponent"
            className={styles.form}
            onSubmit={formik.handleSubmit}
          >
            <button type="submit">Post</button>
            <FormTextArea
              id="content"
              name="content"
              type="text"
              placeholder="Write something..."
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </form>
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
          <p data-test="postPlaceholderComponent">
            No posts to display
          </p>
        )
      }
      {
        loading && (
          <h3 className={styles.loading} data-test="postLoadingComponent">
            Loading...
          </h3>
        )
      }
    </div>
  )
};

Wall.propTypes = customPropTypes;

export default connect(
  undefined,
  (dispatch) => ({
    createPost(values){
      dispatch(postActions.createPost({
        content: values.content
      }))
    }
  }),
)(Wall);
