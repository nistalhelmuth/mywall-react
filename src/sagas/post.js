import {
  put,
  takeLatest,
  call,
  select,
} from 'redux-saga/effects';
import {
  getUserToken,
  getCurrentPage,
  getPageSize,
} from '../reducers';
import * as postTypes from '../types/post';
import * as postActions from '../actions/post';
import * as userActions from '../actions/user';
import * as postApi from '../apis/post';

export function* postFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  const currentPage = yield select(getCurrentPage);
  const pageSize = yield select(getPageSize);
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      postApi.getAllPosts,
      profileId,
      pageSize,
      currentPage + 1,
    );
    if(!error) {
      yield put(postActions.fetchAllPostsConfirm({
        allPosts: response.results,
        currentPage: currentPage + 1, 
        nextPage: response.next !== null ? true : false,
      }));
    } else {
      yield put(postActions.fetchAllPostsDecline({
        message: response && response.detail ? response.detail : "Something went wrong :(",
      }));
    }
    if (logout) {
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(postActions.fetchAllPostsDecline({
      message: "Something went wrong :(",
    }));
  }
}

export function* commentsFetcher(action) {
  const {
    payload: {
      postId,
    },
  } = action;
  try {
    const {
      response,
      error,
      logout,
     } = yield call(
      postApi.getAllComments,
      postId
    );
    if(!error){
      yield put(postActions.fetchAllCommentsConfirm({
        allComments: response,
        postId,
      }));
    } else {
      yield put(postActions.fetchAllCommentsDecline({
        message: response && response.detail ? response.detail : "Something went wrong :(",
        postId,
      }));
    }
    if (logout) {
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(postActions.fetchAllCommentsDecline({
      message: "Something went wrong :(",
      postId,
    }));
  }
}

export function* postCreator(action) {
  const {
    payload: {
      content,
      randomId,
    },
  } = action;
  const token = yield select(getUserToken);
  try {
    const {
      response,
      error,
      logout,
     } = yield call(
      postApi.createPost,
      token,
      content
    );
    if(!error) {
      yield put(postActions.createPostConfirm({
        id: response.id,
        randomId,
        content: response.content,
        date_created: response.date_created,
        createdBy: response.created_by,
      })); 
    } else {
      yield put(postActions.createPostDecline({
        randomId,
        message: response && response.detail ? response.detail : "Something went wrong :(",
      }));
    }
    if (logout) {
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(postActions.createPostDecline({
      randomId,
      message: "Something went wrong :(",
    }));
  }
}

export function* commentCreator(action) {
  const {
    payload: {
      postId,
      content,
      randomId,
    },
  } = action;
  const token = yield select(getUserToken);
  try {
    const {
      response,
      error,
      logout,
     } = yield call(
      postApi.createComment,
      token,
      postId,
      content
    );
    if(!error) {
      yield put(postActions.commentPostConfirm({
        postId,
        id: response.id,
        content: response.content,
        dateCreated: response.date_created,
        createdBy: response.created_by,
        randomId,
      }));
    } else {
      yield put(postActions.commentPostDecline({
        message: response && response.detail ? response.detail : "Something went wrong :(",
        postId,
        randomId,
      }));
    }
    if (logout) {
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(postActions.commentPostDecline({
      message: "Something went wrong :(",
      postId,
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
