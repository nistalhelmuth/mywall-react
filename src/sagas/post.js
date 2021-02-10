import {
  put,
  takeLatest,
  call,
  select,
} from 'redux-saga/effects';
import { getUserToken } from '../reducers';
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

function* commentsFetcher(action) {
  const {
    payload: {
      postId,
    },
  } = action;
   try {
    const response = yield call(
      postApi.getAllComments,
      postId
    );
    yield put(postActions.fetchAllCommentsConfirm({
      allComments: response,
      postId,
    }));
  } catch (error) {
    yield put(postActions.fetchAllCommentsDecline({
      message: error,
    }));
  }
}

function* postCreator(action) {
  const {
    payload: {
      content,
    },
  } = action;
  const token = yield select(getUserToken);
  try {
    const response = yield call(
      postApi.createPost,
      token,
      content
    );
    yield put(postActions.createPostConfirm({
      id: response.id,
      content: response.content,
      date_created: response.date_created,
      created_by: response.created_by,
    }));
  } catch (error) {
    yield put(postActions.createPostDecline({
      message: error,
    }));
  }
}

function* commentCreator(action) {
  const {
    payload: {
      postId,
      content,
    },
  } = action;
  const token = yield select(getUserToken);
  try {
    const response = yield call(
      postApi.createComment,
      token,
      postId,
      content
    );
    yield put(postActions.commentPostConfirm({
      id: response.id,
      content: response.content,
      date_created: response.date_created,
      created_by: response.created_by,
    }));
  } catch (error) {
    yield put(postActions.commentPostDecline({
      message: error,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    postTypes.FETCHED_ALL_POSTS,
    postFetcher
  );
  yield takeLatest(
    postTypes.FETCHED_ALL_COMMENTS,
    commentsFetcher
  );
  yield takeLatest(
    postTypes.FETCHED_ALL_POSTS,
    postFetcher
  );
  yield takeLatest(
    postTypes.CREATED_POST,
    postCreator
  );
  yield takeLatest(
    postTypes.COMMENTED_POST,
    commentCreator
  );
}

export default LoginSaga;
