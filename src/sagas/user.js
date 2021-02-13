import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { forwardTo } from '../history';
import * as userTypes from '../types/user';
import * as userActions from '../actions/user';
import * as postApi from '../apis/user';

function* profileFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  try {
    const response = yield call(
      postApi.getProfileInfo,
      profileId
    );
    yield put(userActions.fetchProfileInfoConfirm({
      profileId: response.id,
      email: response.email,
      name: response.name,
      city: response.city,
      visitors: response.visitors,
      genre: response.genre,
      feeling: response.feeling,
      dateCreated: response.date_created,
    }));
  } catch (message) {
    yield put(userActions.fetchProfileInfoDecline({
      error: message,
    }));
  }
}

function* userRegister(action) {
  const {
    payload: {
      email,
      name,
      city,
      genre,
      password,
    },
  } = action;
  try {
    const response = yield call(
      postApi.registerUser,
      email,
      name,
      city,
      genre,
      password,
    );
    yield call(forwardTo, '/');
    yield put(userActions.registerUserConfirm({
      profileId: response.id,
      email,
      name,
      city,
      genre,
      password,
    }));
  } catch (message) {
    yield put(userActions.registerUserDecline({
      error: message,
    }));
  }
}

function* userLogIn(action) {
  const {
    payload: {
      email,
      password,
    },
  } = action;
  try {
    const response = yield call(
      postApi.doLogin,
      email,
      password,
    );
    yield put(userActions.doLoginConfirm({
      id: response.id,
      token: response.token,
      name: response.name,
    }));
  } catch (message) {
    yield put(userActions.doLoginDecline({
      error: {
        email: message.error,
      }
    }));
  }
}



function* LoginSaga() {
  yield takeLatest(
    userTypes.FETCHED_USER_PROFILE,
    profileFetcher
  );
  yield takeLatest(
    userTypes.USER_REGISTERED,
    userRegister
  );
  yield takeLatest(
    userTypes.USER_LOGED_IN,
    userLogIn
  );
}

export default LoginSaga;
