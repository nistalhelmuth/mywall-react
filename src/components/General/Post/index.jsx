import React, { Component } from 'react';
import { compose } from 'recompose';
import { reduxForm, Field  } from 'redux-form';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FormTextArea from '../FormTextArea';
import Comment from '../Comment'
import * as postActions from '../../../actions/post';
import * as selectors from '../../../reducers';
import styles from './post.module.css';


class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComments: false,
    }
  }

  loadComments(){
    const {
      fetchComments,
      postId,
    } = this.props;
    fetchComments(postId);
    this.setState({
      showComments: true,
    })
  }

  render(){
    const {
      content,
      dateCreated,
      comments,
      created_by,
      handleSubmit,
      createComment,
      commentLoading,
      authId,
      authName,
    } = this.props;
    const {
      showComments,
    } = this.state;
    console.log(comments)
  
    return(
      <div className={styles.post}>
        <Link to={`/profile/${created_by ? created_by.id : authId}`}> 
          <img
            src="assets/defaultProfile.png"
            alt="profileImage"
          />
        </Link>
        <div className={styles.content}>
          <p className={styles.text}>
            {created_by ? created_by.name : authName}
          </p>
          <p className={styles.text}>
            {content}
          </p>
          <p>
            {created_by ? dateCreated : "Creating..."}
          </p>
          <div className={styles.footer}>
            {
              !showComments && created_by && (
                <button onClick={this.loadComments.bind(this)}>
                  View Comments
                </button>
              )
            }
          </div>
          {
            showComments && (
              <>
                <form
                  className={styles.form}
                  onSubmit={handleSubmit(createComment.bind(this))}
                >
                  <button type="submit">Comment</button>
                  <Field
                    name="content"
                    component={FormTextArea}
                    placeholder="write something..."
                  />
                </form>
                {
                 comments && comments.length ? (
                    <div className={styles.bot}>
                      {
                        comments.map((comment) => (
                          <Comment
                            content={comment.content}
                            dateCreated={comment.dateCreated}
                            created_by={comment.created_by}
                          />
                        ))
                      }
                    </div>
                  ) : (
                    <p>
                      be the first to comment :)
                    </p>
                  )
                }
              </>
            )
          }
          {
            commentLoading && (
              <h3 className={styles.loading}>
                Loading...
              </h3>
            )
          }
        </div>
      </div>
    );
  }
}

export default compose(
  reduxForm({
    form: 'commentForm',
  }),
  connect(
    (state, { postId }) => ({
      commentLoading: selectors.getCommentsLoading(state),
      comments: selectors.getAllCommentsByPost(state, postId),
      authId: selectors.getAuthId(state),
      authName: selectors.getAuthName(state),
    }),
    (dispatch, { postId }) => ({
      fetchComments(postId){
        dispatch(postActions.fetchAllComments({
          postId,
        }))
      },
      createComment(values){
        dispatch(postActions.commentPost({
          postId,
          content: values.content,
        }))
      }
    }),
  )
)(Post);
