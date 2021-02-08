import {
  put,
  takeLatest,
  call,
  all,
  select,
} from 'redux-saga/effects';
import * as selectors from '../reducers';
import * as postTypes from '../types/post';
import * as postActions from '../actions/post';
import * as postApi from '../apis/post';

function* postFetcher() {
  /**
  const {
    payload: {
      email,
      password,
    },
  } = action;
   */
  try {
    const response = yield call(
      postApi.getAllPosts,
    );
    yield put(postActions.fetchAllPostByUserConfirm({
      allPosts: response,
    }));
  } catch (error) {
    yield put(postActions.fetchAllPostByUserDecline({
      message: error,
    }));
  }
}

function* LoginSaga() {
}

export default LoginSaga;
