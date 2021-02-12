import React from 'react';
import { connect } from "react-redux";
import { useFormik } from 'formik';
import FormTextArea from '../FormTextArea';
import Post from '../Post'
import * as postActions from '../../../actions/post';
import styles from './wall.module.css';

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
    <div className={styles.wall}>
      {
        enabledPost && (
          <form
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
          <p>
            No posts to display
          </p>
        )
      }
      {
        loading && (
          <h3 className={styles.loading}>
            Loading...
          </h3>
        )
      }
    </div>
  )
};

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
