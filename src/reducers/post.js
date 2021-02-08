import { combineReducers } from 'redux';
import * as postTypes from '../types/post';

const byId = (state={}, action) => {
  switch (action.type) {
    case postTypes.FETCHED_ALL_POSTS_SUCCEEDED: {
      const {
        payload: {
          allPosts,
        },
      } = action;
      const postByIdState = {}
      Object.values(allPosts).forEach((post) => {
        const date = new Date(post.date_created);
        postByIdState[post.id] = {
          ...post,
          dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
          comments: post.comments && Object.values(post.comments).map((comment) => {
            const date = new Date(comment.date_created);
            return {
              ...comment,
              dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            }
          })
        }

      }
      );
      return postByIdState;
    }
    default: {
      return state;
    }
  }
}

const order = (state=[], action) => {
  switch (action.type) {
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
  byId,
  order
})

//selectores
export const getPostById = (state, id) => state.byId[id] || undefined; 
export const getAllPosts = (state) => state.order.map((id) => getPostById(state, id));

