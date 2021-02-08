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

function* postFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
   try {
    const response = yield call(
      postApi.getAllPosts,
      profileId
    );
    yield put(postActions.fetchAllPostsConfirm({
      allPosts: response,
    }));
  } catch (error) {
    yield put(postActions.fetchAllPostsDecline({
      message: error,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    postTypes.FETCHED_ALL_POSTS,
    postFetcher
  );
}

export default LoginSaga;
