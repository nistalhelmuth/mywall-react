import {
  put,
  takeLatest,
  call,
  select,
  delay,
} from 'redux-saga/effects';
import {
  getUserToken,
  getCurrentPage,
  getPageSize,
} from '../reducers';
import * as postTypes from '../types/post';
import * as postActions from '../actions/post';
import * as postApi from '../apis/post';

function* postFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  const currentPage = yield select(getCurrentPage);
  const pageSize = yield select(getPageSize);
  try {
    const response = yield call(
      postApi.getAllPosts,
      profileId,
      pageSize,
      currentPage + 1,
    );
    yield delay(500);
    yield put(postActions.fetchAllPostsConfirm({
      allPosts: response.results,
      currentPage: currentPage + 1, 
      nextPage: response.next !== null ? true : false,
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
    yield delay(500);
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
      randomId,
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
      randomId,
      content: response.content,
      date_created: response.date_created,
      created_by: response.created_by,
    })); 
  } catch (error) {
    yield put(postActions.createPostDecline({
      randomId,
      message: error,
    }));
  }
}

function* commentCreator(action) {
  const {
    payload: {
      postId,
      content,
      randomId,
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
      postId,
      id: response.id,
      content: response.content,
      dateCreated: response.date_created,
      createdBy: response.created_by,
      randomId,
    }));
  } catch (error) {
    yield put(postActions.commentPostDecline({
      postId,
      message: error,
      randomId,
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
    postTypes.CREATED_POST,
    postCreator
  );
  yield takeLatest(
    postTypes.COMMENTED_POST,
    commentCreator
  );
}

export default LoginSaga;
