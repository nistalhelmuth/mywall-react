import { combineReducers } from 'redux';
import * as postTypes from '../types/post';

export const postDefaultState = {
  loadingPosts: false,
  loadingComments: false,
  nextPage: false,
  currentPage: -1,
  pageSize: 3,
};

const post = (state = postDefaultState, action) => {
  switch(action.type) {
    case postTypes.FETCHED_ALL_POSTS: {
      return {
        ...state,
        loadingPosts: true,
      }
    }
    case postTypes.FETCHED_ALL_POSTS_SUCCEEDED: {
      const {
        payload: {
          nextPage,
          currentPage,
        },
      } = action;
      return {
        ...state,
        nextPage,
        currentPage,
        loadingPosts: false,
      }
    }
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
          commentsById: {},
          commentsOrder: [],
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
    case postTypes.COMMENTED_POST: {
      const {
        payload: {
          postId,
          content,
          randomId,
        } 
      } = action;
      const oldPost = state[postId];
      const postByIdState = {
        ...state,
        [postId]: {
          ...oldPost,
          
          commentsById: {
            [randomId] : {
              content,
            },
            ...oldPost.commentsById,
          },
          commentsOrder: [
            randomId,
            ...oldPost.commentsOrder,
          ],
        }
      }
      return postByIdState;
    }
    case postTypes.COMMENTED_POST_SUCCEEDED: {
      const {
        payload: {
          postId,
          content,
          createdBy,
          dateCreated,
          randomId,
        } 
      } = action;
      const oldPost = state[postId];
      const date = new Date(dateCreated);
      const postByIdState = {
        ...state,
        [postId]: {
          ...oldPost,
          commentsById: {
            ...state[postId].commentsById,
            [randomId] : {
              content,
              id: postId,
              createdBy,
              dateCreated: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
            },
          },
        }
      }
      return postByIdState;
    }
    case postTypes.COMMENTED_POST_FAILED: {
      const {
        payload: {
          postId,
          randomId
        } 
      } = action;
      const oldPost = state[postId];
      delete oldPost.commentsById[randomId];
      oldPost.commentsOrder.shift();
      const postByIdState = {
        ...state,
        [postId]: oldPost,
      }
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
          dateCreated: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
          commentsById: {},
          commentsOrder: [],
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
      const commentsById = {}
      Object.values(allComments).forEach((comment) => {
        const date = new Date(comment.date_created);
        commentsById[comment.id] = {
          ...commentsById[comment.id],
          ...comment,
          dateCreated: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
        }
      });;
      const commentsOrder = Object.values(allComments).map((comments) => comments.id);
      const postByIdState = {
        ...state,
        [postId]: {
          ...oldPost,
          commentsById,
          commentsOrder,
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
      return [
        ...state,
        ...postOrderState,
      ];
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
export const getIfNextPage = (state) => state.post.nextPage;
export const getCurrentPage = (state) => state.post.currentPage;
export const getPageSize = (state) => state.post.pageSize;
export const getPostLoading = (state) => state.post.loadingPosts;
export const getCommentsLoading = (state) => state.post.loadingComments;
export const getAllPosts = (state) => state.order.map((id) => getPostById(state, id));
export const getPostById = (state, id) => state.byId[id] || undefined; 
export const getCommentById = (state, postId, commentId) => state.byId[postId] ? state.byId[postId].commentsById[commentId] : undefined;
export const getAllCommentsByPost = (state, postId) => 
  state.byId[postId] ? (
      state.byId[postId].commentsOrder.map((commentId) => getCommentById(state, postId, commentId))
  ) : ( undefined );
    
