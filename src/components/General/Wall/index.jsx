import React from 'react';
import { compose } from 'recompose';
import { reduxForm, Field  } from 'redux-form';
import { connect } from "react-redux";
import FormTextArea from '../FormTextArea';
import Post from '../Post'
import styles from './wall.module.css';

const Main = ({
  posts
}) => (
  <div className={styles.wall}>
    <form
      className={styles.form}
    >
      <button type="submit">Post </button>
      <Field
        name="post"
        component={FormTextArea}
        placeholder="write something..."
      />
    </form>
    {
      posts ? (
        <>
          {
            posts.map((post) => (
              <Post
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
  </div>
);

export default compose(
  reduxForm({
    form: 'postLogin',
  }),
  connect(
    undefined,
    (dispatch) => ({
      createPost(values){
        console.log("create post", values);
      }
    }),
  )
)(Main);
