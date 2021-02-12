import { combineReducers } from 'redux';
import authReducer, * as fromAuthReducer from './auth';
import postReducer, * as fromPostReducer from './post';
import userReducer, * as fromUserReducer from './user';

export default combineReducers({
  authReducer,
  postReducer,
  userReducer,
});

//auth
export const getUserToken = (state) => fromAuthReducer.getUserToken(state.authReducer);
export const getAuthId = (state) => fromAuthReducer.getAuthId(state.authReducer);
export const getAuthName = (state) => fromAuthReducer.getAuthName(state.authReducer);

//post
export const getPageSize = (state) => fromPostReducer.getPageSize(state.postReducer);
export const getNextPage = (state) => fromPostReducer.getNextPage(state.postReducer);
export const getPostLoading = (state) => fromPostReducer.getPostLoading(state.postReducer);
export const getCommentsLoading = (state) => fromPostReducer.getCommentsLoading(state.postReducer);
export const getAllPosts = (state) => fromPostReducer.getAllPosts(state.postReducer);
export const getAllCommentsByPost = (state, postId) => fromPostReducer.getAllCommentsByPost(state.postReducer, postId);

//user
export const getUserInformation = (state) => fromUserReducer.getUserInformation(state.userReducer);