import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import postReducer, * as fromPostReducer from './post';
import userReducer, * as fromUserReducer from './user';

export default combineReducers({
  form: reducerForm,
  postReducer,
  userReducer,
});

//post
export const getPostLoading = (state) => fromPostReducer.getPostLoading(state.postReducer);
export const getCommentsLoading = (state) => fromPostReducer.getCommentsLoading(state.postReducer);
export const getAllPosts = (state) => fromPostReducer.getAllPosts(state.postReducer);
export const getAllCommentsByPost = (state, postId) => fromPostReducer.getAllCommentsByPost(state.postReducer, postId);

//user
export const getUserInformation = (state) => fromUserReducer.getUserInformation(state.userReducer);