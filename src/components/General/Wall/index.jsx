import React, { Component } from 'react';
import { compose } from 'recompose';
import { reduxForm, Field  } from 'redux-form';
import { connect } from "react-redux";
import FormTextArea from '../FormTextArea';
import Post from '../Post'
import * as postActions from '../../../actions/post';
import styles from './wall.module.css';

const Wall = ({
  posts,
  createPost,
  handleSubmit,
  enabledPost,
  loading,
}) => (
  <div className={styles.wall}>
    {
      enabledPost && (
        <form
          className={styles.form}
          onSubmit={handleSubmit(createPost.bind(this))}
        >
          <button type="submit">Post</button>
          <Field
            name="content"
            component={FormTextArea}
            placeholder="write something..."
          />
        </form>
      )
    }
    {
      posts ? (
        <>
          {
            posts.map((post) => (
              <Post
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
);

export default compose(
  reduxForm({
    form: 'postForm',
  }),
  connect(
    undefined,
    (dispatch) => ({
      createPost(values){
        dispatch(postActions.createPost({
          content: values.content
        }))
      }
    }),
  )
)(Wall);
