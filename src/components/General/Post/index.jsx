import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostForm from '../PostForm'
import Comment from '../Comment'
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
    created_by: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  })),
  created_by: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  createComment: PropTypes.func.isRequired,
  commentLoading: PropTypes.bool,
  authId: PropTypes.number,
  authName: PropTypes.string,
  fetchComments: PropTypes.func.isRequired,
  postId: PropTypes.number,
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
      created_by,
      createComment,
      commentLoading,
      authId,
      authName,
    } = this.props;
    const {
      showComments,
    } = this.state;
    return(
      <div className={styles.post} data-test="postComponent">
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
            {
              showComments && commentLoading && (
                <h3 className={styles.loading}>
                  Loading...
                </h3>
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
                          <Comment
                            key={comment.id}
                            content={comment.content}
                            dateCreated={comment.dateCreated}
                            created_by={comment.created_by}
                          />
                        ))
                      }
                    </div>
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
        </div>
      </div>
    );
  }
}

export default connect(
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
)(Post);
