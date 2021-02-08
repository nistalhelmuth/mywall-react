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
export const getAllPosts = (state) => fromPostReducer.getAllPosts(state.postReducer);

//user
export const getUserInformation = (state) => fromUserReducer.getUserInformation(state.userReducer);