import { combineReducers } from 'redux';
import * as postTypes from '../types/post';

const postDefaultState = {
  loadingPosts: false,
  loadingComments: false,
};

const post = (state = postDefaultState, action) => {
  switch(action.type) {
    case postTypes.FETCHED_ALL_POSTS: {
      return {
        ...state,
        loadingPosts: true,
      }
    }
    case postTypes.FETCHED_ALL_POSTS_SUCCEEDED:
    case postTypes.FETCHED_ALL_POSTS_FAILED: {
      return {
        ...state,
        loadingPosts: false,
      }
    }
    case postTypes.FETCHED_ALL_COMMENTS: {
      return {
        ...state,
        loadingComments: true,
      }
    }
    case postTypes.FETCHED_ALL_COMMENTS_SUCCEEDED:
    case postTypes.FETCHED_ALL_COMMENTS_FAILED: {
      return {
        ...state,
        loadingComments: false,
      }
    }
    default: {
      return state;
    }
  }
};

const byId = (state={}, action) => {
  switch (action.type) {
    case postTypes.CREATED_POST: {
      const {
        payload: {
          content,
          randomId,
        },
      } = action;
      const postByIdState = {
        ...state,
        [randomId]: {
          content,
        }
      }
      return postByIdState;
    }
    case postTypes.CREATED_POST_SUCCEEDED: {
      const {
        payload: {
          id,
          randomId,
          content,
          date_created,
          created_by,
        },
      } = action;
      const postByIdState = {
        ...state,
        [randomId]: {
          id,
          content,
          date_created,
          created_by,
        }
      }
      return postByIdState;
    }
    case postTypes.CREATED_POST_FAILED: {
      const {
        payload: {
          randomId,
        },
      } = action;
      const postByIdState = {...state};
      delete postByIdState[randomId];
      return postByIdState;
    }
    case postTypes.FETCHED_ALL_POSTS_SUCCEEDED: {
      const {
        payload: {
          allPosts,
        },
      } = action;
      const postByIdState = {...state}
      Object.values(allPosts).forEach((post) => {
        const date = new Date(post.date_created);
        postByIdState[post.id] = {
          ...postByIdState[post.id],
          ...post,
          dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,

          /**
          comments: post.comments && Object.values(post.comments).map((comment) => {
            const date = new Date(comment.date_created);
            return {
              ...comment,
              dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            }
          })
           */
        }
      });
      return postByIdState;
    }
    case postTypes.FETCHED_ALL_COMMENTS_SUCCEEDED: {
      const {
        payload: {
          allComments,
          postId,
        },
      } = action;
      const oldPost = state[postId];
      const postByIdState = {
        ...state,
        [postId]: {
          ...oldPost,
          comments: Object.values(allComments).map((comment) => {
            const date = new Date(comment.date_created);
            return {
              ...comment,
              dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            }
          }),
        }
      }
      return postByIdState;
    }
    default: {
      return state;
    }
  }
}

const order = (state=[], action) => {
  switch (action.type) {
    case postTypes.CREATED_POST: {
      const {
        payload: {
          randomId,
        },
      } = action;
      const postOrderState = [
        randomId,
        ...state
      ]
      return postOrderState;
    }
    case postTypes.CREATED_POST_FAILED: {
      const postOrderState = [...state];
      postOrderState.shift();
      return postOrderState;
    }
    case postTypes.FETCHED_ALL_POSTS_SUCCEEDED: {
      const {
        payload: {
          allPosts,
        },
      } = action;
      const postOrderState = Object.values(allPosts).map((post) => post.id);
      return postOrderState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  post,
  byId,
  order
})

//selectores
export const getPostLoading = (state) => state.post.loadingPosts;
export const getCommentsLoading = (state) => state.post.loadingComments;
export const getAllPosts = (state) => state.order.map((id) => getPostById(state, id));
export const getPostById = (state, id) => state.byId[id] || undefined; 
export const getAllCommentsByPost = (state, postId) => state.byId[postId] ? state.byId[postId].comments : undefined;

