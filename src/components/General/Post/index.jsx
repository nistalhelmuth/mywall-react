import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostForm from '../PostForm'
import * as postActions from '../../../actions/post';
import * as selectors from '../../../reducers';
import styles from './post.module.css';

export const customPropTypes = {
  content: PropTypes.string,
  dateCreated: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    dateCreated: PropTypes.string,
    createdBy: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  })),
  createdBy: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  createComment: PropTypes.func.isRequired,
  commentLoading: PropTypes.bool,
  authId: PropTypes.number,
  authName: PropTypes.string,
  fetchComments: PropTypes.func.isRequired,
  postId: PropTypes.number,
  enableComments: PropTypes.bool.isRequired,
  commentErrorMessage: PropTypes.string,
}

class Post extends Component {

  static propTypes = customPropTypes;

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
      createdBy,
      createComment,
      commentLoading,
      authId,
      authName,
      enableComments,
      commentErrorMessage,
    } = this.props;
    const {
      showComments,
    } = this.state;
    return(
      <div className={styles.post} data-test="postComponent">
        <Link to={`/profile/${createdBy ? createdBy.id : authId}`}> 
          <img
            src="assets/defaultProfile.png"
            alt="profileImage"
          />
        </Link>
        <div className={styles.content}>
          <p className={styles.text}>
            {createdBy ? createdBy.name : authName}
          </p>
          <p className={styles.text}>
            {content}
          </p>
          <p>
            {createdBy ? dateCreated : "Creating..."}
          </p>
          <div className={styles.footer}>
            {
              !showComments && enableComments && createdBy && (
                <button onClick={this.loadComments.bind(this)}>
                  View Comments
                </button>
              )
            }
          </div>
          {
            showComments && (
              <>
                {
                  authId && (
                    <PostForm onSubmit={createComment}/>
                  )
                }
                {
                 comments && comments.length ? (
                    <div className={styles.bot}>
                      {
                        comments.map((comment) => (
                          <Post
                            key={comment.id}
                            content={comment.content}
                            dateCreated={comment.dateCreated}
                            createdBy={comment.createdBy}
                          />
                        ))
                      }
                    </div>
                  ) : (
                    <>
                      {
                        commentErrorMessage ? (
                          <p>
                            {commentErrorMessage}
                          </p>
                        ) : (
                        <>
                          {
                            !commentLoading && (
                              <p>
                                {authId ? "be the first to comment" : "No comment to show"}
                              </p>

                            )
                          }
                        </>
                        )
                      }
                    </>
                  )
                }
                {
                  commentLoading && (
                    <p className={styles.loading}>
                      Loading...
                    </p>
                  )
                }
              </>
            )
          }
        </div>
      </div>
    );
  }
}

export default connect(
  (state, { postId }) => ({
    commentLoading: selectors.getCommentLoading(state, postId),
    commentErrorMessage: selectors.getCommentErrorMessage(state, postId),
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
)(Post);
